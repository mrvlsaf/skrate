import './NewJobs.css';
import upcoming_img from "../../data/upcoming-image.png";
import upcoming_next from "../../data/upcoming-arrow.png";

const NewJobs = (props) => {

    const data = props.jobs;

    return (
        <>
            <div className='third-container'>
                <div className='home-heading'>New Jobs</div>
                <div className='job-item-cont'>
                    {
                        data.map((item, index) => {
                            return (
                                <div className='job-card'>
                                    <img src={upcoming_img} alt="image" />
                                    <div>
                                        <span className='f500'>{item.role}</span>
                                        <span>{item.organization_name}</span>
                                        <span>{item.location}</span>
                                    </div>
                                    <span>{item.date_posted}</span>
                                    <img src={upcoming_next} alt="image" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default NewJobs