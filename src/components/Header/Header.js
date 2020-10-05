import React from 'react';
import { Link } from 'react-router-dom';
import GroupLogo from '../../asset/logos/GroupLogo.png';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand m-2" to="/"><img src={GroupLogo} alt="LOGO" height="50"></img></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-link m-2 active" to="/">Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-link m-2" to="/">Donation</Link>
                        <Link className="nav-link m-2" to="/">Events</Link>
                        <Link className="nav-link m-2" to="/">Blog</Link>
                        <Link className="nav-link btn btn-primary text-light m-2" to="/">Register</Link>
                        <Link className="nav-link btn btn-secondary text-light m-2" to="/dashbord">Admin</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;