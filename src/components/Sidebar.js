import './Home.css';
import home from "../data/home-sidebar.png";
import shuffle from "../data/shuffle-sidebar.png";

const Sidebar = () => {
    return (
        <>
            <div className='sidebar'>
                <div className='active'>
                    <img src={home} alt="home-image" />
                    <span>Home</span>
                </div>
                <div>
                    <img src={shuffle} alt="home-image" />
                    <span>Shuffle</span>
                </div>
            </div>
        </>
    );
}

export default Sidebar