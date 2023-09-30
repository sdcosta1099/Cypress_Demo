describe("LocationAPIS", ()=>{
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
    it("Get Categories", () => {
            cy.request({
                method: "GET",
                url: "https://apis-qa.shrss.com/unity-web-exp/v1/location/category",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });
         it("Get Locations", () => {
            cy.request({
                method: "GET",
                url: "https://apis-qa.shrss.com/unity-web-exp/v1/location",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });
         it("Get Venues", () => {
            cy.request({
                method: "GET",
                url: "https://apis-qa.shrss.com/unity-web-exp/v1/location/venue",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });
        //  it("Get Favorites", () => {
        //     cy.request({
        //         method: "GET",
        //         url: "https://apis-internal-qa.shrss.com/unity-web-exp/v1/location/favorite",
        //         headers: {
        //             Authorization: 'Bearer ' +authToken
        //         },
        //     }).then((response)=> {
        //         expect(response.status).to.equal(200);
        //     });
        //  });

         it("Get Communication", () => {
            cy.request({
                method: "GET",
                url: "https://apis-qa.shrss.com/unity-web-exp/v1/location/communication",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });
         it("Get Recommended for Opt In", () => {
            cy.request({
                method: "GET",
                url: "https://apis-internal-qa.shrss.com/unity-web-exp/v1/profile/:profile-id/location/recommended-for-opt-in",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });
         it("Get Nearby Locations", () => {
            cy.request({
                method: "GET",
                url: "https://apis-qa.shrss.com/unity-web-exp/v1/location/nearby?longitude=-80.199592&latitude=26.288166&radius=500&limit=50&favorite=false&communication=false",
                headers: {
                    Authorization: 'Bearer ' +authToken
                },
            }).then((response)=> {
                expect(response.status).to.equal(200);
            });
         });

        });
