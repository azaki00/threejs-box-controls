


let scene = new THREE.Scene();
    
let camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 10;
camera.position.y = 4;
// camera.position.x = 3;
camera.lookAt(0,0,0);


let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg")
});
renderer.setSize(window.innerWidth, window.innerHeight);

let geometry = new THREE.BoxGeometry(2,2,2);
let texture = new THREE.TextureLoader().load('https://www.filterforge.com/filters/9452-v1.jpg');
let material = new THREE.MeshStandardMaterial({
    // color: 0xfff,
    map: texture
});
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// cube.position.y = 1;

let light = new THREE.AmbientLight(0xffffff);
scene.add(light);
light.position.set(0,0,0);

let controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.update();

let grid = new THREE.GridHelper(50,50);
scene.add(grid);
grid.position.y = -1


const tl = gsap.timeline();
// window.addEventListener('mousedown', function(){
//     tl.to(camera.position, {
//         z:14,
//         duration:2,
//         onUpdate: function(){
//             camera.lookAt(cubePositions[2].x,cubePositions[2].y,cubePositions[2].z);
//         }
//     })
//     .to(camera.position, {
//         duration:0.2,
//         onUpdate: function(){
//             camera.lookAt(cubePositions[1].x,cubePositions[1].y,cubePositions[1].z);
//         }
//     })
//     .to(camera.position, {
//         x:-6,
//         // y: 6,
//         duration:2,
//         onUpdate: function(){
//             camera.lookAt(cubePositions[1].x,cubePositions[1].y,cubePositions[1].z);
//         }
//     })
//     .to(camera.position, {

//         duration:0.2,
//         onUpdate: function(){
//             camera.lookAt(cubePositions[0].x,cubePositions[0].y, cubePositions[0].z);
//         }
//     })
//     .to(camera.position, {
//         x:7,
//         y:4,
//         z:4,
//         duration:2,
//         onUpdate: function(){
//             camera.lookAt(cubePositions[0].x,cubePositions[0].y, cubePositions[0].z);
//         }
//     })
// })

document.addEventListener('keydown', (event) => {
    let key = event.key;
    let code = event.code;
    console.log("KeyDownListener: You pressed "+key+" of code "+code);
    if(code == "KeyW"){
        // cube.position.z -= 1;
        moveForward(cube, camera);
    }
    if(code == "KeyS"){
        // cube.position.z += 1;
        moveBackward(cube, camera);
    }
    if(code == "KeyA"){
        // cube.position.x -= 1;
        moveLeft(cube, camera);
    }
    if(code == "KeyD"){
        // cube.position.x += 1;
        moveRight(cube, camera);
    }
}, false);





function onResize(){
    camera.aspect =window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize , false);




function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();