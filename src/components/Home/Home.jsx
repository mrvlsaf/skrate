import './Home.css';
import Overview from '../Overview/Overview';
import UpcomingSessions from '../UpcomingSessions/UpcomingSessions';
import NewJobs from '../NewJobs/NewJobs';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

const Home = (props) => {

    return (
        <>
            <div className='main-home-container'>
                <Navbar name={props.data.full_name} />
                <div className='main-wrapper'>
                    <Sidebar />
                    <div className='second-container'>
                        <Overview stats={props.data.dashboard_stats} />
                        <UpcomingSessions session={props.data.upcoming_sessions} />
                    </div>
                    <NewJobs jobs={props.data.job_postings} />
                </div>
            </div>
        </>
    );
}

export default Home