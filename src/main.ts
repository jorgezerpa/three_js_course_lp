import './style.css'
import { HeroTemplate, heroLogic } from './templates/hero'
import { Video } from './templates/video'
import { CourseSections } from './templates/courseSections'
import { About } from './templates/about'
import { Features } from './templates/features'
import { Faqs } from './templates/faqs'
import { LastCTA } from './templates/lastCTA'
import { Footer } from './templates/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    ${HeroTemplate()}
    ${Video}
    ${CourseSections}
    ${About}
    ${Features}
    ${Faqs}
    ${LastCTA}
    ${Footer}
  </div>
`


// Call the heroLogic function after the DOM has loaded
window.addEventListener('DOMContentLoaded', () => {
  heroLogic();
});







