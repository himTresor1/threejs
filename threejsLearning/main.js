import  * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75 , innerWidth/innerHeight,0.1, 1000)
      const renderer =  new THREE.WebGLRenderer()
       console.log(scene); 
       console.log(camera);
       console.log(renderer);
        renderer.setSize(innerWidth, innerHeight)
        document.body.appendChild(renderer.domElement);


         const boxGeometry = new THREE.BoxGeometry(1 , 1, 1);

          const material = new THREE.MeshBasicMaterial({color: 0x00FF00})
         console.log(boxGeometry)
         console.log(material)


         const mesh = new THREE.Mesh(boxGeometry, material)
          console.log(mesh)


           scene.add(mesh)
           camera.position.z =5   


            renderer.render(scene, camera)


