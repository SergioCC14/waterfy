App.threeData = {
	"metadata": {
		"type": "App"
	},
	"project": {
		"shadows": true,
		"editable": false,
		"vr": false
	},
	"scene": {
		"metadata": {
			"version": 4.4,
			"type": "Object",
			"generator": "Object3D.toJSON"
		},
		"geometries": [{
			"uuid": "76D5161E-6042-4A71-8971-9A0899B50557",
			"type": "BoxGeometry",
			"width": 1,
			"height": 1,
			"depth": 1
		}, {
			"uuid": "61A95735-4FA8-42E4-A481-CB9B77F1A498",
			"type": "BoxGeometry",
			"width": 1,
			"height": 1,
			"depth": 1
		}, {
			"uuid": "1F99B020-2E3D-4A03-8AD6-901242A585AA",
			"type": "BoxGeometry",
			"width": 1,
			"height": 1,
			"depth": 1
		}, {
			"uuid": "71D9709B-DC73-45B6-A93F-5856287DFF8F",
			"type": "BoxGeometry",
			"width": 1,
			"height": 1,
			"depth": 1
		}, {
			"uuid": "146C2C18-805A-4201-8261-4346D460E0F9",
			"type": "BoxGeometry",
			"width": 1,
			"height": 1,
			"depth": 1
		}, {
			"uuid": "10FF6A43-6068-4185-886F-550C6177E4E7",
			"type": "BoxGeometry",
			"width": 1,
			"height": 1,
			"depth": 1
		}],
		"materials": [{
			"uuid": "7F7597B4-8AD0-4C12-92CA-E446E7E2656D",
			"type": "MeshStandardMaterial",
			"color": 12632256,
			"emissive": 0,
			"opacity": 0.5,
			"transparent": true
		}, {
			"uuid": "B66840E5-81B3-4F51-9456-87F256F5196D",
			"type": "MeshStandardMaterial",
			"name": "Puerto",
			"color": 12632256,
			"emissive": 0,
			"opacity": 0.5,
			"transparent": true
		}, {
			"uuid": "040CB4D0-D5B3-476D-8405-5B6E222C4535",
			"type": "MeshStandardMaterial",
			"color": 36608,
			"emissive": 0,
			"opacity": 0.7,
			"transparent": true
		}, {
			"uuid": "D1DB5D8D-6D23-45AD-B4DC-F905624F67A4",
			"type": "MeshStandardMaterial",
			"color": 9720320,
			"emissive": 0
		}, {
			"uuid": "A8E41423-64F8-476B-86CA-04224C54F972",
			"type": "MeshStandardMaterial",
			"color": 38655,
			"roughness": 0,
			"emissive": 0,
			"opacity": 0.3,
			"transparent": true
		}, {
			"uuid": "59F2A947-FB56-488F-A3D1-DDF394F2FE11",
			"type": "MeshStandardMaterial",
			"color": 16721408,
			"metalness": 1,
			"emissive": 16744057
		}],
		"object": {
			"uuid": "F179EF89-67F1-4D72-9B9E-3114D3D3B385",
			"type": "Scene",
			"name": "Scene",
			"matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
			"children": [{
				"uuid": "559BFB70-5723-4F85-81E1-670C187AE236",
				"type": "Mesh",
				"name": "Wall1",
				"matrix": [20, 0, 0, 0, 0, 10, 0, 0, 0, 0, 1, 0, 0, 5, -5, 1],
				"geometry": "76D5161E-6042-4A71-8971-9A0899B50557",
				"material": "7F7597B4-8AD0-4C12-92CA-E446E7E2656D"
			}, {
				"uuid": "C7FA302E-8C5C-4E51-A428-A1814E5FA224",
				"type": "Mesh",
				"name": "Wall2",
				"matrix": [20, 0, 0, 0, 0, 10, 0, 0, 0, 0, 1, 0, 0, 5, 5, 1],
				"geometry": "61A95735-4FA8-42E4-A481-CB9B77F1A498",
				"material": "B66840E5-81B3-4F51-9456-87F256F5196D"
			}, {
				"uuid": "D840056F-9903-44FC-AB73-33B983EF0D67",
				"type": "AmbientLight",
				"name": "AmbientLight 1",
				"matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
				"color": 15725044,
				"intensity": 1
			}, {
				"uuid": "1194250B-C0A4-4AB7-AD29-61F4224F9A76",
				"type": "PointLight",
				"name": "PointLight 3",
				"matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 15, 0, 1],
				"color": 16777215,
				"intensity": 1,
				"distance": 0,
				"decay": 1
			}, {
				"uuid": "7D6BB94F-7560-4822-A8C5-882C0607CE47",
				"type": "Mesh",
				"name": "Box 4",
				"matrix": [-19.799850463867188, 2.8224000930786133, 0, 0, -0.14112000167369843, -0.9899924993515015, 0, 0, 0, 0, 9, 0, 0, 1.6127269268035889, 0, 1],
				"geometry": "1F99B020-2E3D-4A03-8AD6-901242A585AA",
				"material": "040CB4D0-D5B3-476D-8405-5B6E222C4535"
			}, {
				"uuid": "87B17FE2-85A3-49DB-B7DF-338524704677",
				"type": "Mesh",
				"name": "Box 5",
				"matrix": [-2.969977378845215, 0.4233599901199341, 0, 0, -0.028224000707268715, -0.19799849390983582, 0, 0, 0, 0, 2, 0, 3.155640125274658, 1.7126332521438599, 0, 1],
				"geometry": "71D9709B-DC73-45B6-A93F-5856287DFF8F",
				"material": "D1DB5D8D-6D23-45AD-B4DC-F905624F67A4"
			}, {
				"uuid": "0A013D29-DFED-40BB-A7C0-650B04488632",
				"type": "Mesh",
				"name": "Box 6",
				"matrix": [20, 0, 0, 0, 0, 2.5, 0, 0, 0, 0, 9, 0, 0, 0.975935697555542, 0, 1],
				"geometry": "146C2C18-805A-4201-8261-4346D460E0F9",
				"material": "A8E41423-64F8-476B-86CA-04224C54F972"
			}, {
				"uuid": "3C1BD279-5F78-49C1-812F-EDFD4F277C4E",
				"type": "Mesh",
				"name": "Boat",
				"matrix": [2.966313362121582, -0.448314368724823, 0, 0, 0.14943812787532806, 0.9887710809707642, 0, 0, 0, 0, 1.5, 0, 6.860779762268066, 2.379359483718872, 0, 1],
				"geometry": "10FF6A43-6068-4185-886F-550C6177E4E7",
				"material": "59F2A947-FB56-488F-A3D1-DDF394F2FE11"
			}, {
				"uuid": "3E8D766A-000B-447D-AE21-46248706D147",
				"type": "PerspectiveCamera",
				"name": "PerspectiveCamera 2",
				"matrix": [-0.4480736255645752, 0, 0.8939966559410095, 0, 0, 1, 0, 0, -0.8939966559410095, 0, -0.4480736255645752, 0, -21.471424102783203, 4.7024712562561035, 0, 1],
				"focalLength": 10,
				"zoom": 1,
				"fov": 50,
				"aspect": 1,
				"near": 1,
				"far": 10000
			}, {
				"uuid": "B10F4D67-0943-4C20-87DF-989DBB937F25",
				"type": "PerspectiveCamera",
				"name": "PerspectiveCamera 3",
				"matrix": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1.7208096981048584, 2.6452319622039795, 12.45201587677002, 1],
				"focalLength": 10,
				"zoom": 1,
				"fov": 50,
				"aspect": 1,
				"near": 1,
				"far": 10000
			}, {
				"uuid": "15B9EF65-1EFB-4515-B273-5B80B51B7453",
				"type": "PerspectiveCamera",
				"name": "PerspectiveCamera 4",
				"matrix": [1, 0, 0, 0, 0, -0.4480736255645752, -0.8939966559410095, 0, 0, 0.8939966559410095, -0.4480736255645752, 0, 0, 16.05919075012207, -5.6499738693237305, 1],
				"focalLength": 10,
				"zoom": 1,
				"fov": 50,
				"aspect": 1,
				"near": 1,
				"far": 10000
			}]
		}
	},
	"scripts": {
		"3C1BD279-5F78-49C1-812F-EDFD4F277C4E": [{
			"name": "",
			"source": "function update( event ) {}"
		}],
		"0A013D29-DFED-40BB-A7C0-650B04488632": [{
			"name": "",
			"source": "function update( event ) {\n\tthis.position.y += 0.005;\n\tthis.scale.y += 0.01;\n}"
		}]
	}
}
