import {useState} from 'react'
import {Style} from './style'
import CoachModal from './coach'

function Projects({animate}: any) {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Style>
      <div id='projects' className='min-h-screen bg-emerald-950 border-t border-lime-500 relative py-2'>
        <div className='container'>
          <h2
            className={`text-center font-bold p-10 text-dark dark:text-white ${
              animate ? 'animate__animated animate__slideInUp' : ''
            }`}
          >
            Featured Projects
          </h2>
          <div className='flex justify-around flex-wrap text-dark dark:text-white'>
            {/* coach */}
            <div className='w-full sm:w-5/12 md:w-[49%] xl:w-[44%] bg-dark hover:bg-slate-900 duration-300 border border-lime-500 rounded-lg p-3 my-4'>
              <div className='cursor-pointer m-2' onClick={() => setModalShow(true)}>
                <h3 className='font-bold'>Antus Coach (PWA) </h3>
                <div id='project_1' className='text-sm py-2'>
                  <b>Technologies:</b> <span>Reactjs, </span> <span> Javascript, </span> <span>Bootstrap5...</span>
                </div>
                <div className='overflow-hidden rounded-lg duration-200 hover:translate-y-[10px] flex items-center'>
                  <div className='w-1/2'>
                    <img
                      className='duration-200 hover:scale-[1.05] xl:max-h-[80%] px-2'
                      src='./assets/cv/antus/coach/home.png'
                      alt='antus coach'
                    />
                  </div>
                  <div className='w-1/2'>
                    <div>
                      <img
                        className='duration-200 hover:scale-[1.05] xl:max-h-[70vh] px-2'
                        src='./assets/cv/antus/coach/dashboard.png'
                        alt='antus coach'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* athlete */}
            <div className='w-full sm:w-5/12 md:w-[49%] xl:w-[44%] bg-dark border border-lime-500 rounded-lg p-3 my-4'>
              <div className='cursor-pointer m-2 '>
                <h3 className='font-bold'>Antus athlete (PWA)</h3>
                <div className='text-sm py-2'>
                  <b>Technologies:</b> <span>Angular 10, </span> <span> Typescript, </span> <span>Bootstrap5...</span>
                </div>
                <div className='overflow-hidden rounded-lg duration-200 hover:translate-y-[10px] flex items-center'>
                  <div className='w-1/2'>
                    <img
                      className='duration-200 hover:scale-[1.05] xl:max-h-[70vh] px-2'
                      src='./assets/cv/antus/splash.png'
                      alt='antus coach'
                    />
                  </div>
                  <div className='w-1/2'>
                    <img
                      className='duration-200 hover:scale-[1.05] xl:max-h-[80%] px-2'
                      src='./assets/cv/antus/home.png'
                      alt='antus coach'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* nomad */}
            <div className='w-full sm:w-6/12 bg-dark border border-lime-500 rounded-lg p-3 my-4'>
              <div className='cursor-pointer m-2'>
                <h3 className='font-bold'>The water supply system of the nomads </h3>
                <div className='text-sm py-2'>
                  <b>Technologies:</b> <span>Reactjs, </span> <span> Typescript, </span> <span>Bootstrap5...</span>
                </div>
                <div className='overflow-hidden rounded-lg duration-200 hover:translate-y-[10px]'>
                  <img
                    className='duration-200 hover:scale-[1.05]'
                    src='./assets/cv/nomad/screen1.jpg'
                    alt='antus coach'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoachModal show={modalShow} setShow={setModalShow} />
    </Style>
  )
}

export default Projects
