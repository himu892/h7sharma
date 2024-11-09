function NavHeader () {
    return (
        <>
        <div className="w-full flex justify-center z-50">
            <div className="w-5/6 flex">
                <div className="w-1/2">
                <div className="webLogo">
                    <img src="./src/assets/img/web-logo.png" alt="" className="logoimage" width="100%" height="100%" />
                </div>
                </div>
                <div className="w-1/2 nav-container">
                <ul className="navItems flex justify-between p-4">
                    <li className="navItem"><a href="#" className="navLink">Home</a></li>
                    <li className="navItem"><a href="#" className="navLink">Skills</a></li>
                    <li className="navItem"><a href="#" className="navLink">Experince</a></li>
                    <li className="navItem"><a href="/resume" className="navLink">Resume</a></li>
                    <li className="navItem"><a href="#" className="navLink">Contact</a></li>
                    <li className="navItem"><a href="#" className="navLink">About Us</a></li>
                </ul>
                </div> 
            </div>
        </div>
        </>
    )
}

export default NavHeader;