app.boot = () => {
  for (serviceEntry of app.services){
    let serviceName = serviceEntry[0]
    let serviceClass = serviceEntry[1]

    app.service[serviceName] = new serviceClass()
  }  
}
