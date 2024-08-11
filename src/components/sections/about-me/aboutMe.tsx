import BorderBox from '../../border-box'

function AboutMe({animate}: any) {
  return (
    <div className='relative border-t border-lime-500 text-dark dark:text-white dark:bg-dark dar'>
      <div className='relative sm:top-[80px] container min-h-screen md:min-h-[90vh] pb-12 md:pb-0 mx-auto'>
        <div className={`flex flex-col sm:flex-row py-10 items-center ${!animate ? 'invisible' : 'visible'}`}>
          <div className='w-8/12 md:w-4/12'>
            <div className='py-4 md:max-w-[60%] mx-auto'>
              <div
                className={`maskProfile bg-slate-50 mx-auto mb-12 sm:m-0 animate__animated ${
                  animate ? ' animate__slideInLeft' : ''
                }`}
              >
                <img src='./assets/images/profile-2.jpg' className='' alt='abolfazl zarei' />
              </div>
            </div>
          </div>
          <div className='w-8/12'>
            <h2 className={`font-bold mb-3  ${animate ? 'animate__animated animate__fadeInUp' : ''}`}>About Me</h2>
            <p
              className={`text-md sm:text-lg sm:ml-2 md:m-0  ${animate ? 'animate__animated animate__slideInUp' : ''}`}
            >
              I'm Abolfazl, I'm Front-end web developer with more than 3 years of experience with <b>JavaScript, </b>
              <b>React.js, </b>
              <b>TypeScript, </b>
              <b>Bootstrap </b> and <b>Tailwind</b> to develop and debug web applications to deliver excellent user
              experiences.<span id='aboutMe'></span> Able to write efficient and reliable code by clean code. Very
              motivated, self-taught and I always try to update myself. A fast and creative learner. Adept at
              contributing to a highly collaborative work environment, finding solutions.
            </p>
          </div>
        </div>
        <div
          className={`flex justify-center flex-wrap mx-auto max-w-[90%] ${
            animate ? 'animate__animated animate__fadeInDown animate__slow' : ''
          }`}
        >
          <BorderBox value='Javascript' />
          <BorderBox value='Typescript' />
          <BorderBox value='React' />
          <BorderBox value='Sass' />
          <BorderBox value='Bootstrap' />
          <BorderBox value='Tailwind CSS' />
          <BorderBox value='Headless UI' />
          <BorderBox value='React Context' />
          <BorderBox value='Redux' />
          <BorderBox value='PWA' />
          <BorderBox value='RESTful API' />
          <BorderBox value='Axios' />
          <BorderBox value='Docker' />
          <BorderBox value='Routing' />
          <BorderBox value='Styled-components' />
          <BorderBox value='React Hook Form' />
          <BorderBox value='Formik (Yup)' />
          <BorderBox value='Git (Github Action)' />
          <BorderBox value='Figma' />
          <BorderBox value='Aglile Methodologie' />
          <BorderBox value='Trello' />
        </div>
        <div className='text-center mx-auto max-w-[90%] mt-16 animate__animated animate__fadeInDown animate__slowe'>
          <a
            className='bg-lime-600 hover:bg-lime-800 transition rounded-md p-5 py-2'
            href='./assets/cv/Abolfazl-Zarei-f-last-kh03.pdf'
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
