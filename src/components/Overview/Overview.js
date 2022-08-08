import './Overview.css'

const Overview = (props) => {
    return (
        <>
            <div className='overview-cont'>
                <div className='home-heading'>Overview</div>
                <div className='overview-item-cont'>
                    <div>Profile Views<span>{props.stats.profile_views}</span></div>
                    <div>Mentorship Sessions<span>{props.stats.mentorship_sessions}</span></div>
                    <div>Jobs Applied<span>{props.stats.jobs_applied}</span></div>
                    <div>Skills Verified<span>{props.stats.skills_verified}</span></div>
                </div>
            </div>
        </>
    );
}

export default Overview