let App = {
  services: {},
  service: {},
  models: {},
  collections: {},
  views: {}
}

App.cable = ActionCable.createConsumer()

App.commands = new Backbone.Wreqr.Commands()
App.vent = new Backbone.Wreqr.EventAggregator()
App.reqres = new Backbone.Wreqr.RequestResponse()

window.App = App
