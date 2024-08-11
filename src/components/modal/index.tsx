import {Style} from './style'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Modal({children, show, setShow}: any) {
  return (
    <Style>
      {
        <div
          className={`modal w-screen h-screen top-0 left-0 bg-black ${show && ' show '} duration-1000`}
          onClick={() => {
            setShow(false)
          }}
        ></div>
      }
      <div
        className={`modal-dialog block overflow-y-scroll overflow-x-hidden fixed top-1/2 left-1/2 translate-x-[-50%]${
          show ? ' show ' : ''
        } z-10 bg-white w-11/12 sm:w-10/12 rounded-md`}
      >
        <div className='relative flex'>
          <div
            className='fixed top-4 right-5 z-40'
            onClick={() => {
              setShow(false)
            }}
          >
            <button className='border rounded-lg py-2 px-3 bg-red-500 hover:bg-slate-400 text-white'> Close</button>
          </div>
          <div className='container relative'>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Modal
