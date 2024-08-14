import {Github, Linkedin, Location, Mail, Phone} from '../../icons/icons'
import {Style} from './style'

function Home() {
  return (
    <Style>
      <div id='home' className='h-screen bgHome relative'>
        <div className='absolute top-0 left-0 h-full w-full bg-black opacity-85'></div>
        <div className='absolute w-full top-[50%] translate-y-[-50%] text-fuchsia-50'>
          <div className='container mx-auto'>
            <div className='flex justify-center items-center flex-col-reverse sm:flex-row'>
              <div className='w-3/6'>
                <button className='bg-lime-600  rounded-e-2xl rounded-t-2xl py-1 px-4 animate__animated animate__rotateInDownLeft animate__fast'>
                  Hello i'm
                </button>
                <h1 className='animate__animated animate__fadeInUp animate__fast'>Abolfazl zarei</h1>
                <h3 className='animate__animated animate__fadeInUp animate__slow'>Frontend Developer</h3>
                <div className='mt-3 animate__animated animate__fadeInUp animate__slow'>
                  <div className='pr-2 my-1 flex'>
                    <Mail size='22' className='mr-1' color='#a3e635' />
                    <a href='mailto:' className='transition-all hover:text-lime-400'>
                      zarei.mrabolfazl@gmail.com
                    </a>
                  </div>
                  <div className='pr-2 my-1 flex'>
                    <Phone size='25' className='mr-1' color='#a3e635' />
                    <a href='tel:+989156666467' className='transition-all hover:text-lime-400'>
                      +98 915 666 6467
                    </a>
                  </div>
                  <div className='pr-2 my-1 flex'>
                    <Location size='20' className='mr-1' color='#a3e635' />
                    <span className='transition-all hover:text-lime-400'>Tehran, Iran</span>
                  </div>
                </div>
              </div>
              <div className='w-3/6 sm:w-1/4'>
                <div className='maskProfile bg-slate-50 mb-12 sm:m-0 animate__animated animate__fadeInRight animate__slow'>
                  <img
                    className='duration-700 hover:scale-110'
                    src='./assets/images/profile-2.jpg'
                    alt='abolfazl zarei'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Home
