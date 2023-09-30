// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("OauthToken", () =>{
   return cy.request({
        method: 'POST',
        url: 'https://login-qa.unitybyhardrock.com/oauth2/token',
        headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
               'Authorization': 'Basic Y3FDTnBlZkxDb2lxZWY2NjM3SWVMaGZFN2t3YTpuVHlSM1B3S2tIbVlBUER6TU44Szh5aUxwTjRh'
        },
        body:{
            username: 'cqCNpefLCoiqef6637IeLhfE7kwa',
            password: 'nTyR3PwKkHmYAPDzMN8K8yiLpN4a',
            grant_type: 'client_credentials'
        }
    })
    .then((response)=>{
       Cypress.env("apiToken", response.body.access_token)
       cy.log("apiToken")
    })

})
        