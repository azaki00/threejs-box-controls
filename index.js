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

let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setSize(window.innerWidth, window.innerHeight);

/**
 * Adding a crate
 */
let geometry = new THREE.BoxGeometry(2, 2, 2);
let texture = new THREE.TextureLoader().load(
  "https://www.filterforge.com/filters/9452-v1.jpg"
);
let material = new THREE.MeshStandardMaterial({
  // color: 0xfff,
  map: texture,
});
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
cube.position.y = 1;

let light = new THREE.AmbientLight(0xffffff);
scene.add(light);
light.position.set(0, 0, 0);

// let controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.update();

let grid = new THREE.GridHelper(50, 50);
scene.add(grid);
// grid.position.y = -1;

const tl = gsap.timeline();


/**
 * Keyboard Controls for moving the box
 */

document.addEventListener(
  "keydown",
  (event) => {
    let key = event.key;
    let code = event.code;
    console.log("KeyDownListener: You pressed " + key + " of code " + code);
    switch (code) {
      case "KeyW": {
        moveForward(cube, camera);
        break;
      }
      case "KeyS": {
        moveBackward(cube, camera);
        break;
      }
      case "KeyA": {
        moveLeft(cube, camera);
        break;
      }
      case "KeyD": {
        moveRight(cube, camera);
        break;
      }
      case "KeyQ": {
        rotateLeft(cube, camera);
        break;
      }
      case "KeyE": {
        rotateRight(cube, camera);
        break;
      }
      case "Backquote": {
        cameraReset(cube, camera, cameraYangle, cameraZangle);
        break;
      }
      case "Space": {
        jump(cube.camera);
        break;
      }
      default:
        console.log("No action has been made...");
    }
  },
  false
);

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onResize, false);

function animate() {
  requestAnimationFrame(animate);
  // controls.update();
  renderer.render(scene, camera);
}
animate();
