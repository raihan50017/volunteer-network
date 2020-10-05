import React from 'react';
import GroupLogo from '../../asset/logos/GroupLogo.png';
import google from '../../asset/logos/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { handleGoogleSignIn, initializeLoginFramework } from './loginManager';
import { useContext } from 'react';
import { userContext } from './../../App';
initializeLoginFramework();

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const signInWithGoogle = () =>{
        handleGoogleSignIn()
        .then(result =>{
            const newLoggedInUser = {...loggedInUser};
            newLoggedInUser.email = result.email;
            newLoggedInUser.name = result.name;
            newLoggedInUser.photoURL = result.photoURL;
            setLoggedInUser(newLoggedInUser);
            history.replace(from)
        } )
    }

    return (
        <div>
            <div className="text-center m-5">
            <img height="60px" src={GroupLogo} alt="LOGO"></img>
            </div>
            <div style={{width: '28rem', paddingLeft:'20px', paddingRight:'20px', paddingTop:'120px', paddingBottom:'120px'}} className="card mx-auto text-center"
            >
                <div>
                    <h4 className="mb-5">Login With</h4>
                    <button onClick={signInWithGoogle} style={{borderRadius: '50px'}} className="btn btn-secondary btn-block text-left"> <img style={{marginRight: '85px'}} height="30px" src={google} alt="GOOGLE"></img><span>Continue with google</span></button>
                    <p>Don't have account? <Link to="/">create account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;