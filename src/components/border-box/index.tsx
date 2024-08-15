function BorderBox({value}: any) {
  return (
    <div className='border border-lime-500 hover:bg-lime-600 hover:text-white cursor-default rounded px-2 py-1 my-2 mx-1'>
      {value}
    </div>
  )
}

export default BorderBox
