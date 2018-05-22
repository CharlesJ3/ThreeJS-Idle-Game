/*
 *
 * BEGIN IDLE OBJECT
 *
 */
let idleThree = {

  //Object Geometries 
  //Spheres
  geometrySphereOne: new THREE.SphereGeometry(12, 32, 32),
  geometrySphereOrbitOne: new THREE.SphereGeometry(3, 45, 45),

  //Object Materials
  material: new THREE.MeshPhongMaterial({
    color: 0xff0000,
    specular: 0x00ff00,
    shininess: 2
  }),

  materialTwo: new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    specular: 0x0000ff,
    shininess: 2
  }),

  //External Object Count
  additionalObjectCount: 10,

  //Object Light(s)
  dirLightColorOne: '0x0000ff',
  dirLight: new THREE.PointLight(0xffffff),
  setLightOneCoords: [125, 250, 1],

  dirLightColorTwo: '0x4286f4',
  dirLightTwo: new THREE.PointLight(0xffffff),
  setLightTwoCoords: [-25, 25, 2],

  dirLightColorThree: '0xd84202',
  dirLightThree: new THREE.PointLight(0xffffff),
  setLightThreeCoords: [25, -250, -5],

  dirLightColorFour: '0x17ff02',
  dirLightFour: new THREE.PointLight(0xffffff),
  setLightFourCoords: [-25, -25, -5],

  //Set all lights here; run this when needing to update the lightning
  setLight() {
    this.dirLight.position.set(this.setLightOneCoords[0], this.setLightOneCoords[1], this.setLightOneCoords[2]),
    this.dirLightTwo.position.set(this.setLightTwoCoords[0], this.setLightTwoCoords[1], this.setLightTwoCoords[2]);
    this.dirLightThree.position.set(this.setLightThreeCoords[0], this.setLightThreeCoords[1], this.setLightThreeCoords[2]);
    this.dirLightFour.position.set(this.setLightFourCoords[0], this.setLightFourCoords[1], this.setLightFourCoords[2]);
  },

  //Set Object Speed
  setMeshOneSpeedX: 0,
  setMeshOneSpeedY: 0,

  //Set Object Position (useful for resets)
  setMeshOnePositionX: 0,

  //Cameras
  camera: new THREE.PerspectiveCamera(
    65,
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
scene.add(idleThree.dirLightTwo);
scene.add(idleThree.dirLightThree);
idleThree.setLight();

//Meshes : TODO: CONVERT THESE TO IDLE OBJECT INSTEAD OF GLOBAL!!!!!
const mesh = new THREE.Mesh(idleThree.geometrySphereOne, idleThree.material);
const meshTwo = new THREE.Mesh(idleThree.geometrySphereOrbitOne, idleThree.materialTwo);


//Quick note on meshes; for this project, set them a bit to the negative 
mesh.position.set(0, 0, -50);
// meshTwo.position.set(0, 0, -20);
renderer.render(scene, idleThree.camera);
scene.add(mesh);
requestAnimationFrame(render);

function render() {
  // mesh.rotation.x += Math.sin(-0.05);
  // mesh.rotation.z += Math.PI / 32;
  mesh.rotation.z += 0.0015;
  mesh.position.x += idleThree.setMeshOneSpeedX;
  mesh.position.y += idleThree.setMeshOneSpeedY;
  renderer.render(scene, idleThree.camera);
  requestAnimationFrame(render);
}

//We need this to get the coordinates so we can update functions based on x/y pos
scene.updateMatrixWorld(true);
const positionVectorGLOBAL = new THREE.Vector3();
positionVectorGLOBAL.setFromMatrixPosition( mesh.matrixWorld );

//Increase to the right on x plane
let moveIdleThreeRight = () => {
  idleThree.setMeshOneSpeedX += .1;
}

//Decrease to the left on x plane
let moveIdleThreeLeft = () => {

  let orbitRadius = 22;
  let date = Date.now() * 0.0015;3
  mesh.position.set(
    (Math.cos(date) * orbitRadius), 
    Math.sin(date),
    (Math.sin(date) - 50)
  );

  // console.log(mesh.position.x);
  // console.log(mesh.position.y);
  // idleThree.setMeshOneSpeedX -= .1;
}

//Checks the x pos of idleThree, and if it is higher than the threshold, rest position to NEGATIVE
//NEGATIVE - Item won't appear so abruptly if it starts slowly from left side
let checkIdleThreePositionX = () => {

  //Need a fun way to check your x/y position of a mesh? see code below and use
  //scene.updateMatrixWorld(true);
  const positionVectorGLOBAL = new THREE.Vector3();
  positionVectorGLOBAL.setFromMatrixPosition( mesh.matrixWorld );

  //Set the X positions (+ and -) 
  if(positionVectorGLOBAL.x > 25){
    mesh.position.x = -25;
  }  
}

//Same as checkIdleThreePositionX, but for the reverse role
let checkIdleThreePositionXNegative = () => {

  //Need a fun way to check your x/y position of a mesh? see code below and use
  //scene.updateMatrixWorld(true);
  const positionVectorGLOBAL = new THREE.Vector3();
  positionVectorGLOBAL.setFromMatrixPosition( mesh.matrixWorld );

  //Set the X positions (+ and -) 
  if(positionVectorGLOBAL.x < -25){
    console.log(positionVectorGLOBAL.x);
    mesh.position.x = 25;
  }  
}

//Change Light One X Position (Positive/Right)
let changeLightOneDirectionXPos = () => {
  idleThree.setLightOneCoords[1] += 250;
  idleThree.setLight();
  console.log(idleThree.setLightOneCoords[1]);
}

//Change Light One X Position (Negative/Left)
let changeLightOneDirectionXNeg = () => {
  idleThree.setLightOneCoords[1] -= 250;
  idleThree.setLight();
  console.log(idleThree.setLightOneCoords[1]);
}

//Change Light One Y Position (Positive/Up)
let changeLightOneDirectionYPos = () => {
  idleThree.setLightOneCoords[1] += 250;
  idleThree.setLight();
  console.log(idleThree.setLightOneCoords[1]);
}

//Change Light One Y Position (Positive/Down)
let changeLightOneDirectionYNeg = () => {
  idleThree.setLightOneCoords[1] -= 250;
  idleThree.setLight();
  console.log(idleThree.setLightOneCoords[1]);
}

//Increase Shininess on Material One
let changeMaterialOneShininess = () => {
  idleThree.material.shininess += 1;
}

/*
*
* Idle Object Resets
*
*/
let resetIdleThree = () => {
  idleThree.material.shininess = 1;

  idleThree.setLightOneCoords = [1000, 500, 500];
  idleThree.setLight();

  mesh.position.x = 0;
  mesh.position.y = 0;

  idleThree.setMeshOneSpeedX = 0;
  idleThree.setMeshOneSpeedY = 0;
  render();
}

/*
*
* All SetInterval Functions Go Here
*
*/

// setInterval(checkIdleThreePositionX, 250);
// setInterval(checkIdleThreePositionXNegative, 250);
setInterval(moveIdleThreeLeft, 10);
console.log(mesh.position.x);


function createSpheres() {
//create empty 3d object — group for future spheres
spheres = new THREE.Object3D();
//randomly create 80 spheres by loop
    for (var i = 0; i < idleThree.additionalObjectCount; i++) {
        var sphere = new THREE.SphereGeometry(.5 , 32, 32, 0, 6.5, 0, 6.5);
        var material = new THREE.MeshPhongMaterial({
            color: Math.random() * 0xff00000 - 0xff00000,
            flatShading: THREE.FlatShading,
        })

    //creating the mesh and add primitive and material
        var particle = new THREE.Mesh(sphere, material);
        let distance = 1;
        //randomly set position and scale
        particle.position.x = Math.random() * distance * 5;
        particle.position.y = Math.random() * -distance * 5;
        particle.position.z = Math.random() * distance * 5;
        particle.rotation.y = Math.random() * 3 * Math.PI;
        particle.rotation.z = Math.random() * 1 * Math.PI;
        //add particle to the spheres group
        spheres.add(particle);
    }

    //correct spheres position relative to the camera
    spheres.position.y = 0;
    spheres.position.x = 0;
    spheres.position.z = -10;
    spheres.rotation.y = Math.PI * 100;
    //add spheres to the scene
    scene.add(spheres);
  }

