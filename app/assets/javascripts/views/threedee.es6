App.views.ThreeDee = Backbone.Marionette.LayoutView.extend({

  initialize: function(){
    let objectLoader = new THREE.ObjectLoader()
    this.scene = objectLoader.parse(App.threeData.scene)
    this.ship = this.scene.getObjectByName('Boat')
  },

  template: HandlebarsTemplates['threedee'],

  regions: {
    'sideRegion': '#side-view',
    'frontRegion': '#front-view',
    'upRegion': '#up-view'
  },

  onShow: function(){
    let camera1 = new App.models.Camera({position: {'y': 2.5, 'z': 10}})
    let camera2 = new App.models.Camera({position: {'x': 15, 'y': 1.5, 'z': 0.5}, rotation: {'y': 89.5}}  )
    let camera3 = new App.models.Camera({position: {'y': 15}, rotation: {'x': -1.6}})

    this.sideRegion.show( new App.views.ThreeVisualization({model: camera1, ship: this.ship, scene: this.scene}) )
    this.frontRegion.show( new App.views.ThreeVisualization({model: camera2, ship: this.ship, scene: this.scene}) )
    this.upRegion.show( new App.views.ThreeVisualization({model: camera3, ship: this.ship, scene: this.scene}) )
  }

})
