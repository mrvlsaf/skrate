import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../Firebase/firebase';
import logo from "../../data/logo.png";
import curve from "../../data/right-container-top-curve.png"
import cartoon from "../../data/signin-cartoon.png"
import './SignIn.css'

const SignIn = () => {

    const SignInWithFirebase = () => {
        var provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <div className="main-container">
                <div className='left-container'>
                    <div>
                        <img src={logo} alt="skrate-logo" />
                    </div>
                    <div className="text-button-container">
                        <div className="welcome-back-text">Welcome Back to Skrate!!</div>
                        <div className="sign-in-button" onClick={SignInWithFirebase}>Sign in With Google</div>
                    </div>
                </div>
                <div className="right-container">
                    <img className="curve-image" src={curve} alt="curve" />
                    <img className="cartoon-image" src={cartoon} alt="cartoon" />
                </div>
            </div>
        </>
    );
}

export default SignIn