let App = {
  services: {},
  service: {},
  models: {},
  collections: {},
  views: {}
}

App.cable = ActionCable.createConsumer()

window.App = App
