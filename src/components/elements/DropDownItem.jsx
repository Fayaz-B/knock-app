const DropDownItem = ({ children, handleMeetingClick }) => {
  // Handler to pass the callback to parent
  const onClickHandler = () => handleMeetingClick(children)

  return (
    <button
      className='bg-purple-100 text-purple-700 font-bold w-40 p-2 rounded-sm my-0.5 text-xs lg:ml-auto'
      href='#'
      onClick={onClickHandler}
    >
      {children}
    </button>
  )
}

export default DropDownItem
