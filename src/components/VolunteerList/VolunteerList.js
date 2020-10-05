import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import trush from '../../asset/logos/trush.png';

const VolunteerList = () => {

    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        fetch('https://infinite-bastion-86502.herokuapp.com/all-registration')
            .then(res => res.json())
            .then(data => setVolunteers(data))
    }, [])

    const handleDeleteList = (id) =>{
        fetch(`https://infinite-bastion-86502.herokuapp.com/events/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                const newVolunteers = volunteers.filter(item => item._id !== id);
                setVolunteers(newVolunteers);
            }
        })
    }

    return (
        <div>
             <Link to="/" className="btn btn-primary">Go Home</Link>
            <h4>Volunteer list</h4>
            <div>
                <table className="table">
                    <thead>
                        <tr><th>Name</th><th>Email id</th><th>Registration Date</th><th>Volunteer List</th><th>Action</th></tr>
                    </thead>
                    <tbody>
                        {
                            volunteers.map(item => {
                                return <tr key={item._id}><td>{item.name}</td><td>{item.email}</td><td>{item.eventDate}</td><td>{item.eventTitle}</td><td><img src={trush} onClick={() => handleDeleteList(item._id)} className="bg-danger rounded" style={{cursor:'pointer'}} height="24px" alt="Action"></img></td></tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default VolunteerList;