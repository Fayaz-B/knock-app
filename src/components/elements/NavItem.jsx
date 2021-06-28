import { Link } from 'react-router-dom'

const NavItem = ({ children, toLink, onClickClose }) => {
  return (
    <li className='nav-item'>
      <Link to={toLink} className='nav-links' onClick={onClickClose}>
        {children}
      </Link>
    </li>
  )
}

export default NavItem
