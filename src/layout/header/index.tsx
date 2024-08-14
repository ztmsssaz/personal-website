import {useEffect} from 'react'
import {Github, Linkedin} from '../../components/icons/icons'
import {Style} from './style'

function Header() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        document.getElementById('header')?.classList.add('hiddenHeader')
      } else if (window.scrollY < 300) {
        document.getElementById('header')?.classList.remove('hiddenHeader')
      }
    })
  }, [])

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
              <li className='mx-2'>
                <a className='hover:cursor-pointer' href='https://github.com/ztmsssaz' target='_blank'>
                  <Github size='28' className='border rounded ' />
                </a>
              </li>
              <li className='mx-2'>
                <a className='hover:cursor-pointer' href='https://www.linkedin.com/in/ztmsssaz/' target='_blank'>
                  <Linkedin size='30' className='border rounded' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Style>
  )
}

export default Header
