import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import GroupLogo from '../../asset/logos/GroupLogo.png';
import CreatedEvent from '../CreatedEvent/CreatedEvent';

export const eventContext = createContext();
const RegisterVolunteer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch(`https://infinite-bastion-86502.herokuapp.com/events/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [loggedInUser.email])

    return (
        <div>
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
                            <Link className="nav-link m-2" to="/"> <img className="rounded-circle" height="30px" src={loggedInUser.photoURL} alt="PERSON"></img><b>{loggedInUser.name}</b></Link>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <eventContext.Provider value={[events, setEvents]}>
                        <div className="row row-cols-1 row-cols-md-4">
                            {
                                events.map(singleEvent => <CreatedEvent singleEvent={singleEvent} key={singleEvent._id}></CreatedEvent>)
                            }
                        </div>
                    </eventContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default RegisterVolunteer;