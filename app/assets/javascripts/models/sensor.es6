App.models.Sensor = Backbone.Model.extend({

  initialize: function(){
    this.measures = new App.collections.Measures()
  },

  lastMeassureDiff: function(){
    let size = this.measures.length
    let offset = 0.0
    if (size > 2){
      offset = this.measures.models[size-2].value() - this.measures.models[size-1].value()
    }
    return offset
  },

  addMeassure: function(meassureAttr){
    this.measures.add(meassureAttr)
  }


})
