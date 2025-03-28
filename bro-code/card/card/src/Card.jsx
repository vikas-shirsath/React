import profilePic from './assets/p1.png'



function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Vikas</h2>
            <p className='card-text'>IT B.tech</p>
            <p className='card-text'>code and sleep</p>
        </div>
    );
    
}


export default Card