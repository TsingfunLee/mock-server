export default (options) => {
  const {api} = options
  return {
    name: 'mock-server',
    configureServer(server){ 
      server.middlewares.use((req, res, next) => {
        for(const key in api){
          if(req.url.includes(key)){
            const {res : response, statusCode, ...headers} = api[key]
            res.writeHead(statusCode, headers)
            res.end(JSON.stringify(response))      
          }else{
            next()
          }
        }
      })     
    }
  }
}