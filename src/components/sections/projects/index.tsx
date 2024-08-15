import {useEffect, useState} from 'react'
import {Style} from './style'
import CoachModal from './coach'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import AthleteModal from './athlete'
import NomadModal from './nomad'

function Projects({animate}: any) {
  const [coachModal, setCoachModal] = useState(false)
  const [athleteModal, setAthleteModal] = useState(false)
  const [nomadModal, setNomadModal] = useState(false)

  useEffect(() => {
    const body = document.getElementById('body')
    if (coachModal || athleteModal || nomadModal) {
      body?.classList.add('overflow-hidden')
    } else {
      body?.classList.remove('overflow-hidden')
    }
  }, [coachModal, athleteModal, nomadModal])

  return (
    <Style>
      <div
        id='projects'
        className='min-h-screen dark:before:opacity-50 before:opacity-20 dark:bg-emerald-950 border-t border-lime-500 relative py-2'
      >
        <div className='container'>
          <h2
            className={`text-center font-bold p-10 text-dark-200 dark:text-white ${
              animate ? 'animate__animated animate__slideInUp' : ''
            }`}
          >
            Featured Projects
          </h2>
          <div className='flex justify-around flex-wrap text-dark-200 dark:text-white'>
            {/* coach */}
            <div className='box w-full sm:w-5/12 md:w-[49%] xl:w-[44%] bg-white hover:bg-gray-100 dark:bg-dark-200 dark:hover:bg-dark-100 duration-300 border border-lime-500 rounded-lg p-3 my-4'>
              <div className='cursor-pointer m-2' onClick={() => setCoachModal(true)}>
                <div className='flex justify-between items-center'>
                  <h3 className='font-bold'> Antus Coach App (PWA)</h3>
                  <button className='text-sm border border-lime-500 hover:bg-lime-500 hover:text-white rounded-md py-1 px-2 ml-4'>
                    show more
                  </button>
                </div>
                <div id='project_1' className='text-sm py-2'>
                  <b>Technologies:</b> <span>Reactjs, </span> <span> Javascript, </span> <span>Bootstrap5...</span>
                </div>
                <div className='overflow-hidden rounded-lg duration-200 flex items-center'>
                  <div className='w-1/2 duration-300 hover:translate-y-[10px]'>
                    <img className='xl:max-h-[80%] px-2' src='./assets/cv/antus/coach/home.png' alt='antus coach' />
                  </div>
                  <div className='w-1/2 duration-300 hover:translate-y-[10px]'>
                    <div>
                      <img
                        className='xl:max-h-[70vh] px-2'
                        src='./assets/cv/antus/coach/dashboard.png'
                        alt='antus coach'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* athlete */}
            <div className='box w-full sm:w-5/12 md:w-[49%] xl:w-[44%] bg-white hover:bg-gray-100 dark:bg-dark-200 dark:hover:bg-dark-100 border border-lime-500 rounded-lg p-3 my-4'>
              <div className='cursor-pointer m-2' onClick={() => setAthleteModal(true)}>
                <div className=' flex justify-between items-center'>
                  <h3 className='font-bold'> Antus Athlete App (PWA)</h3>
                  <button className='text-sm border border-lime-500 hover:bg-lime-500 hover:text-white  rounded-md py-1 px-2 ml-4'>
                    show more
                  </button>
                </div>
                <div className='text-sm py-2'>
                  <b>Technologies:</b> <span>Angular 10, </span> <span> Typescript, </span> <span>Bootstrap5...</span>
                </div>
                <div className='overflow-hidden rounded-lg duration-200 flex items-center'>
                  <div className='w-1/2 duration-300 hover:translate-y-[10px]'>
                    <img className='xl:max-h-[70vh] px-2' src='./assets/cv/antus/splash.png' alt='antus coach' />
                  </div>
                  <div className='w-1/2 duration-300 hover:translate-y-[10px]'>
                    <img className='xl:max-h-[80%] px-2' src='./assets/cv/antus/home.png' alt='antus coach' />
                  </div>
                </div>
              </div>
            </div>
            {/* nomad */}
            <div className='box w-full sm:w-6/12 bg-white hover:bg-gray-100 dark:bg-dark-200 dark:hover:bg-dark-100 border border-lime-500 rounded-lg p-3 my-4'>
              <div className='cursor-pointer m-2' onClick={() => setNomadModal(true)}>
                <div className=' flex justify-between items-center'>
                  <h3 className='font-bold'>The water supply system of the nomads </h3>
                  <button className='text-sm border border-lime-500 hover:bg-lime-500 hover:text-white rounded-md p-1'>
                    show more
                  </button>
                </div>
                <div className='text-sm py-2'>
                  <b>Technologies:</b> <span>Reactjs, </span> <span> Typescript, </span> <span>Bootstrap5...</span>
                </div>
                <div className='overflow-hidden rounded-lg duration-300 hover:translate-y-[10px]'>
                  <img className='' src='./assets/cv/nomad/screen1.jpg' alt='antus coach' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CoachModal show={coachModal} setShow={setCoachModal} />
      <AthleteModal show={athleteModal} setShow={setAthleteModal} />
      <NomadModal show={nomadModal} setShow={setNomadModal} />
    </Style>
  )
}

export default Projects
