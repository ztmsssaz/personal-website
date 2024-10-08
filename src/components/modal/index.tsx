import {Close} from '../icons/icons'
import {Style} from './style'

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
        className={`modal-dialog min-h-[90vh] block overflow-y-scroll overflow-x-hidden 
        fixed top-1/2 left-1/2 translate-x-[-50%] z-10 dark:bg-dark-200 bg-white dark:text-white border border-lime-500 w-11/12 sm:w-10/12 rounded-lg
        ${show ? ' show ' : ''}`}
      >
        <div className='relative flex'>
          <div
            className='fixed top-4 right-1 z-40'
            onClick={() => {
              setShow(false)
            }}
          >
            <button className=''>
              <Close color='#ef4444' size='30' />
            </button>
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
