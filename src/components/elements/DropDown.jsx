import { useState } from 'react'
import DropDownItem from './DropDownItem'
import { ChevronDownIcon } from '@heroicons/react/solid'

const DropDown = ({ meeting }) => {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState('')

  // Handler to set the meeting time and close menu
  const handleMeetingClick = (time) => {
    setTime(time)
    setOpen(!open)
  }

  // Handler to open and close the menu
  const menuClickHandler = () => setOpen(!open)

  return (
    <>
      <button
        className='flex bg-purple-700 text-white py-1 px-2 text-xs my-2 w-40 rounded-sm font-bold lg:my-0 lg:ml-1'
        href='#'
        onClick={menuClickHandler}
      >
        {time ? 'Re-schedule Meeting' : 'Schedule Meeting'}{' '}
        <ChevronDownIcon className='h-4 w-4 mx-auto' />
      </button>

      {open && (
        <div className='flex flex-col max-w-min bg-white mb-3 p-1 rounded-lg shadow-md lg:absolute'>
          {meeting.map((time, index) => (
            <DropDownItem key={index} handleMeetingClick={handleMeetingClick}>
              {time}
            </DropDownItem>
          ))}
        </div>
      )}
      {time && (
        <p className='text-pink-500 text-sm font-bold uppercase lg:ml-1 mt-1 lg:mt-3'>
          Meeting @ {time}
        </p>
      )}
    </>
  )
}

export default DropDown
