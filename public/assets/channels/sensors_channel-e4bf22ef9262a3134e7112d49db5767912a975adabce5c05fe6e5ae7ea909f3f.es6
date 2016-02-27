App.subscribeToSensors = () => {

  App.cable.subscriptions.create("SensorsChannel", {

    connected: () => {

    },

    disconnected: () => {

    },

    rejected: () => {

    },

    received: (data) => {
      App.commands.execute('sensor:measure:received', data)
    }

  })
}
