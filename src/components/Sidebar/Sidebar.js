import './Sidebar.css';
import home from "../../data/home-sidebar.png";
import shuffle from "../../data/shuffle-sidebar.png";
import { useState } from 'react';

const Sidebar = () => {

    const [activeClass, setActiveClass] = useState("");

    const setActive = (event) => {
        setActiveClass(event.target.id)
    }

    return (
        <>
            <div className='sidebar'>
                <div className={activeClass==="1" ? "active" : undefined} id={"1"} onClick={setActive}>
                    <img src={home} alt="home-image" />
                    <span>Home</span>
                </div>
                <div className={activeClass==="2" ? "active" : undefined} id={"2"} onClick={setActive}>
                    <img src={shuffle} alt="home-image" />
                    <span>Shuffle</span>
                </div>
            </div>
        </>
    );
}

export default Sidebar