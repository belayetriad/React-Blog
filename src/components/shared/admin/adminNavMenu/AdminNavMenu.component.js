import { Link, useNavigate } from "react-router-dom";
import './AdminNavMenu.style.css';
export default function AdminNavMenuComponent(){
    const navigate = useNavigate();
    const logout = ()=> {
        localStorage.removeItem('token');
        navigate('/login')
    }
    return (
        <>
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5"> 
                    <Link className="navbar-brand" to={'/admin/home'}>React Blog</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"> 
                                <Link to={'/admin/home'} className="nav-link px-lg-3 py-3 py-lg-4">Home</Link>
                            </li>
                            <li className="nav-item"> 
                                <Link to={'/admin/post'} className="nav-link px-lg-3 py-3 py-lg-4">Posts</Link> 
                            </li>
                            <li className="nav-item"> 
                                <Link to={'/admin/user'} className="nav-link px-lg-3 py-3 py-lg-4">Users</Link>
                            </li>
                            <li className="nav-item"> 
                                <button type="button" onClick={()=> {logout()}}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}