import Modal from '../../modal'
import ImageSlider from '../../imageSlider/slider'
import BorderBox from '../../border-box'
import {Danger} from '../../icons/icons'

function AthleteModal({show, setShow}) {
  const imagesAddress = [
    './assets/cv/antus/splash.png',
    './assets/cv/antus/home.png',
    './assets/cv/antus/user-info.png',
    './assets/cv/antus/gym.png',
    './assets/cv/antus/more.png',
    './assets/cv/antus/books.png',
    './assets/cv/antus/direct.png',
  ]

  return (
    <Modal show={show} setShow={setShow}>
      <div className='min-h-[50vh] max-h-[90vh] py-4'>
        <h3 className='font-bold border-b border-gray-100 max-w-[90%] pb-1'>Antus Athlete App</h3>
        <p className='leading-7 mt-2 p-2'>
          Antus is a progressive web application designed and developed for sports trainers. This application is
          developed using Reactjs and JavaScript and Bootstrap 5.
          <br />
          In fact, this application is an interface between athletes and trainers of the gym, where the trainers can
          provide the training program and meal plan to the users.
        </p>
        {/* notic */}
        <div className='bg-gray-100 dark:bg-gray-800 rounded-md p-2 my-2'>
          <div className='border-b my-2 border-gray-400'>
            <h3 className='font-bold flex items-center mb-2'>
              <span>
                <Danger color='orange' size='30' className='mr-2' />
              </span>
              Notice:
            </h3>
          </div>
          <p>
            This project had 60 endpoints and 42 pages. Adding pages due to the business owner‘s requests is not
            possible. If you are interested in collaborating, an overview of the project will be provided to you. Some
            of the pages are shown below.
          </p>
        </div>
        <div>
          <h3>Tools Used:</h3>
          <div className={`flex justify-start flex-wrap`}>
            <BorderBox value='Angular' />
            <BorderBox value='Typescript' />
            <BorderBox value='Angular Forms' />
            <BorderBox value='Bootstrap 5' />
            <BorderBox value='Socket.io' />
            <BorderBox value='FontAwesome' />
            <BorderBox value='Apexcharts' />
            <BorderBox value='OTP' />
            <BorderBox value='Swiper' />
            <BorderBox value='PWA' />
            <BorderBox value='web-push' />
            <BorderBox value='Git' />
            <BorderBox value='Aglile Methodologie' />
            <BorderBox value='Trello' />
          </div>
        </div>
        <div className=''>
          <h3 className='py-2'>Screenshots</h3>
          <ImageSlider images={imagesAddress} />
        </div>
      </div>
    </Modal>
  )
}

export default AthleteModal
