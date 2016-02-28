let App = new Backbone.Marionette.Application({
  services: {},
  service: {},
  models: {},
  collections: {},
  views: {},
  cable: ActionCable.createConsumer(),

  regions: {
    applicationRegion: '#application-region',
    overlayRegion:     '#overlay-region'
  }

})
