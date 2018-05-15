//DELETE WHEN FINISHED

//A SERIES OF ARCHIVED FUNCTIONS AND CODE THAT I MIGHT NEED LATER

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("main"),
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

//Camera
const camera = new THREE.PerspectiveCamera(
  5,
  window.innerWidth / window.innerHeight,
  2,
  5000
);

//Scene
const scene = new THREE.Scene();

//Lights
//possibly rotate the lighting later
let dirLight = new THREE.DirectionalLight(0xffffff);
dirLight.position.set(435, -15, -15);
scene.add(dirLight);

let dirLight2 = new THREE.DirectionalLight(0xffffff);
dirLight2.position.set(-435, -5, -15);
scene.add(dirLight2);

//OBJECT
const geometry = new THREE.SphereGeometry(40, 20, 10);
// const geometry2 = new THREE.TorusGeometry(45, 2.5, 5, 50);
// const geometry3 = new THREE.TorusGeometry(50, 2.5, 5, 50);
// const geometry4 = new THREE.TorusGeometry(55, 2.5, 5, 50);
// const geometry5 = new THREE.TorusGeometry(60, 2.5, 5, 50);
// const geometry6 = new THREE.TorusGeometry(65, 2.5, 5, 50);
// const geometry7 = new THREE.TorusGeometry(70, 2.5, 5, 50);
// const geometry8 = new THREE.TorusGeometry(75, 2.5, 5, 50);

let material = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: 0xbb2301,
  shininess: 122
});

const material2 = new THREE.MeshPhongMaterial({
  color: 0x0079ce,
  specular: 0x00fffa,
  shininess: 150
});

const material3 = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  specular: 0x00fffa,
  shininess: 150
});


/*
*
* I need to convert these to arrays or something 
*
*/
const mesh = new THREE.Mesh(geometry, material);
// const mesh2 = new THREE.Mesh(geometry2, material2);
// const mesh3 = new THREE.Mesh(geometry3, material3);
// const mesh4 = new THREE.Mesh(geometry4, material2);
// const mesh5 = new THREE.Mesh(geometry5, material3);
// const mesh6 = new THREE.Mesh(geometry6, material2);
// const mesh7 = new THREE.Mesh(geometry7, material3);
// const mesh8 = new THREE.Mesh(geometry8, material2);

mesh.position.set(0, 0, -2000);
// mesh2.position.set(0, 0, -2000);
// mesh3.position.set(0, 0, -2000);
// mesh4.position.set(0, 0, -2000);
// mesh5.position.set(0, 0, -2000);
// mesh6.position.set(0, 0, -2000);
// mesh7.position.set(0, 0, -2000);
// mesh8.position.set(0, 0, -2000);

renderer.render(scene, camera);

scene.add(mesh);
//, mesh2, mesh3, mesh4, mesh5, mesh6, mesh7, mesh8
//RENDER LOOP
requestAnimationFrame(render);

//GUI Controls
let gui;

function displayGUI() {
  let gui = new dat.GUI();

  parameters = {};
}

function render() {
  mesh.rotation.x += Math.sin(-0.05);
  mesh.rotation.y += 0.15;
  mesh.rotation.z += Math.PI / 32;
  // mesh2.rotation.x += Math.sin(-0.05);
  // mesh2.rotation.y += 0.005;
  // mesh2.rotation.z += Math.PI / 32;
  // mesh3.rotation.x += Math.sin(-0.05);
  // mesh3.rotation.y += 0.01;
  // mesh3.rotation.z += Math.PI / 32;
  // mesh4.rotation.x += Math.sin(-0.05);
  // mesh4.rotation.y += 0.015;
  // mesh4.rotation.z += Math.PI / 32;
  // mesh5.rotation.x += Math.sin(-0.05);
  // mesh5.rotation.y += 0.02;
  // mesh5.rotation.z += Math.PI / 32;
  // mesh6.rotation.x += Math.sin(-0.05);
  // mesh6.rotation.y += 0.025;
  // mesh6.rotation.z += Math.PI / 32;
  // mesh7.rotation.x += Math.sin(-0.05);
  // mesh7.rotation.y += 0.03;
  // mesh7.rotation.z += Math.PI / 32;
  // mesh8.rotation.x += Math.sin(-0.05);
  // mesh8.rotation.y += 0.035;
  // mesh8.rotation.z += Math.PI / 32;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

//Grabs the material and tries to change a value
let changeMaterial = () => {
    material.color = new THREE.Color(0xff0000)
}


//Colors

var light = new THREE.PointLight(color, intensity, distance, decay);