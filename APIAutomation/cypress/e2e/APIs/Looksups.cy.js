describe("LookupsAPIS", ()=>{
    let authToken;
    before("generate token", ()=>{

        cy.request({
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
        authToken = response.body.access_token;
        cy.
        wrap(authToken).as('authToken');
        });
    });
    it("Get Country", () => {
            cy.request({
                method: "GET",
                url: "https://apis-internal-qa.shrss.com/unity-web-exp/v1/country",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });
         it("Get State", () => {
            cy.request({
                method: "GET",
                url: "https://apis-qa.shrss.com/unity-web-exp/v1/country/:country-code/state",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });
         it("Get Tiers List", () => {
            cy.request({
                method: "GET",
                url: "https://apis-qa.shrss.com/unity-web-exp/v1/tier/info",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });

        });
