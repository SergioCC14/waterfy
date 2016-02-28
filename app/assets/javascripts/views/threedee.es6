App.views.ThreeDee = Backbone.Marionette.LayoutView.extend({

  initialize: function(){
    let objectLoader = new THREE.ObjectLoader()
    this.scene = objectLoader.parse(App.threeData.scene)
    this.ship = this.scene.getObjectByName('Boat')

    let camerasAttributes = [
      {position: {'y': 2.5, 'z': 10} },
      {position: {'x': 15, 'y': 1.5, 'z': 0.5}, rotation: {'y': 89.5}},
      {position: {'y': 15}, rotation: {'x': -1.6}}
    ]

    this.visualizations = []
    let visualizations = this.visualizations
    camerasAttributes.forEach( (cameraAttributes) => {
      let vis = new App.views.ThreeVisualization({ model: new App.models.Camera(cameraAttributes), ship: this.ship, scene: this.scene })
      visualizations.push(vis)
    } )

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
    let sensorLeft = 0.0, sensorRight = 0.0
    document.onkeydown = function(e) {
      e = e || window.event;

			if (e.keyCode == '37') {
        sensorLeft += 0.05
        sensorRight -= 0.05
        App.commands.execute('sensor:measure:received',
          [ {
             id: '56d300b46e9083a5358e4d50',
             type: 'horizontal',
             direction: 'left',
             udoo_id: 4,
             meassure: (sensorLeft).toString()
           },
           {
             id: "56d300b46e9083a5358e4d51",
             type: 'horizontal',
             direction: 'right',
             udoo_id: 4,
             meassure: (sensorRight).toString()
           }
         ]
        )
      }
			if (e.keyCode == '39') {
        sensorLeft -= 0.05
        sensorRight += 0.05
        App.commands.execute('sensor:measure:received',
          [ {
             id: "56d300b46e9083a5358e4d50",
             type: 'horizontal',
             direction: 'left',
             udoo_id: 4,
             meassure: (sensorLeft).toString()
           },
           {
             id: "56d300b46e9083a5358e4d51",
             type: 'horizontal',
             direction: 'right',
             udoo_id: 4,
             meassure: (sensorRight).toString()
           }
         ]
        )
      }
		}

  },

  updateVisualizations: function() {
    this.visualizations.forEach( (vis) => {
      vis.updateScene()
    })
  },

  rotateX: function(degrees){
    console.log('ship rotation ' + this.ship.rotation.x);
    console.log('rotating ' + degrees);
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
