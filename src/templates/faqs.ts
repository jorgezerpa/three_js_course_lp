const FAQS = [
  {
    question: '¿Qué conocimientos necesito para tomar este curso?',
    answer: 'Solo necesitas tener nociones básicas de HTML, CSS y Javascript. Debes dominar conceptos como variables, funciones, condicionales, ciclos, etc. Todo lo demás lo aprenderás en el curso. Si empiezas desde 0, podrías aprender estos conceptos en 1-2 mes dedicándole un par de horas al dia.'
  },
  {
    question: '¿Puedo pedir un reembolso?',
    answer: 'Desde el momento que te inscribes al curso, tendrás 7 días para probarlo y decidir si es para tí. Si no es lo que esperabas, puedes solicitar un reembolso total directamente desde tu cuenta de Hotmart.'
  },
  {
    question: '¿Tendré acceso de por vida al curso y a las actualizaciones?',
    answer: 'Sí. Tendrás acceso de por vida al curso, al código y a las actualizaciones. Además de beneficios y descuentos en futuros cursos y productos.'
  },
  {
    question: '¿Tendré algún tipo de soporte técnico mientras tomo el curso?',
    answer: 'Por el momento no se ofrece ningún tipo de soporte directo. Pero, el instructor es muy activo en Instagram. Puedes conectar con el por allí y te responderá en medida de lo posible.'
  },
  {
    question: '¿Puedo tomar el curso a mi propio ritmo?',
    answer: 'Sí. Las clases estan grabadas y disponibles 24/7. Puedes tomar el curso al momento que desees. No hay fechas límite ni horarios establecidos.'
  },
  {
    question: '¿Puedo aplicar lo aprendido en un trabajo real?',
    answer: 'El mercado de trabajo para WebGL Developers es muy amplio. Podrás aplicar lo aprendido en empresas de desarrollo de software, agencias de publicidad, estudios de diseño, estudios de arquitectura, estudios de videojuegos, etc. Además, podrías trabajar como freelancer y ofrecer tus servicios a clientes de todo el mundo. (como el tutor del curso).'
  },
  {
    question: '¿Cómo ayudan estos conocimientos a mi perfíl profesional?',
    answer: 'Un WebGL Developer es un profesional que se encarga de crear experiencias 3D en la web. Es un perfil que esta en creciente demanda en la industria del desarrollo de software. Sin duda es una habilidad que destacará tu perfíl ante las empresas y posibles clientes.'
  },
  {
    question: '¿En que plataforma esta alojado el curso?',
    answer: 'El curso y todo el proceso de pago esta alojado en Hotmart. Hotmart es una empresa con más de 10 años de experiencia en el mercado y cientos de miles de usuarios a nivel mundial. Es una de las plataformas más seguras y confiables a dia de hoy.'
  },
  {
    question: '¿Puedo usar ThreeJS con React u otras librerías?',
    answer: 'Sí. En el curso trabaja directamente con ninguna librería. Pero al ser impartido con "vanilla" Javascript, podrás integrar TODO lo aprendido con cualquier librería o framework que desees. Incluso, React tiene su propia librería para trabajar con ThreeJS: react-three-fiber.'
  },
  {
    question: '¿Tendré un cetificado al finalizar el curso?',
    answer: 'Si. Al finalizar el curso podrás descargar un certificado de finalización. Este certificado es emitido por Hotmart y cuenta con un código único de verificación.'
  },
]


export const Faqs = `
<section class="bg-white dark:bg-gray-900 w-full">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
      <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
        
        ${(()=>{
          let faqsString = ``
          for(let faq of FAQS) {
            faqsString += `
              <div>
                  <div class="mb-10">
                      <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                          <svg class="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                          ${faq.question}
                      </h3>
                      <p class="text-gray-500 dark:text-gray-400">${faq.answer}</p>
                  </div>
              </div>
            `
          }
          return faqsString
        })()}
          
      </div>
  </div>
</section>
`