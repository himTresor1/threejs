import  * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import {OrbitControls} from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js'
import  * as dat from 'dat.gui'


 const gui = new dat.GUI()
 const world = {
  plane :{
     width: 10,
     height:10,
     widthSegments: 10,
    heightSegments :10,

  }
 }

  
gui.add(world.plane, 'width' , 1 ,  50).onChange(generatePlane)

gui.add(world.plane,'height', 1,50 ).onChange(generatePlane)
 gui.add(world.plane ,'widthSegments' , 1,50 ).onChange(generatePlane)
 gui.add(world.plane ,'heightSegments' , 1,50 ).onChange(generatePlane)

   function generatePlane  (){
    planeMesh.geometry.dispose()
    planeMesh.geometry= new THREE.PlaneGeometry(world.plane.width,
      world.plane.height,
      world.plane.widthSegments,
      world.plane.heightSegments 
      )
    
    const {array} = planeMesh.geometry.attributes.position;
    for(let i=0 ;  i  <array.length ; i+=3 ){
       const x= array[i]
       const y= array[i+1]
       const z= array[i+2] 
     array[ i+2 ] =  z+ Math.random()  
}}
const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75 , innerWidth/innerHeight,0.1, 1000)
      const renderer =  new THREE.WebGLRenderer()

      
        renderer.setSize(innerWidth, innerHeight)
        renderer.setPixelRatio(devicePixelRatio)
        document.body.appendChild(renderer.domElement);
          new OrbitControls(camera,renderer.domElement)

        
           camera.position.z =5   

           const planeGeometry = new THREE.PlaneGeometry(10 , 10 , 10 ,10 );  
           const planeMaterial = new THREE.MeshPhongMaterial({
            color : 0xFF0000, 
            side : THREE.DoubleSide,
            flatShading : THREE.FlatShading

          });  
           const  planeMesh = new THREE.Mesh(planeGeometry, planeMaterial)
           scene.add(planeMesh)

           const light = new THREE.DirectionalLight(
            0xFFFFFF, 1)

           light.position.set(0,0,1)
            scene.add(light )

            // const backLight = new THREE.DirectionalLight(0xFFFFFF, 1 )
            // light.position.set(0,0,-1)
            //   scene.add(backLight )
               const backLight= new THREE.DirectionalLight(0xFFFFFF,10)
               light.position.set(0,0,-1)
               scene.add(backLight)
            console.log(planeMesh.geometry.attributes.position.array);
                 const {array} = planeMesh.geometry.attributes.position
            for(let i=0 ;  i  <array.length ; i+=3 ){
               const x= array[i]
               const y= array[i+1]
               const z= array[i+2] 
              // console.log(array[i]); 
          
               array[ i+2 ] =  z+ Math.random()  
                
                      
            }
        

             function animate(){
               requestAnimationFrame(animate)
               renderer.render(scene, camera)
              

              //  planeMesh.rotation.x +=0.01
              //  planeMesh.rotation.y +=0.01 
             }
 

            animate();

console.log(geometry.attributes.position)

