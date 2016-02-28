App.models.Measure = Backbone.Model.extend({

  value: function(){
    return parseFloat( this.get('meassure') )
  }

})
