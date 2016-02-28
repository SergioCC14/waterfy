App.services.RealTime = class RealtimeService extends App.services.Base {
  constructor(){
    super()
    console.log('real time service up');

    App.commands.setHandler('sensor:data:received', () => {
      App.subscribeToSensors()
    })

    App.commands.setHandler('sensor:measure:received', (data) => {
      data.forEach( (sensorData) => {
        let sensor = App.sensors.get(sensorData.id)
        debugger
        delete sensorData['id']
        sensor.addMeassure(sensorData)
      })

      App.threeDeeView.moveZ( App.sensors.horizontalOffset() )

    })

  }
}
