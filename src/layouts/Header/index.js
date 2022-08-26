import Brand from "../../Components/Brand"
import Navbar from "../../Components/Navbar"
import './Header.scss'

const Header = () => {
    return (
        <div className="container">
            <div className="row header-stl">
                <Brand/>
                <div className="ctn-navbar">
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}

export default Header