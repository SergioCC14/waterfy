App.boot = () => {

  Object.keys( App.services ).forEach( (serviceName) => {
    let serviceClass = App.services[serviceName]
    App.service[serviceName] = new serviceClass()

    App.sensors = new App.collections.Sensors()

    App.sensors.fetch().then( () => { App.commands.execute('sensor:data:received') } )


  })

}
