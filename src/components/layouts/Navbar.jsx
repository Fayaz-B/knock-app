import { useState } from 'react'
import NavItem from '../elements/NavItem'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { XIcon, MenuIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className='navbar shadow-md'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Knock
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            {click ? (
              <XIcon className='h-8 w-8 text-purple-700 hover:text-pink-500' />
            ) : (
              <MenuIcon className='h-8 w-8 text-purple-700 hover:text-pink-500' />
            )}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <NavItem onClickClose={closeMobileMenu} toLink='/list'>
              Employees
            </NavItem>
            <NavItem onClickClose={closeMobileMenu} toLink='/survey'>
              Survey
            </NavItem>
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
