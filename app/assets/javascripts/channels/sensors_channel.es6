App.subscribeToSensors = () => {

  App.sensorsChannel =  App.cable.subscriptions.create("SensorsChannel", {

    connected: () => {
      console.log('connected to sockeeeeeet');
    },

    disconnected: () => {
      console.log('disconnected from sockeeeeeet');
    },

    rejected: () => {
      console.log('rejecteeeeed');
    },

    received: (data) => {
      App.commands.execute('sensor:measure:received', data)
    },

    fakeMove: function(left, right, xDegrees) {
      this.perform("fake_move", {left: left, right: right, xDegrees: xDegrees} )      
    }


  })
}
