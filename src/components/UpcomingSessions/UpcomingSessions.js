import './UpcomingSessions.css';
import upcoming_img from "../../data/upcoming-image.png";
import upcoming_next from "../../data/upcoming-arrow.png";

const UpcomingSessions = (props) => {

    const data = props.session

    return (
        <>
            <div className='upcoming-cont'>
                <div className='home-heading'>Upcoming Sessions</div>
                <div>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className='upcoming-card'>
                                    <img src={upcoming_img} alt="image" />
                                    <div>
                                        <span className='f500'>{item.mentor_name}</span>
                                        <span>Flutter</span>
                                    </div>
                                    <div className='incenter'>
                                        <span className='f500'>{item.timings}</span>
                                        <span>{item.date}</span>
                                    </div>
                                    <div className={item.session_type}>{item.session_type}</div>
                                    <img src={upcoming_next} alt="image" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    );
}

export default UpcomingSessions