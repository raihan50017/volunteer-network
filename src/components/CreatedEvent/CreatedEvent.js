import React from 'react';
import { useContext } from 'react';
import { eventContext } from '../RegisterVolunteer/RegisterVolunteer';

const CreatedEvent = (props) => {
    const { eventTitle, eventDate, eventPhoto, _id } = props.singleEvent;
    const [events, setEvents] = useContext(eventContext);

    const handleDelete = (id) => {
        fetch(`https://infinite-bastion-86502.herokuapp.com/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const newEvents = events.filter(item => item._id !== id);
                    setEvents(newEvents);
                }
            })
    }

    return (
        <div className="col mb-4">
            <div className="card">
                <img src={eventPhoto} class="card-img-top" alt="Card"></img>
                <div className="card-body">
                    <h5 className="card-title">{eventTitle}</h5>
                    <p>{eventDate}</p>
                    <button onClick={() => handleDelete(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CreatedEvent;