const Tag = ({ onClickHandler, children, marginClass }) => {
  return (
    <span
      onClick={onClickHandler}
      className={`flex  bg-purple-100 text-purple-700 mr-2 ${marginClass} p-2 rounded font-bold text-xs lg:ml-2 cursor-pointer`}
    >
      {children}
    </span>
  )
}

export default Tag
