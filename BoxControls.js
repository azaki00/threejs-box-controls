console.log("**********\nWelcome to the movable box project\n**********\nv1.0.0");
console.log("\nBy default, the grid is set to 50x50...\n");
console.warn("Grid still without boundaries!");
console.log("choose your optimal settings [0.1 - 5]");
let speed = 0.1;
let disposition = 1;

console.log("Settings validated!\n Walking speed: "+speed+"\nWalking distance: "+disposition);
console.log("Enjoy the box simulator!");

let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);


function displayCoordinates(object){
    console.log("coordinates : (x: "+object.position.x+", y: "+object.position.y+", z: "+object.position.z+")");
}

function moveForward(object, camera){
    tl.to(object.position, {
        x: object.position.x,
        y: object.position.y, 
        z: (object.position.z) + -1*disposition,
        duration:1*speed,
        ease: 'power3.inOut'
    })
    tl.to(camera.position, {
        z : camera.position.z -= 1,
        duration:1*speed,
        ease: 'power3.inOut',
        onUpdate: function(){
            
        },
        onComplete: function(){
            displayCoordinates(object);
        }
    })
    console.log("MOVING FORWARD");
}
function moveBackward(object, camera){
    tl.to(object.position, {
        x: object.position.x,
        y: object.position.y, 
        z: (object.position.z) + 1*disposition,
        duration:1*speed,
    })
    tl.to(camera.position, {
        z: camera.position.z += 1,
        duration:1*speed,
        onUpdate: function(){
            
        },
        onComplete: function(){
            displayCoordinates(object);
        }
    })
    console.log("MOVING BACKWARD");
}
function moveLeft(object, camera){
    tl.to(object.position, {
        x: object.position.x + -1*disposition,
        y: object.position.y, 
        z: object.position.z,
        duration:1*speed,
    })
    tl.to(camera.position, {
        x: camera.position.x -= 1,
        duration:1*speed,
        onUpdate: function(){
            
        },
        onComplete: function(){
            displayCoordinates(object);
        }
    })
    console.log("MOVING LEFT");
}
function moveRight(object, camera){
    tl.to(object.position, {
        x: object.position.x + 1*disposition,
        y: object.position.y, 
        z: object.position.z,
        duration:1*speed,
    })
    tl.to(camera.position, {
        x: camera.position.x += 1,
        duration:1*speed,
        onUpdate: function(){
            
        },
        onComplete: function(){
            displayCoordinates(object);
        }
    })
    console.log("MOVING RIGHT");
}

function rotateLeft(object, camera){
    tl.to(object.rotation, {
        y: object.rotation.y + Math.PI*0.5*disposition, 
        duration:1*speed,
    })
    tl.to(camera.position, {
        duration:1*speed,
        onUpdate: function(){
            
        },
        onComplete: function(){
            displayCoordinates(object);
        }
    })
    console.log("ROTATING ANTI-CLOCKWISE");
}

function rotateRight(object, camera){
    tl.to(object.rotation, {
        y: object.rotation.y - Math.PI*0.5*disposition, 
        duration:1*speed,
    })
    tl.to(camera.position, {
        duration:1*speed,
        onUpdate: function(){
            
        },
        onComplete: function(){
            displayCoordinates(object);
        }
    })
    console.log("ROTATING CLOCKWISE");
}

function jump(object){
    tl.to(object.position,{
        y: object.position.y + 1*disposition,
        duration: 2*speed,
        ease: "Power4.easeOut"
    })
    .to(object.position,{
        y: 1,
        duration: 2*speed,
        ease: "bounce"
    })
    console.log("JUMPING! --YAY--");
}

function cameraReset(object ,camera, Yangle, Zangle){
    camera.position.x = object.position.x;
    camera.position.y = object.position.y + Yangle;
    camera.position.z = object.position.z + Zangle;
    camera.lookAt(object.position.x, object.position.y, object.position.z);
    console.log("Camera Reset Successful!");
}