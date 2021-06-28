const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-white p-2 flex justify-center shadow-md'>
      <h1 className='text-purple-700 font-bold'>
        Copyright Knock &copy; {year}
      </h1>
    </div>
  )
}

export default Footer
