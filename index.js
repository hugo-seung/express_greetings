// https://github.com/bitinn/node-fetch
const fetch = require('node-fetch')

// https://expressjs.com/ko/4x/api.html
const express = require('express')
const app = express()


// webserver listen on port 3000
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});


/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 | Test
 *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/


// responds for root path
app.get('/', function(request, response, next) {
    // console.log('...')
    // response.type('json')
    // response.send('{"jti":"884f088e-0090-4917-8232-99d0a91ea674","exp":1594358391,"nbf":0,"iat":1594358091,"iss":"https://sso-sso73.apps.ocp.bliex.io/auth/realms/apim25","aud":"account","sub":"9490d06f-3c0e-4a42-839b-92a1729f8ba0","typ":"Bearer","azp":"04a945f5","auth_time":0,"session_state":"2aac8194-407b-4759-8873-1acaf10c1339","preferred_username":"service-account-04a945f5","email_verified":false,"acr":"1","realm_access":{"roles":["offline_access","uma_authorization"]},"resource_access":{"account":{"roles":["manage-account","manage-account-links","view-profile"]}},"scope":"profile email","clientHost":"192.168.100.100","clientId":"04a945f5","clientAddress":"192.168.100.100","client_id":"04a945f5","username":"service-account-04a945f5","active":true}')
    response.send('greetings')
})

