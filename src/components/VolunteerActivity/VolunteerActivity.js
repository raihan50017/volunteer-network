import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../App';

const VolunteerActivity = (props) => {
    const { imgURL, title, _id } = props.activity;
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const handleActivity = () => {
        const newLoggedInUser = { ...loggedInUser };
        newLoggedInUser.eventTitle = title;
        newLoggedInUser.id = _id;
        newLoggedInUser.eventPhoto = imgURL;
        setLoggedInUser(newLoggedInUser);
        history.push('/register');
    }

    return (
        <div className="col mb-4">
            <div onClick={handleActivity}>
                <div className="card">
                    <img className="card-img-top" src={imgURL} alt="CARD"></img>
                    <div className="card-body bg-primary">
                        <div className="card-title text-center text-light">{title}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerActivity;