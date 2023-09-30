describe("ProfileAPIs", ()=>{
    let authToken;
    it("generate token", ()=>{
        let jsessionIdValue;
        cy.request({
            url: 'https://login-qa.unitybyhardrock.com/oauth2/authorize',
            qs:{
                response_type: 'code',
                client_id: 'vpu0Zgpk6OvNMi3ouiOTwTR0iHoa',
                redirect_uri: 'https://local.unity.com/logincallback',
                scope: 'openid',
                layout_id: 'UNT'
            },
            headers: {
                'Content-Type': 'application/JSON'
            },
            method: 'GET',
        })
        .then((response)=>{
      const setCookieHeader = response.headers['set-cookie'];
      if(setCookieHeader){
        const cookies = setCookieHeader.toString().split(';');
        const jsessionattribute = cookies.find((attr)=> attr.trim().startsWith('JSESSIONID='));
        if(jsessionattribute) {
             jsessionIdValue = jsessionattribute.split('=')[1].trim();
            cy.log(jsessionIdValue);
             cy.wrap(jsessionIdValue).as('jsessionIdValue');
        }     
     else {
            cy.log('JSESSIONID is not found in set-cookie')
        }
    }else{
        cy.log('set cookie is not found in response header')

        }
    });
    cy.request({
        url:  'https://login-qa.unitybyhardrock.com/commonauth', 
        method: 'POST',
        header: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: {
            mode: 'urlencoded',
            urlencoded: [
                {key: "username", value: '807880317' + "@carbon.super", disabled: false},
                {key: "password", value: 'Password01@', disabled: false},
                {key: "sessionDataKey", value: jsessionIdValue, disabled: false},
                {key: "mobileApp", value: "true", disabled: false}
            ]
        }
    }).then((response2)=>{
        const auth = response2.headers;
        cy.log(auth);
});
});
//       it("send Common Auth", ()=>{
//          cy.request({
//             url:  'https://login-qa.unitybyhardrock.com/commonauth', 
//             method: 'POST',
//             header: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: {
//                 mode: 'urlencoded',
//                 urlencoded: [
//                     {key: "username", value: '807880317' + "@carbon.super", disabled: false},
//                     {key: "password", value: 'Password01@', disabled: false},
//                     {key: "sessionDataKey", value: 'ExtractedSession', disabled: false},
//                     {key: "mobileApp", value: "true", disabled: false}
//                 ]
//             }
//         }).then((response2)=>{
//             const auth = response2.body;
//             cy.log(auth);
//     });
// });
        
     it("sending second request", () => {

        cy.intercept({
            
            url: "https://login-qa.unitybyhardrock.com/oauth2/authorize",
            query:{
                response_type: 'code',
                client_id: 'vpu0Zgpk6OvNMi3ouiOTwTR0iHoa',
                redirect_uri: 'https://local.unity.com/logincallback',
                scope: 'openid',
                layout_id: 'UNT'
            },
            method: "GET",
            headers: {
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br'
            },
        }).then((response3)=> {
            // const res1 = response2.body;
              });
            
    });
});