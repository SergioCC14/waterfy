App.views.ApplicationLayout = Backbone.Marionette.LayoutView.extend({

  template: HandlebarsTemplates['application_layout'],

  regions: {
    shipRegion: '.ship-region'
  },

  onShow: () => {

  }

})
