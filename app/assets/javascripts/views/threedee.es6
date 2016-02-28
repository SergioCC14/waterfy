App.views.ThreeDee = Backbone.Marionette.LayoutView.extend({

  initialize: function(){
    let objectLoader = new THREE.ObjectLoader()
    this.scene = objectLoader.parse(App.threeData.scene)
    this.ship = this.scene.getObjectByName('Boat')

    let vis1 = new App.views.ThreeVisualization({
      model: new App.models.Camera({position: {'y': 2.5, 'z': 10} }),
      ship: this.ship,
      scene: this.scene
    })

    let vis2 = new App.views.ThreeVisualization({
      model: new App.models.Camera({position: {'x': 15, 'y': 1.5, 'z': 0.5}, rotation: {'y': 89.5}}  ),
      ship: this.ship,
      scene: this.scene
    })

    let vis3 = new App.views.ThreeVisualization({
      model: new App.models.Camera({position: {'y': 15}, rotation: {'x': -1.6}}),
      ship: this.ship,
      scene: this.scene
    })

    this.visualizations = [vis1, vis2, vis3]

  },

  template: HandlebarsTemplates['threedee'],

  regions: {
    'sideRegion': '#side-view',
    'frontRegion': '#front-view',
    'upRegion': '#up-view'
  },

  onShow: function(){
    this.sideRegion.show( this.visualizations[0] )
    this.frontRegion.show( this.visualizations[1] )
    this.upRegion.show( this.visualizations[2] )
    let self = this
    document.onkeydown = function(e) {
      e = e || window.event;
			if (e.keyCode == '37') { self.moveZ( 0.05) }
			if (e.keyCode == '39') { self.moveZ(-0.05) }
		}



  },

  updateVisualizations: function() {
    this.visualizations.forEach( (vis) => {
      vis.updateScene()
    })
  },

  rotateX: function(degrees){
    this.ship.rotation.x += degrees
    this.updateVisualizations()
  },

  rotateY: function(degrees){
    this.ship.rotation.y += degrees
    this.updateVisualizations()
  },

  rotateZ: function(degrees){
    this.ship.rotation.z += degrees
    this.updateVisualizations()
  },

  moveX: function(pixels){
    this.ship.position.x += pixels
    this.updateVisualizations()
  },

  moveY: function(pixels){
    this.ship.position.y += pixels
    this.updateVisualizations()
  },

  moveZ: function(pixels){
    this.ship.position.z += pixels
    this.updateVisualizations()
  }

})
