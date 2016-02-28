App.models.Sensor = Backbone.Model.extend({

  initialize: function(){
    this.measures = new App.collections.Measures()
  }

})
