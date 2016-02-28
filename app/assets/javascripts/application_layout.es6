App.views.ApplicationLayout = Backbone.Marionette.LayoutView.extend({

  template: HandlebarsTemplates['application_layout'],

  regions: {
    threedeeRegion: '.threedee-region'
  },

  onShow: function() {
    this.threedeeRegion.show(  new App.views.ThreeDee() )
  }

})
