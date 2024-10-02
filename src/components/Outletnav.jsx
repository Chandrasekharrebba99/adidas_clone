import TurnLeftIcon from '@mui/icons-material/TurnLeft';
const OutletNav = ()=>{
    return(
        <div>
            <div className='outlet-home-nav'>
                <TurnLeftIcon/>
                <span className='back'>Back</span>
                <span className='home'>Home</span>
                <span>/</span>
                <span className='outlet'>Outlet</span>
            </div>
        </div>
    )
}

export default OutletNav