import DropDown from './DropDown'
import Tag from '../elements/Tag'
import { PlusCircleIcon } from '@heroicons/react/solid'

const EmployeeCard = ({
  employee: {
    id,
    name,
    logo,
    isNew,
    position,
    role,
    level,
    contract,
    location,
    meeting,
    tags,
  },
  handleTagClick,
}) => {
  return (
    <div
      className={`flex flex-col bg-white shadow-xl mx-4 mt-20 mb-12 p-6 rounded ${
        isNew && 'border-l-4 border-purple-700 border-solid'
      } lg:flex-row lg:my-14 `}
    >
      <div>
        <img
          className='h-24 w-24 -mt-20 mb-4 lg:mt-0  lg:mb-0 lg:h-24 lg:w-24'
          src={`${logo}`}
          alt=''
        />
      </div>

      <div className='flex flex-col justify-between lg:ml-4 lg:w-56'>
        <h2 className='font-bold text-md text-purple-700'>
          {position}

          {isNew && (
            <span className='bg-purple-700 text-white py-1 px-2 text-xs m-2 rounded-sm uppercase'>
              New
            </span>
          )}
        </h2>
        <h3 className='font-bold text-xl my-2'>{name}</h3>
        <p className='text-gray-500 text-sm'>
          {contract} &middot; {location}
        </p>
      </div>

      <div>
        <DropDown meeting={meeting} />
      </div>

      <div className='flex flex-wrap items-center mt-4 pt-4 border-t border-solid border-gray-200 lg:border-t-0 lg:ml-auto lg:items-end'>
        {tags
          ? tags.map((tag, index) => (
              <Tag
                marginClass='mt-3 lg:mt-0'
                key={index}
                onClickHandler={() => handleTagClick(tag)}
              >
                {tag} <PlusCircleIcon className='h-4 w-4 ml-1' />
              </Tag>
            ))
          : ''}
      </div>
    </div>
  )
}

export default EmployeeCard
