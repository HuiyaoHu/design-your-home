// cd C:\Users\huiya\Desktop\Y5S1\AR5806_Architectural_Design_Research_Report\0_GITHUB\design-your-home\3D

import * as THREE from '/jsm/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js';

// Loader
const loader = new GLTFLoader();
loader.load( '/models/1.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );

// Scene
const scene = new THREE.Scene();

/* Size */
window.addEventListener('resize', function(){

})


/* Camera */ 
const camera = new THREE.PerspectiveCamera( 10, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(0,0,5);

// Canvas
const canvas = document.querySelector('canvas.webgl')



/* Renderer */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas, 
    alpha: true,         // make canvas transparent (i.e. use the website color as background)
});
renderer.setSize( window.innerWidth, window.innerHeight );

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

/* Control */
var controls = new OrbitControls( camera, renderer.domElement );
controls.screenSpacePanning = false;
controls.update();

// Animate
function animate() {
	requestAnimationFrame( animate );
    // cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;			
	renderer.render( scene, camera );

    controls.update();
};			
				
animate();

console.log('Hi!')