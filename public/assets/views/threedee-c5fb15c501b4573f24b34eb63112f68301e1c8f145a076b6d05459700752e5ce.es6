App.views.ThreeDee = Backbone.Marionette.ItemView.extend({

  template: HandlebarsTemplates['threedee'],

  onShow: () => {
    threeApp()
  }

})
