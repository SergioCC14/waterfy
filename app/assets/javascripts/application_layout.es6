App.views.ApplicationLayout = Backbone.Marionette.LayoutView.extend({

  template: HandlebarsTemplates['application_layout'],

  regions: {
    threedeeRegion: '.threedee-region'
  },

  onShow: function() {
    this.threeDeeView = new App.views.ThreeDee()
    this.threedeeRegion.show( this.threeDeeView )
  }

})
