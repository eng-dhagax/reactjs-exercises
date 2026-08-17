const UserCard = ( {CurrentName, CurrentEmail} ) => {
    return (
        <div>
            <h1>Name: {CurrentName} </h1>
            <h4>Email: {CurrentEmail} </h4>
        </div>
    )
}

export default UserCard;