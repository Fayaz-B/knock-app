const Button = ({ children }) => {
  // CTA Button for HomePage
  return (
    <button className='bg-white hover:bg-pink-500 hover:text-white text-purple-700 font-medium py-2 px-6 rounded-full  w-40'>
      {children}
    </button>
  )
}

export default Button
