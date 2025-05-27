az containerapp up `
  --name exertive-angular-laboratory `
  --resource-group exertive-application-resources `
  --location uksouth `
  --environment  exertive `
  --image exertive.azurecr.io/exertive-angular-laboratory:latest `
  --target-port 80 `
  --ingress external `
  --query properties.configuration.ingress.fqdn
