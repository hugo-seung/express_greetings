// https://github.com/bitinn/node-fetch
// const fetch = require('node-fetch')

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

app.use('/path', (request, response, next) => {
    console.log('hostname:', request.hostname)
    console.log('originalUrl:', request.originalUrl)
    console.log('baseUrl:', request.baseUrl)
    console.log('path:', request.path)
    console.log('params:', request.params)
    console.log('query:', request.query)
    console.log('body:', request.body)
    console.log('xhr:', request.xhr)
    console.log('ip:', request.ip)
    console.log('ips:', request.ips)
    next()
})

function get_data(request) {
  return {
    args: request.query,
    headers : request.headers,
    method: request.method,
    body: request.body,
    origin: request.ips.length > 0 ? request.ips : request.ip,
    url: {
        protocol: request.protocol,
        hostname: request.hostname,
        path: request.path,
    }
  }
}

app.post('/*', (request, response, next) => {
  // console.log('request.path:', request.path)
  const data = get_data(request)
  response.type('json')
  response.send(JSON.stringify(data, null, 4) + '\n')
})

app.get('/*', (request, response, next) => {
  // console.log('request.path:', request.path)
  const data = get_data(request)
  response.type('json')
  response.send(JSON.stringify(data, null, 4) + '\n')
})




