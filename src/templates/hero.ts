import * as t from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export const HeroTemplate = () => `
<div class="leading-normal tracking-normal text-indigo-400 p-6 bg-cover bg-fixed" style="background-image: url('/header.png');">
<div class="h-full">
  <!--Nav-->
  <div class="w-full container mx-auto">
    <div class="w-full flex items-center justify-between">
      <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
        Rain<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">blur</span>
      </a>

      <div class="flex w-1/2 justify-end content-center">
        <a class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
          <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
            ></path>
          </svg>
        </a>
        <a
          class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
          href="https://www.facebook.com/sharer/sharer.php?u=#"
        >
          <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!--Main-->
  <div class="container py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
    <!--Left Col-->
    <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <h1 class="my-4 text-3xl md:text-5xl text-white  font-bold leading-tight text-center md:text-left">
        Construye 
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
          Experiencias 3D
        </span>
        en la web
      </h1>
      <p class="mt-4 leading-normal text-base md:text-xl mb-8 text-center md:text-left text-white">
        Comienza tu carrera como WebGL Developer y descubre tu potencial para crear páginas web y aplicaciones únicas.
      </p>

    </div>

    <!--Right Col-->
    <div id="heroCanvasContainer" class="z-20 relative w-full xl:w-3/5 overflow-hidden h-[60vh]   ">

    </div>

  </div>
</div>
</div>
`


export const heroLogic = () => {
  const container = document.getElementById('heroCanvasContainer')
  container!.style.backgroundColor = 'transparent';
  const renderer = new t.WebGLRenderer({ alpha: true, antialias:true })
  renderer.setSize(container!.clientWidth, container!.clientHeight)
  container!.appendChild(renderer.domElement)
  const scene = new t.Scene()
  const camera = new t.PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,1000,)
  camera.position.set(0,20,50)
  camera.lookAt(0,0,0)
  
  window.addEventListener('resize', () => handleResize())  
  const handleResize = () => {
    renderer.setSize(container!.clientWidth, container!.clientHeight)
    camera.aspect = container!.clientWidth / container!.clientHeight
    camera.updateProjectionMatrix()

    if(window.innerWidth<400) camera.position.setZ( 100 )
    else camera.position.setZ( window.innerWidth>600 ? 50 : 70 )
  }
  handleResize()
  
  // -----MAIN---------
      // lights
  const pointlight = new t.PointLight(0xffffff,1);
  pointlight.position.set(200,200,200);
  scene.add(pointlight);
  
  

  const loader = new GLTFLoader();

  loader.load('/3d/island.gltf', function (gltf) {
    scene.add(gltf.scene);
    console.log(gltf.scene)
    gsap.to(gltf.scene.position, {y: 2, duration: 2, yoyo: true, repeat: -1, ease: "power1.inOut"})
  // rotate the island with gsap
    // gsap.to(gltf.scene.rotation, {y: Math.PI*2, duration: 20, repeat: -1, ease: "none"})


  }, undefined, function (error) {
    console.error(error);
  });








  //-------   ADS --------------
  scene.add(pointlight)
  
  
  function animate(time:number){
    // ball.rotation.x = time/1000 
    // ball.rotation.y = time/1000
    renderer.render(scene, camera)
  }
  
  renderer.setAnimationLoop(animate)
};























// import * as t from 'three';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';


// export const HeroTemplate = () => `
// <div class="leading-normal tracking-normal text-indigo-400 p-6 bg-cover bg-fixed" style="background-image: url('/header.png');">
// <div class="h-full">
//   <!--Nav-->
//   <div class="w-full container mx-auto">
//     <div class="w-full flex items-center justify-between">
//       <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
//         Rain<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">blur</span>
//       </a>

//       <div class="flex w-1/2 justify-end content-center">
//         <a class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
//           <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
//             <path
//               d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
//             ></path>
//           </svg>
//         </a>
//         <a
//           class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
//           href="https://www.facebook.com/sharer/sharer.php?u=#"
//         >
//           <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
//             <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
//           </svg>
//         </a>
//       </div>
//     </div>
//   </div>

//   <!--Main-->
//   <div class="container py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
//     <!--Left Col-->
//     <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
//       <h1 class="my-4 text-3xl md:text-5xl text-white  font-bold leading-tight text-center md:text-left">
//         Construye 
//         <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
//           Experiencias 3D
//         </span>
//         en la web
//       </h1>
//       <p class="mt-4 leading-normal text-base md:text-xl mb-8 text-center md:text-left text-white">
//         Comienza tu carrera como WebGL Developer y descubre tu potencial para crear páginas web y aplicaciones únicas.
//       </p>

//     </div>

//     <!--Right Col-->
//     <div id="heroCanvasContainer" class="z-20 relative w-full xl:w-3/5 overflow-hidden h-[60vh]   ">

//     </div>

//   </div>
// </div>
// </div>
// `


// export const heroLogic = () => {
//   const container = document.getElementById('heroCanvasContainer')
//   container!.style.backgroundColor = 'transparent';
//   const renderer = new t.WebGLRenderer({ alpha: true, antialias:true })
//   renderer.setSize(container!.clientWidth, container!.clientHeight)
//       // OPTIONS DEPRECATED --> UPDATE
//   // renderer.outputEncoding = t.sRGBEncoding;
//   // renderer.toneMapping = t.ACESFilmicToneMapping;
//   // renderer.toneMappingExposure = 1.25;
//   container!.appendChild(renderer.domElement)

//   const scene = new t.Scene()
//   const camera = new t.PerspectiveCamera(50,window.innerWidth/window.innerHeight,.1,1000,)
//   camera.position.set(0,0,400)
  
//   //add resize listener
//   window.addEventListener('resize', () => {
//     handleResize()
//   })
  
//   const handleResize = () => {
//     renderer.setSize(container!.clientWidth, container!.clientHeight)
//     camera.aspect = container!.clientWidth / container!.clientHeight
//     camera.updateProjectionMatrix()
//   }
//   handleResize()
  
//   // -----MAIN---------
//       // lights
//   const pointlight = new t.PointLight(0xffffff,1);
//   pointlight.position.set(200,200,200);
//   scene.add(pointlight);
  
  
//   const envmaploader = new t.PMREMGenerator(renderer);

//   new RGBELoader().load('/3d/room.hdr', function (texture:any) {
//     const envMap = envmaploader.fromEquirectangular(texture).texture;

//     const ballMatConfig: t.MeshPhysicalMaterialParameters = {
//       clearcoat: 1.0,
//       clearcoatRoughness: 0.1,
//       metalness: 0.9,
//       roughness:0.5,
//       // color: 0x8418CA,
//       color: 0x84196CA,
//       // normalMap: texture,
//       normalScale: new t.Vector2( .15, .15 ),
//       envMap: envMap,
  
//     }

//     const TorusKnotGeometry = new t.TorusKnotGeometry( 100, 30, 100, 16 );
//     const TorusKnotMaterial = new t.MeshPhysicalMaterial(ballMatConfig)
//     const TorusKnot = new t.Mesh(TorusKnotGeometry, TorusKnotMaterial)
//     scene.add(TorusKnot)

//     // console.log((TorusKnot as any).morphTargetInfluences)
//   });








//   //-------   ADS --------------
//   scene.add(pointlight)
  
  
//   function animate(time:number){
//     // ball.rotation.x = time/1000 
//     // ball.rotation.y = time/1000
//     renderer.render(scene, camera)
//   }
  
//   renderer.setAnimationLoop(animate)
// };



// function createGeometry() {
//   const geometry = new t.BoxGeometry( 100, 100, 100, 32, 32, 32 );
//   // The positions make reference to the position of the vertices related to the center of the cube -> morphing positions and NORMALS is supported
//   const positionAttribute:any = geometry.attributes.position; // the original positions[] of the cube's vertices
//   geometry.morphAttributes.position = []; // // the positions of the vertices of the target geometry -> positions[[...sphere], [...twist]] in this case

  
//   const spherePositions = []; //for the first morph target we'll move the cube's vertices onto the surface of a sphere
//   const twistPositions:any[] = []; // for the second morph target, we'll twist the cubes vertices
//   const vertex = new t.Vector3(); // vertex == the current vertex we're working with
//   const direction = new t.Vector3( 1, 0, 0 ); // direction == axis of rotation for the twist

//   for ( let i = 0; i < positionAttribute.count; i ++ ) {
//       const x = positionAttribute.getX( i ); 
//       const y = positionAttribute.getY( i );
//       const z = positionAttribute.getZ( i );

//           //spherifying the cube
//       spherePositions.push(
//           x * Math.sqrt( 1 - ( y * y / 2 ) - ( z * z / 2 ) + ( y * y * z * z / 3 ) ),
//           y * Math.sqrt( 1 - ( z * z / 2 ) - ( x * x / 2 ) + ( z * z * x * x / 3 ) ),
//           z * Math.sqrt( 1 - ( x * x / 2 ) - ( y * y / 2 ) + ( x * x * y * y / 3 ) )
//       );

//       // twisting the cube
//       // stretch along the x-axis so we can see the twist better
//       vertex.set( x * 2, y, z );
//       vertex.applyAxisAngle( direction, Math.PI * x / 2 ).toArray( twistPositions, twistPositions.length );

//   }

//   // add the spherical positions as the first morph target
//   geometry.morphAttributes.position[ 0 ] = new t.Float32BufferAttribute( spherePositions, 3 );
//   // add the twisted positions as the second morph target
//   geometry.morphAttributes.position[ 1 ] = new t.Float32BufferAttribute( twistPositions, 3 );
//   return geometry;
// }


