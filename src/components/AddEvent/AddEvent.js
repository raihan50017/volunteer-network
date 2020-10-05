import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddEvent = () => {

    const [newEvent, setNewEvent] = useState({
        title:"",
        imgURL: "https://iili.io/2W74Eb.png"
    })


    const handleBlur = (e) =>{
        const name = e.target.name;
        const newItem = {...newEvent};
        newItem[name] = e.target.value;
        setNewEvent(newItem);
    }

    const handleAddEvent = (e) =>{
        fetch('https://infinite-bastion-86502.herokuapp.com/add-event',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        e.preventDefault();
    }

    return (
        <div>
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <h4>Add Event</h4>
            <form onSubmit={handleAddEvent}>
                <div className="row mb-5">
                    <div className="col">
                        <input onBlur={handleBlur} className="form-control" placeholder="Event title" type="text" name="title" id="title" required />
                    </div>
                    <div className="col">
                        <input className="form-control" type="date" name="eventDate" id="eventDate" />
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col">
                        <input className="form-control" placeholder="Event description" type="text" name="description" id="title" />
                    </div>
                    <div className="col">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">Button</button>
                            </div>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" name="" />
                                <label className="custom-file-label" htmlFor="inputGroupFile03">Choose file</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddEvent;