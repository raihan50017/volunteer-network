import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';
import VolunteerActivity from '../VolunteerActivity/VolunteerActivity';

const Home = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() =>{
        fetch('https://infinite-bastion-86502.herokuapp.com/all-activities')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
   
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="mt-5">
                    <h2 className="text-center text-uppercase">i grow by helping people in need</h2>
                    <nav className="navbar navbar-light">
                        <form className="form-inline m-auto">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text btn btn-primary" id="basic-addon1">Search</span>
                                </div>
                                <input type="text" className="form-control" placeholder="search..." name="" id="" />
                            </div>
                        </form>
                    </nav>
                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-4 mt-5">
                        {
                            activities.map(activity => <VolunteerActivity key={activity._id} activity={activity}></VolunteerActivity>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;