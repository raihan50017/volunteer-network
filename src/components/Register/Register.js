import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';
import GroupLogo from '../../asset/logos/GroupLogo.png';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();

    const handleSubmit = (e) =>{

            fetch('https://infinite-bastion-86502.herokuapp.com/user-registration', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loggedInUser)
            })
            .then(res => res.json())
            .then(data => console.log(data))

        history.push('/volunteer');
        e.preventDefault();
    }
    const handleBlur = (e) =>{
        const newLoggedInUser = {...loggedInUser};
        const name = e.target.name;
        newLoggedInUser[name] = e.target.value;
        setLoggedInUser(newLoggedInUser);
    }
    return (
        <div>
            <div className="text-center m-5">
                <img height="60px" src={GroupLogo} alt="LOGO"></img>
            </div>
            <div className="card mx-auto p-5" style={{ width: '30rem' }}>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input value={loggedInUser.name} className="form-control" type="text" name="name" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input className="form-control" value={loggedInUser.email} type="email" name="email" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input onBlur={handleBlur} className="form-control" type="date" name="eventDate" id="date" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input onBlur={handleBlur} className="form-control" type="text" name="eventDescription" id="description"/>
                    </div>
                    <p>{loggedInUser.eventTitle}</p>
                   <button type="submit" className="btn btn-success btn-block">Register now</button>
                </form>
            </div>
        </div>
    );
};

export default Register;