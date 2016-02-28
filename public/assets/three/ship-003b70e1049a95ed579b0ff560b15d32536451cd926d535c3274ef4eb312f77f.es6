function Ship(ship, update) {
	// ship
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
}
