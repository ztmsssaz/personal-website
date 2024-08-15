import BorderBox from '../../border-box'
import {Danger} from '../../icons/icons'
import ImageSlider from '../../imageSlider/slider'
import Modal from '../../modal'

function CoachModal({show, setShow}) {
  const imagesAddress = [
    './assets/cv/antus/coach/home.png',
    './assets/cv/antus/coach/dashboard.png',
    './assets/cv/antus/direct.png',
    './assets/cv/antus/coach/calendar.png',
    './assets/cv/antus/coach/movement.png',
    './assets/cv/antus/coach/muscles.png',
    './assets/cv/antus/coach/uploads.png',
  ]

  return (
    <Modal show={show} setShow={setShow}>
      <div className='min-h-[50vh] max-h-[90vh] py-4'>
        <h3 className='font-bold border-b border-gray-100 max-w-[90%] pb-1'>Antus Coach App</h3>
        <p className='mt-2 p-2'>
          Zamir is an innovative, multi-lingual, international website designed to address the urgent needs of
          individuals seeking mental health support. Developed using Next.js and adorned with Tailwind CSS, it offers a
          seamless and responsive user experience. The integration of React Query and React Hook Form ensures a smooth,
          efficient, and user-friendly interface, simplifying the process for clients to register and book therapy
          sessions. The platform is distinguished by its ability to support multiple languages through i18next, making
          it accessible to a diverse global audience. This feature enhances the inclusivity of Zamir, allowing users
          from various linguistic backgrounds to easily navigate the site and access the services they need in their
          preferred language.
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
            This project had 48 endpoints and pages. Adding pages due to the business owner‘s requests is not possible.
            If you are interested in collaborating, an overview of the project will be provided to you. Some of the
            pages are shown below.
          </p>
        </div>
        <div>
          <h3>Tools Used:</h3>
          <div className={`flex justify-start flex-wrap`}>
            <BorderBox value='Javascript' />
            <BorderBox value='React' />
            <BorderBox value='Bootstrap' />
            <BorderBox value='React Context' />
            <BorderBox value='Socket.io' />
            <BorderBox value='Axios' />
            <BorderBox value='React Router Dom' />
            <BorderBox value='Styled components' />
            <BorderBox value='Formik (Yup)' />
            <BorderBox value='PWA' />
            <BorderBox value='OTP' />
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

export default CoachModal
