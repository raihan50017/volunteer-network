import React, { useState } from 'react';
import GroupLogo from '../../asset/logos/GroupLogo.png';
import plus from '../../asset/logos/plus.png';
import users from '../../asset/logos/users.png';
import AddEvent from '../AddEvent/AddEvent';
import VolunteerList from '../VolunteerList/VolunteerList';

const Dashbord = () => {

    const [alternativeShow, setAlternativeShow] = useState(false)

    return (
        <div className="row p-5">
            <div className="col-md-3">
                <div>
                    <img height="60px" src={GroupLogo} alt="LOGO"></img>
                </div>
                <div className="mt-5">
                    <p onClick={()=>setAlternativeShow(false)} className="text-primary" style={{cursor:'pointer'}}><img height="20px" src={users} alt="ICON"></img>Volunter register list</p>
                    <p onClick={()=>setAlternativeShow(true)} className="text-primary" style={{cursor:'pointer'}}><img height="20px" src={plus} alt="ICON"></img>Add event</p>
                </div>
            </div>
            <div className="col-md-9 bg-light">
                {
                    alternativeShow ? <AddEvent></AddEvent> : <VolunteerList></VolunteerList>
                }
            </div>
        </div>
    );
};

export default Dashbord;