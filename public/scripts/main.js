/*
 *
 * BEGIN IDLE OBJECT
 *
 */
let idleThree = {
  //Object Geometries 
  //Spheres
  geometrySphereOne: new THREE.SphereGeometry(50, 25, 25),
  setGeometrySphere() {
    this.geometrySphereOne.position.set(500, 50, 50);
  },

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

  //Set Object Speed
  setMeshOneSpeedX : 0,
  setMeshOneSpeedY : 0,

  //Set Object Position (useful for resets)
  setMeshOnePositionX : -25,

  //Cameras
  camera: new THREE.PerspectiveCamera(
    5,
    window.innerWidth / window.innerHeight,
    2,
    5000
  )
}

/*
 *
 * End IDLE OBJECT
 *
 */

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
  mesh.position.x += idleThree.setMeshOneSpeedX;
  mesh.position.y += idleThree.setMeshOneSpeedY;
  mesh.rotation.z += Math.PI / 32;
  renderer.render(scene, idleThree.camera);
  requestAnimationFrame(render);
}

//We need this to get the coordinates so we can update functions based on x/y pos
scene.updateMatrixWorld(true);
const positionVectorGLOBAL = new THREE.Vector3();
positionVectorGLOBAL.setFromMatrixPosition( mesh.matrixWorld );

//Grabs the material and tries to change a value
let moveIdleThreeRight = () => {
  idleThree.setMeshOneSpeedX += 1;
}

//Checks the x pos of idleThree, and if it is higher than the threshold, rest position to NEGATIVE
//NEGATIVE - Item won't appear so abruptly if it starts slowly from left side
let checkIdleThreePositionX = () => {

  //Need a fun way to check your x/y position of a mesh? see code below and use
  //scene.updateMatrixWorld(true);
  const positionVectorGLOBAL = new THREE.Vector3();
  positionVectorGLOBAL.setFromMatrixPosition( mesh.matrixWorld );

  
  if(positionVectorGLOBAL.x > 250){
    console.log(positionVectorGLOBAL.x);
    mesh.position.x = -250;
  }
  
}

/*
*
* All SetInterval Functions Go Here
*
* This will keep the functions separate so I can order and find them a bit easier
*
*/

setInterval(checkIdleThreePositionX, 100);