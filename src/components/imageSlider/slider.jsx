import Slider from 'react-slick'
import {ArrowLeft, ArrowRight} from '../icons/icons'

function ImageSlider({images = [], slides = 3, center = true}) {
  // Right arrow
  function SampleNextArrow(props) {
    const {onClick} = props
    return (
      <div className={`absolute top-[50%] right-[-10px] translate-y-[-50%] z-20`} onClick={onClick}>
        <ArrowRight
          className='bg-customGreen-100 border border-customGreen-100 rounded-full rouned-xl hover:bg-customGreen-200 hover:cursor-pointer py-1'
          color={'#fff'}
          size={25}
        />
      </div>
    )
  }

  // left arrow
  function SamplePrevArrow(props) {
    const {onClick} = props
    return (
      <div className={`absolute top-[50%] left-[-10px] translate-y-[-50%] z-20`} onClick={onClick}>
        <ArrowLeft
          className='bg-customGreen-100 border border-customGreen-100 rounded-full rouned-xl hover:bg-customGreen-200 hover:cursor-pointer py-1'
          color={'#fff'}
          size={25}
        />
      </div>
    )
  }

  // slider setting
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    centerMode: center,
    slidesToShow: slides,
    slidesToScroll: 1,
    initialSlide: 1,
    infinite: true,
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
    <Slider {...settings}>
      {images.map((item) => (
        <div className='pr-1 outline-none cursor-move flex-i justify-center'>
          <img className='rounded-xl border sm:max-h-[80vh]' src={item} alt='antus coach' />
        </div>
      ))}
    </Slider>
  )
}

export default ImageSlider
