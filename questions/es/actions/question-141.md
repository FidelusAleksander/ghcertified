---
question: "¿Por qué podrías usar `hashFiles` al utilizar `actions/cache`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles"
---
```yaml
  - uses: actions/cache@v5
    with:
      path: ~/.npm
      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
```
- [x] Si una clave de caché contiene el archivo de dependencias envuelto en `hashFiles`, la clave cambia cuando se actualiza el archivo de dependencias, lo que ayuda a mantenerla actualizada.
> `hashFiles` es una función integrada de GitHub que crea un hash de la ruta especificada. Usarlo para componer una clave de caché hace que el hash se regenere, lo que a su vez actualiza la clave de caché. La documentación oficial [Dependency Caching Reference](https://docs.github.com/en/actions/reference/workflows-and-actions/dependency-caching#example-using-the-cache-action) muestra cómo usar `hashFiles` como parte de una clave de caché.
- [ ] `hashFiles` es necesario para la compatibilidad con runners de Windows.
- [ ] Al usar `hashFiles` como parte de una clave de caché, si no se encuentra la caché, `hashFiles` proporciona información adicional para depuración.  
- [ ] Al usar `hashFiles` como parte de una clave de caché, se generará un paso adicional en el flujo de trabajo que lo invoca. Este paso del flujo de trabajo imprime el valor del hash SHA-256 de la clave de caché como referencia.  
> Crear un hash de la clave de caché no sería útil en la mayoría de las situaciones.
