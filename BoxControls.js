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



function moveForward(object, camera){
    tl.to(object.position, {
        x: object.position.x,
        y: object.position.y, 
        z: (object.position.z) + -1*disposition,
        duration:1*speed,
    })
    .to(camera.position, {
        onUpdate: function(){
            camera.lookAt(object.position.x, object.position.y, object.position.z);
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
        // onUpdate: function(){
        //     camera.lookAt(object.position.x, object.position.y, object.position.z);
        // }
    })
    console.log("MOVING BACKWARD");
}
function moveLeft(object, camera){
    tl.to(object.position, {
        x: object.position.x + -1*disposition,
        y: object.position.y, 
        z: object.position.z,
        duration:1*speed,
        // onUpdate: function(){
        //     camera.lookAt(object.position.x, object.position.y, object.position.z);
        // }
    })
    console.log("MOVING LEFT");
}
function moveRight(object, camera){
    tl.to(object.position, {
        x: object.position.x + 1*disposition,
        y: object.position.y, 
        z: object.position.z,
        duration:1*speed,
        // onUpdate: function(){
        //     camera.lookAt(object.position.x, object.position.y, object.position.z);
        // }
    })
    console.log("MOVING RIGHT");
}