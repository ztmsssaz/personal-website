import {useEffect, useState} from 'react'
import {Github, Linkedin, Moon, Sun} from '../../components/icons/icons'
import {Style} from './style'

function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        document.getElementById('header')?.classList.add('hiddenHeader')
      } else if (window.scrollY < 300) {
        document.getElementById('header')?.classList.remove('hiddenHeader')
      }
    })
  }, [])

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Style>
      <header
        id='header'
        className='z-10 py-2 opacity-85 fixed w-full top-0 right-0 font-bold bg-white text-slate-950 dark:text-white dark:bg-black'
      >
        <div className='container'>
          <div className='flex justify-between'>
            <div>
              <img className='mx-auto' src='./logo192.png' width='50px' />
            </div>
            <ul className='flex justify-center items-center'>
              <li className=''>
                <a className='hover:cursor-pointer' href='https://github.com/ztmsssaz' rel='noreferrer' target='_blank'>
                  <Github size='25' className='border rounded-sm border-black bg-black' />
                </a>
              </li>
              <li className='mx-2'>
                <a
                  className='hover:cursor-pointer bg-black'
                  href='https://www.linkedin.com/in/ztmsssaz/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <Linkedin size='35' />
                </a>
              </li>
              <li>
                <button className='border rounded-full hover:bg-slate-100 dark:bg-slate-200 duration-100 p-1'>
                  {theme == 'light' && (
                    <span onClick={() => setTheme('dark')} className='dark:hidden'>
                      <Moon size='30' className='transition-all duration-100' />
                    </span>
                  )}
                  {theme == 'dark' && (
                    <span onClick={() => setTheme('light')}>
                      <Sun size='30' className='transition-all duration-100' />
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Style>
  )
}

export default Header
