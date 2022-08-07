import './Home.css';
import upcoming_img from "../data/upcoming-image.png";
import upcoming_next from "../data/upcoming-arrow.png";

const NewJobs = () => {
    return (
        <>
            <div className='third-container'>
                <div className='home-heading'>New Jobs</div>
                <div className='job-item-cont'>
                    <div className='job-card'>
                        <img src={upcoming_img} alt="image" />
                        <div>
                            <span className='f500'>Flutter Developer</span>
                            <span>Google</span>
                            <span>Remote</span>
                        </div>
                        <span>2 Hrs Ago</span>
                        <img src={upcoming_next} alt="image" />
                    </div>
                    <div className='job-card'>
                        <img src={upcoming_img} alt="image" />
                        <div>
                            <span className='f500'>Flutter Developer</span>
                            <span>Google</span>
                            <span>Remote</span>
                        </div>
                        <span>2 Hrs Ago</span>
                        <img src={upcoming_next} alt="image" />
                    </div>
                    <div className='job-card'>
                        <img src={upcoming_img} alt="image" />
                        <div>
                            <span className='f500'>Flutter Developer</span>
                            <span>Google</span>
                            <span>Remote</span>
                        </div>
                        <span>2 Hrs Ago</span>
                        <img src={upcoming_next} alt="image" />
                    </div>
                    <div className='job-card'>
                        <img src={upcoming_img} alt="image" />
                        <div>
                            <span className='f500'>Flutter Developer</span>
                            <span>Google</span>
                            <span>Remote</span>
                        </div>
                        <span>2 Hrs Ago</span>
                        <img src={upcoming_next} alt="image" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewJobs