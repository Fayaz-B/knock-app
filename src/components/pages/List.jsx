import EmployeeCard from '../elements/EmployeeCard'
import data from '../../assets/data.json'
import Tag from '../elements/Tag'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'
import { MinusCircleIcon, XCircleIcon } from '@heroicons/react/solid'

const List = () => {
  const [list, setList] = useState([])
  const [filters, setFilters] = useState([])
  const [loading, setLoading] = useState(true)

  //Data is loaded from the backend
  useEffect(() => {
      setList(data)
    setLoading(false)
  }, [])

  //Function to filter the tag that has been clicked
  const filterFunc = ({ tags }) => {
    if (filters.length === 0) {
      return true
    }

    return tags.some((tag) => filters.includes(tag))
  }

  //New Array for filerting the data
  const filteredTags = list.filter(filterFunc)

  //Function passed down to child component
  const handleTagClick = (tag) => {
    //avoid re-adding the tag
    if (filters.includes(tag)) {
      return
    }
    setFilters([...filters, tag])
  }

  //Removes the filter tag from the selected filter array
  const handleFilterClick = (passedFilter) => {
    setFilters(filters.filter((f) => f !== passedFilter))
  }

  //Clears the selected filter array
  const clearFilter = () => {
    setFilters([])
  }

  return (
    <div className='container-wrapper'>
      {loading ? (
        <HashLoader color={'#6b46c1'} loading={loading} size={130} />
      ) : (
        <div className='max-w-7xl w-full self-start'>
          {filters.length > 0 && (
            <div className='flex bg-white shadow-lg mx-4 my-8 p-3 items-center rounded'>
              <div className='flex flex-grow flex-wrap items-center mr-2 border-r border-solid border-gray-200'>
                {filters.map((filter, index) => (
                  <Tag
                    marginClass='my-2'
                    key={index}
                    onClickHandler={() => handleFilterClick(filter)}
                  >
                    {filter} <MinusCircleIcon className='h-4 w-4 ml-1' />
                  </Tag>
                ))}
              </div>
              <div className='ml-auto '>
                <button
                  onClick={clearFilter}
                  className='cursor-pointer bg-red-600 font-bold  text-white rounded-full text-xs  my-2'
                >
                  <XCircleIcon className='h-5 w-5' />
                </button>
              </div>
            </div>
          )}
          {filteredTags.map((employee) => (
            <EmployeeCard
              employee={employee}
              key={employee.id}
              handleTagClick={handleTagClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default List
