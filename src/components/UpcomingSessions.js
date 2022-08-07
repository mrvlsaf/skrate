import './Home.css';
import upcoming_img from "../data/upcoming-image.png";
import upcoming_next from "../data/upcoming-arrow.png";

const UpcomingSessions = (props) => {

    const sessions = props.session.map((item, index) => {
        <div key={index} className='upcoming-card'>
            <img src={upcoming_img} alt="image" />
            <div>
                <span className='f500'>{item.mentor_name}</span>
                <span>Flutter</span>
            </div>
            <div>
                <span className='f500'>{item.timings}</span>
                <span>{item.date}</span>
            </div>
            <div>{item.session_type}</div>
            <img src={upcoming_next} alt="image" />
        </div>
    })

    return (
        <>
            <div className='upcoming-cont'>
                <div className='home-heading'>Upcoming Sessions</div>
                <div className='upcoming-item-cont'>

                    <div className='upcoming-card'>
                        {sessions}
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpcomingSessions