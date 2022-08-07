import { auth } from './Firebase/firebase';
import './Home.css';
import logo from "../data/logo.png";
import profile from "../data/profile-image.png";

const Navbar = (props) => {

    const signOut = () => {
        auth.signOut();
    }

    return (
        <>
            <div className='navbar'>
                <div className='logo-cont'><img src={logo} alt="logo" /></div>
                <div className='profile-cont'>
                    <button onClick={signOut}>Sign out</button>
                    <img src={profile} alt="profile pic" />
                    <span>{props.name}</span>
                </div>
            </div>
        </>
    );
}

export default Navbar