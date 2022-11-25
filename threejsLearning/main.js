import  * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75 , innerWidth/innerHeight,0.1, 1000)
      const render =  new THREE.WebGLRenderer()
       console.log(scene); 
       console.log(camera);
       console.log(render);
        render.setSize(innerWidth, innerHeight)
        document.body.appendChild(render.domElement);


         const boxGe
