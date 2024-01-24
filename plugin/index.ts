export interface Response{
  [headers: string]: string | number | object,
  res: object,
  statusCode?: number
}

export interface Api {
  [url: string]:Response
}

export interface Options {
  api: Api
}

export default (options: Options) => {
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