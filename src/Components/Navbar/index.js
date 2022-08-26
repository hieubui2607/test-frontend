import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import './Navbar.scss'

const Navbar = () => {
    return (
        <ul className="navbar-header">
            <li className='navbar-header_link'>Home</li>
            <li className='navbar-header_link'>Product</li>
            <li className='navbar-header_link'>Pricing</li>
            <li className='navbar-header_link'>Contact</li>
            <li className='navbar-header_link pl-2'><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
            <li className='navbar-header_link'><FontAwesomeIcon icon={faCartShopping} /></li>
            <li className='navbar-header_link pl-10'><FontAwesomeIcon icon={faBars} /></li>
        </ul>
    )
}

export default Navbar