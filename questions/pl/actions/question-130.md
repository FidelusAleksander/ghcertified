---
question: "Które z poniższych są prawdziwe w kwestii bloków `outputs` na poziomie workflow a na poziomie job?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job"
---

- [ ] Bloki `outputs` na poziomie job powinny być używane tylko w workflow wywołującym, a nie w workflow wielokrotnego użytku.
> Workflows wielokrotnego użytku mogą mieć zarówno bloki `outputs` na poziomie job, jak i na poziomie workflow.
- [x] Blok `outputs` na poziomie workflow powinien być używany tylko w workflow wielokrotnego użytku, a nie w workflow wywołującym.
> Blok `outputs` na poziomie "workflow" odnosi się do bloku `outputs`, który jest bezpośrednim dzieckiem `workflow_call` w workflow wielokrotnego użytku. W workflow, które nie są wielokrotnego użytku, bloki `outputs` powinny występować tylko na poziomie job.
- [x] Workflow wielokrotnego użytku może zawierać zarówno bloki `outputs` na poziomie workflow jak i na poziomie job.
> Jeśli istnieje potrzeba ustawienia wyniku w workflow wielokrotnego użytku i przekazania tego samego wyniku do workflow wywołującego, należy użyć zarówno bloku `outputs` na poziomie workflow, jak i na poziomie job. 
> Więcej szczegółów można znaleźć w dokumentacji: https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
- [ ] Blok `outputs` na poziomie job musi mieć następującą strukturę:
```
outputs:
    <output-name>
        value: ${{ steps.<step-name>.outputs.<output-name> }}
```
> Blok `outputs` na poziomie job używa nienakładającej się struktury par `klucz=wartość`. Więcej szczegółów można znaleźć w oficjalnej dokumentacji (https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job).
- [x] Blok `outputs` na poziomie workflow musi mieć następującą strukturę:
```
outputs:
    <output-name>
        value: ${{ jobs.<job-name>.outputs.<output-name> }}
```
> Blok `outputs` na poziomie workflow musi przestrzegać powyższej struktury. Klucz `value` jest zawsze wymagany. Opcjonalnie może być również użyty klucz `description` (nie pokazano go w powyższym przykładzie). 
> Więcej szczegółów można znaleźć w dokumentacji - https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
