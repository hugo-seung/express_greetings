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
    response.send('Greetings!!!')
})

