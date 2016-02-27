App.boot = () => {

  Object.keys( App.services ).forEach( (serviceName) => {
    let serviceClass = App.services[serviceName]    
    App.service[serviceName] = new serviceClass()

  })


}
