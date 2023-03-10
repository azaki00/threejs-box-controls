let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
  70,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let cameraZangle = 10;
let cameraYangle = 4;
camera.position.z = cameraZangle;
camera.position.y = cameraYangle;
// camera.position.x = 3;
camera.lookAt(0, 0, 0);
// let cameraHelper = new THREE.CameraHelper(camera);
// scene.add(cameraHelper);

let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * Adding a crate
 */
let geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshPhongMaterial({
  color: 0xfafafa
});

// function cubeGenerator
const addNewBoxMesh = (x,y,z) => {
    const boxMesh = new THREE.Mesh(geometry, material);
    boxMesh.position.set(x,y,z);
    scene.add(boxMesh);
}

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

addNewBoxMesh(0,2,0);
addNewBoxMesh(2,2,0);
addNewBoxMesh(-2,2,0);
addNewBoxMesh(0,2,-2);
addNewBoxMesh(2,2,-2);
addNewBoxMesh(-2,2,-2);
addNewBoxMesh(0,2,2);
addNewBoxMesh(2,2,2);
addNewBoxMesh(-2,2,2);

addNewBoxMesh(0,0,0);
addNewBoxMesh(2,0,0);
addNewBoxMesh(-2,0,0);
addNewBoxMesh(0,0,-2);
addNewBoxMesh(2,0,-2);
addNewBoxMesh(-2,0,-2);
addNewBoxMesh(0,0,2);
addNewBoxMesh(2,0,2);
addNewBoxMesh(-2,0,2);

addNewBoxMesh(0,-2,0);
addNewBoxMesh(2,-2,0);
addNewBoxMesh(-2,-2,0);
addNewBoxMesh(0,-2,-2);
addNewBoxMesh(2,-2,-2);
addNewBoxMesh(-2,-2,-2);
addNewBoxMesh(0,-2,2);
addNewBoxMesh(2,-2,2);
addNewBoxMesh(-2,-2,2);

const pointer = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

const onMouseMove = (event) => {
    //calculate pointer position in normalized device coordinates
    // (-1 to +1) for both components
    pointer.x = (event.clientX / window.innerWidth) *2-1;
    pointer.y = -(event.clientY / window.innerHeight) *2+1;

    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    for(let i=0; i < intersects.length; i++){
        console.log(intersects);
    }
}
window.addEventListener('mousemove', onMouseMove);

let light = new THREE.PointLight(0xffffff, 1, 70);
scene.add(light);
light.position.set(5, 5, 3);
let alight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(alight);


// let grid = new THREE.GridHelper(50, 50);
// scene.add(grid);
// grid.position.y = -1;



function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onResize, false);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
