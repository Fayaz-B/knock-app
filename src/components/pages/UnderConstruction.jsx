import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

const UnderConstruction = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <div className='container-wrapper'>
      {loading ? (
        <HashLoader color={'#6b46c1'} loading={loading} size={130} />
      ) : (
        <div className='flex flex-col items-center'>
          <img
            className='max-w-xl w-full rounded'
            src='./images/under-construction.png'
            alt='Not found'
          />
          <h1 className='mt-4 text-3xl text-purple-700 '>Page Under Construction</h1>
        </div>
      )}
    </div>
  )
      }

export default UnderConstruction
