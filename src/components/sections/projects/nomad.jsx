import {Danger} from '../../icons/icons'
import ImageSlider from '../../imageSlider/slider'
import Modal from '../../modal'

function NomadModal({show, setShow}) {
  const imagesAddress = ['./assets/cv/nomad/screen1.jpg', './assets/cv/nomad/screen2.jpg']

  return (
    <Modal show={show} setShow={setShow}>
      <div className='min-h-[50vh] max-h-[90vh] py-4'>
        <h3 className='font-bold border-b border-gray-100 max-w-[90%] pb-1'>The water supply system of the nomads</h3>
        <p className='mt-2 p-2'>
          This is a dashboard panel developed by react.js and JavaScript, which is exclusively designed and developed to
          manage water supply requests for the nomads of South Khorasan province. This system is fully responsive and
          allows the user to work with the system through a mobile phone.
        </p>
        {/* notic */}
        <div className='bg-gray-800 rounded-md p-2 my-2'>
          <div className='border-b my-2 border-gray-400'>
            <h3 className='font-bold flex items-center mb-2'>
              <span>
                <Danger color='orange' size='30' className='mr-2' />
              </span>
              Notice:
            </h3>
          </div>
          <p>
            This project had 6 endpoints and 3 pages. Adding pages due to the business owner‘s requests is not possible.
            If you are interested in collaborating, an overview of the project will be provided to you. Some of the
            pages are shown below.
          </p>
        </div>
        <div className=''>
          <h3 className='py-2'>Screenshots</h3>
          <ImageSlider slides={1} center={false} images={imagesAddress} />
        </div>
      </div>
    </Modal>
  )
}

export default NomadModal
