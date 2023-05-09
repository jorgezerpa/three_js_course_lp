import { CourseSection } from "./courseSection"

export const CourseSections = `
  <div class=" bg-white">
    <p class="py-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
      ¿Qué aprenderás?  
    </p>
    ${CourseSection({ 
      levelLabel:"Nivel 1", 
      title:"Introducción a ThreeJS", 
      description:"Aprenderás los conceptos básicos de ThreeJS y WebGL para crear tus primeras escenas 3D en la web.", 
      lessonsList:[
        {name:"Tu primera escena 3D"},
        {name:"Camara, escena y render"},
        {name:"SetUp de un entorno de desarrollo profesional"},
        {name:"Materiales y Geometrías"},
        {name:"Luces y sombras"},
        {name:"Animaciones y eventos"},
        {name:"Projecto 1: Esféra animada"},
        {name:"Projecto 2: Torus realista"},
        {name:"Projecto 3: Sistema solar"},
      ] 
    })}

    ${CourseSection({ 
      invert:true, 
      levelLabel:"Nivel 2", 
      title:"Modelos 3D", 
      description:"Aprenderás a importar modelos 3D a ThreeJS y a optimizarlos para que puedas crear escenas complejas.", 
      lessonsList:[
        {name:"Importando modelo GLTF"},
        {name:"Manipulación del modelo"}, // here show how to center it, change the scale, work with the pivot point, units, asyncronism, etc...
        {name:"Projecto 4: Camera Scroll Showcase"},
        {name:"Importando un entorno 3D"},
        {name:"Interacción con el entorno"},
        {name:"Importar y manipular animaciones"},
        {name:"Projecto 5: Enviroment based Website"},
      ] 
    })}

    ${CourseSection({ 
      levelLabel:"Nivel 3", 
      title:"Físicas con CannonJS", 
      description:"Aprenderás a crear simulaciones físicas para crear experiencias súper realistas y a interactuar con ellas.", 
      lessonsList:[
        {name:"Introductión a CannonJS"},
        {name:"Gravedad, colisiones, fricción..."},
        {name:"Projecto 6: Demolition hammer"},
        {name:"Projecto 7: marbel Physics based website"},
      ] 
    })}

  </div>
`

