/*
 *
 * BEGIN IDLE OBJECT
 *
 */
let idleThree = {
  //Object Geometries 
  //Spheres
  geometrySphereOne: new THREE.SphereGeometry(10, 25, 25),

  //Object Materials
  material: new THREE.MeshPhongMaterial({
    color: 0xff0000,
    specular: 0x00ff00,
    shininess: 1
  }),

  materialTwo: new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    specular: 0x0000ff,
    shininess: 1
  }),

  //Object Light(s)
  dirLightColorOne: '0x00ff00',
  dirLight: new THREE.DirectionalLight(this.dirLightColorOne),
  setLightOneCoords: [135, -15, -15],
  setLight() {
    this.dirLight.position.set(setLightOneCoords[0], setLightOneCoords[1], setLightOneCoords[2]);
  },

  //Cameras
  camera: new THREE.PerspectiveCamera(
    5,
    window.innerWidth / window.innerHeight,
    2,
    5000
  )
}

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("main"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

//Scene
const scene = new THREE.Scene();

//Lights
scene.add(idleThree.dirLight);

//Mesh
const mesh = new THREE.Mesh(idleThree.geometrySphereOne, idleThree.material);
mesh.position.set(0, 0, -2000);
renderer.render(scene, idleThree.camera);
scene.add(mesh);
requestAnimationFrame(render);

function render() {
  mesh.rotation.x += Math.sin(-0.05);
  mesh.rotation.y += 0.15;
  mesh.rotation.z += Math.PI / 32;
  renderer.render(scene, idleThree.camera);
  requestAnimationFrame(render);
}

/*
 *
 * END IDLE OBJECT
 *
 */

//Grabs the material and tries to change a value
let changeMaterial = () => {
  material.color = new THREE.Color(0xff0000)
}