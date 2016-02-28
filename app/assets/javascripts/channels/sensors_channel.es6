App.subscribeToSensors = () => {

  App.cable.subscriptions.create("SensorsChannel", {

    connected: () => {
      console.log('connected to sockeeeeeet');
    },

    disconnected: () => {
      console.log('disconnected from sockeeeeeet');
    },

    rejected: () => {
      console.log('rejecteeeeed');
    },

    received: (e, data) => {
      App.commands.execute('sensor:measure:received', data)
    }

  })
}
