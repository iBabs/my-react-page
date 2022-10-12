const NavBar = () => {
    return ( 
            <nav className="navBar">
                <h2>
                    The Cake Store
                </h2>
                <div className="links">
                    <ul>
                        <li> <a href="/">Home</a> </li>
                        <li> <a href="/">Order</a> </li>
                        <li> <a href="/">Collections</a> </li>
                    </ul>
                    <button className="us">Contact Us</button>
                </div>
            </nav>


        );
}
 
export default NavBar;