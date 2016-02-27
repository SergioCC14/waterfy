/**
 * @author Iagolast <iago.lastra@gmail.com>
 */
var APP = (function() {
	var boat;
	var xhrLoader = new THREE.XHRLoader();
	var objectLoader = new THREE.ObjectLoader();
	return new Promise(function(resolve, reject) {
		xhrLoader.load('app.json', function(response) {
			var json = JSON.parse(response);
			var scene = objectLoader.parse(json.scene);
			var ship = scene.getObjectByName('Boat');


			// First view
			var renderer1 = new THREE.WebGLRenderer();
			var camera1 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
			camera1.position.y = 2.5;
			camera1.position.z = 10;
			renderer1.setSize(window.innerWidth / 2, window.innerHeight / 2);
			document.getElementById('view1').appendChild(renderer1.domElement);
			render(renderer1, scene, camera1);

			// Second view
			var renderer2 = new THREE.WebGLRenderer();
			var camera2 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
			camera2.position.x = 15;
			camera2.position.y = 1.5;
			camera2.position.z = 0.5;
			camera2.rotation.y = 89.5;
			renderer2.setSize(window.innerWidth / 2, window.innerHeight / 2);
			document.getElementById('view2').appendChild(renderer2.domElement);
			render(renderer2, scene, camera2);

			// Third view
			var renderer3 = new THREE.WebGLRenderer();
			var camera3 = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
			camera3.position.y = 15;
			camera3.rotation.x = -1.6;
			renderer3.setSize(window.innerWidth / 2, window.innerHeight / 2);
			document.getElementById('view3').appendChild(renderer3.domElement);
			render(renderer3, scene, camera3);

			function render(renderer, scene, camera) {
				renderer.render(scene, camera);
			}

			function update() {
				render(renderer1, scene, camera1);
				render(renderer2, scene, camera2);
				render(renderer3, scene, camera3);
			}

			// Ship functions
			function _rotateX(rotation) {
				ship.rotation.x = rotation;
				update();
			}

			function _rotateY(rotation) {
				ship.rotation.y = rotation;
				update();
			}

			function _rotateZ(rotation) {
				ship.rotation.z = rotation;
				update();
			}

			function _moveZ(position) {
				ship.position.z = position;
				update();
			}

			resolve({
				_ship: ship,
				rotateX: _rotateX,
				rotateY: _rotateY,
				rotateZ: _rotateZ,
				moveZ: _moveZ,
			})
		});
	});
})();
