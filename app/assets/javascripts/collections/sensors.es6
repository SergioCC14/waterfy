App.collections.Sensors = Backbone.Collection.extend({
  model: App.models.Sensor,
  url: '/sensors'
})
