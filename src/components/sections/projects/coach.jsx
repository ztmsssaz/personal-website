import Modal from '../../modal'
import Slider from 'react-slick'

function CoachModal({show, setShow}) {
  function SampleNextArrow(props) {
    const {className, onClick} = props
    return <div className={className + ` z-10 arrows mr-[18px] sm:mx-[ 15px]`} onClick={onClick} />
  }

  function SamplePrevArrow(props) {
    const {className, onClick} = props
    return <div className={className + ` z-10 arrows ml-[18px] sm:mx-[-15px]`} onClick={onClick} />
  }

  // slider setting
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerPadding: '60px',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    firstMobile: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Modal show={show} setShow={setShow}>
      <div className='min-h-[50vh] max-h-[90vh] py-4'>
        <h3 className='font-bold border-b border-dark inline pb-1'>* Antus Coach App</h3>
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
        <div className='bg-gray-200 rounded-md p-2 my-2'>
          <div className='border-b border-gray-400'>
            <h3 className='font-bold'>Notice:</h3>
          </div>
          <p>
            This project had 73 endpoints and 46 pages. Adding pages due to the business owner‘s requests is not
            possible. If you are interested in collaborating, an overview of the project will be provided to you. Some
            of the pages are shown below.
          </p>
        </div>
        <div className=''>
          <h3 className='py-2'>Screenshots</h3>
          <Slider {...settings} className='text-center'>
            <div className='pr-1 outline-none'>
              <img
                className='rounded-xl border max-h-[80vh]'
                src='./assets/cv/antus/coach/home.png'
                alt='antus coach'
              />
            </div>
            <div className='pr-1 outline-none'>
              <img
                className='rounded-xl border max-h-[80vh]'
                src='./assets/cv/antus/coach/dashboard.png'
                alt='antus coach'
              />
            </div>
            <div className='pr-1 outline-none'>
              <img
                className='rounded-xl border max-h-[80vh]'
                src='./assets/cv/antus/coach/calendar.png'
                alt='antus coach'
              />
            </div>
            <div className='pr-1 outline-none'>
              <img
                className='rounded-xl border max-h-[80vh]'
                src='./assets/cv/antus/coach/movement.png'
                alt='antus coach'
              />
            </div>
            <div className='pr-1 outline-none'>
              <img
                className='rounded-xl border max-h-[80vh]'
                src='./assets/cv/antus/coach/muscles.png'
                alt='antus coach'
              />
            </div>
            <div className='pr-1 outline-none'>
              <img
                className='rounded-xl border max-h-[80vh]'
                src='./assets/cv/antus/coach/uploads.png'
                alt='antus coach'
              />
            </div>
            <div className='pr-1 outline-none'>
              <img
                className='rounded-xl border max-h-[80vh]'
                src='./assets/cv/antus/coach/dashboard.png'
                alt='antus coach'
              />
            </div>
          </Slider>
        </div>
      </div>
    </Modal>
  )
}

export default CoachModal
