App.views.ThreeVisualization = Backbone.Marionette.ItemView.extend({

  template: HandlebarsTemplates['three_visualization'],

  initialize: function(options){

    this.scene = options.scene
    this.ship = options.ship

    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    let coordinates = ['x', 'y', 'z']
    let model = this.model, camera = this.camera;
    coordinates.forEach( (coordinate) => {
      let pos = model.get('position')[coordinate]
      let rot = model.get('rotation')[coordinate]

      if (typeof pos !== 'undefined') {camera.position[coordinate] = pos}
      if (typeof rot !== 'undefined') {camera.rotation[coordinate] = rot}
    } )
    
  },

  onShow: function(){
    this.$el.append(this.renderer.domElement)
    this.updateScene()
  },

  updateScene: function(){
    this.renderer.render(this.scene, this.camera)
  }

})
