import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import Button from '../elements/Button'
import { useEffect, useState } from 'react'
import { HashLoader } from 'react-spinners'

const Home = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <HashLoader color={'#6b46c1'} loading={loading} size={130} />
      ) : (
        <div
          className={styles.landing_wrapper}
          style={{ backgroundImage: 'url(/images/bg-desktop.svg' }}
        >
          <div className={styles.landing_container}>
            <div className={styles.img_wrapper}>
              <img src='./images/illustration-mockups.svg' alt='background' />
            </div>
            <div className={styles.landing_content}>
              <h1 className='font-semibold'>
                Track all your employees progress and statistics.
              </h1>
              <p>
                Knock re-imagines the way we build a better workforce for your
                organization. Our customized dashboard gives various statistics
                of your employees and departments, So you can keep track of
                eveything.
              </p>
              <Link to='/list'>
                <Button>
                  <p className='font-bold'>Get Started</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
