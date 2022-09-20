import { Link } from "react-router-dom";

export default function NavMenuComponent(){
    return (
        <>
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5"> 
                    <Link className="navbar-brand" to={'/'}>React Blog</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"> 
                                <Link to={'/'} className="nav-link px-lg-3 py-3 py-lg-4">Home</Link>
                            </li>
                            <li className="nav-item"> 
                                <Link to={'/about'} className="nav-link px-lg-3 py-3 py-lg-4">About</Link> 
                            </li>
                            <li className="nav-item"> 
                                <Link to={'/sample-post'} className="nav-link px-lg-3 py-3 py-lg-4">Sample Post</Link>
                            </li>
                            <li className="nav-item"> 
                                <Link to={'/contact'} className="nav-link px-lg-3 py-3 py-lg-4">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}