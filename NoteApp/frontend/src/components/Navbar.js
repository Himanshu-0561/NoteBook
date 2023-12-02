import React from 'react'
import {
    Link,
    useLocation,
    useNavigate
} from "react-router-dom";

const Navbar = () => {
    let location = useLocation();
    let Navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        Navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-clr" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand nav-txt-col text-sel" to="/">iNotePad</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`text-sel nav-link ${location.pathname === '/' ? "active" : ""} nav-txt-col`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`text-sel nav-link ${location.pathname === '/about' ? "active" : ""} nav-txt-col`} to="/about">About</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ?
                        <form className="d-flex" role="search">
                            <Link className="btn btn-primary mx-1 text-sel" to='/login' role="button">LogIn</Link>
                            <Link className="btn btn-primary mx-1 text-sel" to='/signup' role="button">SignUp</Link>
                        </form> : <button onClick={handleLogout} className='btn btn-primary text-sel'>Logout</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar