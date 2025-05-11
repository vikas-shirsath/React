
function ProfilePicture() {

    const imageUrl = 'https://lh3.googleusercontent.com/a/ACg8ocKe8o47zjg0T96PHDWKIZov70J9VO1qCFOwZZb5ThxMMyGoOACA=s360-c-no';
    
    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);

}

export default ProfilePicture