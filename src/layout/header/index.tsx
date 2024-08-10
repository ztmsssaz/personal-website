function Header() {
  return (
    <header className='z-10 py-2 opacity-85 fixed w-full top-0 right-0 font-bold bg-white text-slate-950 dark:text-white dark:bg-black'>
      <div className='flex justify-center'>
        <div className='w-[10%]'>
          <img className='mx-auto' src='./logo192.png' width='50px' />
        </div>
        <ul className='w-[90%] flex justify-center'>
          <li className='p-5'>Home</li>
          <li className='p-5'>About</li>
          <li className='p-5'>Skills</li>
          <li className='p-5'>Experiences</li>
          <li className='p-5'>Portfolio</li>
          <li className='p-5'>Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
