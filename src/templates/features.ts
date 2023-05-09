const featuresList = [
  {
    title: 'No necesitas tener conocimientos en WebGL ó ThreeJS',
    description: 'El curso esta diseñado para que aprendas todo lo relacionado a WebGL y ThreeJS desde un cero absoluto. No necesitas tener conocimientos previos.',
    icon: 'heroicon-o-cloud-upload',
  },
  {
    title: 'No necesitas tener nociones de diseño ó software 3D',
    description: 'Todos los assets y modelos 3D que utilizaremos en el curso están incluidos. No necesitas tener conocimientos previos en diseño ó software. Aunque si quieres incorporar tus propios modelos 3D, en el curso se te explica como hacerlo.',
    icon: 'heroicon-o-shield-check',
  },
  {
    title: 'No tienes que ser un cerebro en matemáticas',
    description: 'Las librerías que utilizaremos se encargan del trabajo pesado. Con que sepas sumar, restar, multiplicar y dividir, es suficiente. Pero te dejo lecturas y recursos donde puedes incursionar más en el tema si te apasionan las mates como a mí.',
    icon: 'heroicon-o-database',
  },
  {
    title: 'No necesitas ser un experto en Javascript',
    description: 'Si dominas conceptos básicos de Javascript como variables, funciones, condicionales, ciclos, etc. Es suficiente. Todo lo demás lo aprenderás en el curso.',
    icon: 'heroicon-o-database',
  },
  {
    title: 'No requieres una super computadora',
    description: 'Con una computadora de gama media es suficiente. Para que te des una idea, con 4gb de ram y un procesador i3 estarás bien. Aunque lo ideal sería 8gb de RAM y un procesador i5 o superior.',
    icon: 'heroicon-o-database',
  },
]


export const Features = `
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">¿Este curso es para tí?</p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        Este curso está diseñado para principiantes en el mundo del 3D.
      </p>
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-full">
      <div class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 ">
        
        ${(()=>{
          let featuresString = ``
          for(let feature of featuresList) {
            featuresString += `
              <div class="relative border-2 border-[#ccc] rounded-lg ">
                <div class="text-base font-semibold leading-7 text-gray-900">
                  <div class=" w-full h-[200px]  flex items-center justify-center rounded-lg bg-indigo-600">
                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  <div class="px-10 py-5">
                    ${feature.title}
                    <div class="mt-2 text-base leading-7 text-gray-600">${ feature.description }</div>
                  </div>
                </div>
              </div>
            `
          }
          return featuresString
        })()}

      </div>
    </div>
  </div>
</div>
`