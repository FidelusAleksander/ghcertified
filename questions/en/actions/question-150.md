---
question: "Dorothea is troubleshooting a workflow triggered by a push event and is interested in seeing details about the webhook. How can she view the entire payload of the webhook that triggered the workflow?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] Using the `github.event` object
> `github.event` will show the full event webhook payload. This payload varies upon the type of event. See the [Webhook events and payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads) for more details.
- [ ] Checking the "Show event webhook payload" checkbox under the workflow run options.
- [ ] Setting a secret or variable named `SHOW_EVENT_PAYLOAD` to `true`
- [ ] Navigating to the "Webhooks" section of the repository settings 
> The "Webhooks" section in repository settings will only show details for custom webhooks, not standard event webhooks like `push`. 