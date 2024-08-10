import {useEffect, useState} from 'react'
import Layout from './layout'
import Home from './components/sections/home/home'
import AboutMe from './components/sections/about-me/aboutMe'
import Projects from './components/sections/projects/projects'
import Modal from './components/modal'

function App() {
  const [aboutAnimate, setAboutAnimate] = useState(false)
  const [projectsAnimate, setProjectsAnimate] = useState(false)

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  window.addEventListener('scroll', function () {
    const aboutMe: any = document.querySelector('#aboutMe')
    const home: any = document.querySelector('#home')
    const projects: any = document.querySelector('#project_1')
    const aboutEl: any = aboutMe.getBoundingClientRect()
    const projectsEl: any = projects.getBoundingClientRect()

    if (aboutEl.top < window.innerHeight && aboutEl.bottom >= 0) {
      if (!aboutAnimate) {
        setAboutAnimate(true)
      }
    }
    if (projectsEl.top < window.innerHeight && projectsEl.bottom >= 0) {
      if (!projectsAnimate) {
        setProjectsAnimate(true)
      }
    }
  })

  return (
    <Layout>
      <Home />
      <AboutMe animate={aboutAnimate} />
      <Projects animate={projectsAnimate} />
      <Modal>
        <div>salam</div>
      </Modal>
    </Layout>
  )
}

export default App
