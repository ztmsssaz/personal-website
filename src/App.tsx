import {useEffect, useState} from 'react'
import Layout from './layout'
import Home from './components/sections/home/home'
import AboutMe from './components/sections/about-me/aboutMe'
import Projects from './components/sections/projects/projects'

function App() {
  const [aboutAnimate, setAboutAnimate] = useState(false)

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
    const aboutEl: any = aboutMe.getBoundingClientRect()

    if (aboutEl.top < window.innerHeight && aboutEl.bottom >= 0) {
      if (!aboutAnimate) {
        setAboutAnimate(true)
      }
    }
  })

  return (
    <Layout>
      <Home />
      <AboutMe animate={aboutAnimate} />
      <Projects />
    </Layout>
  )
}

export default App
