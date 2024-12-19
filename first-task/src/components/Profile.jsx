const Profile= () => {
    return (
        <>
        <ProfileCard
          name="Bhawna"
          age={22}
          greetings={
            <div>
                <strong>Hi Bhawna, Have a good day!</strong>
            </div>
          }
          >
            <p>Hobbies: Drawing, Cooking</p>
            <button>Contact</button>

        </ProfileCard>
        <ProfileCard
          name="Davity"
          age={24}
          greetings={
            <div>
                <strong>Hi Davity, Have a wonderful day!</strong>
            </div>
          }
          >
            <p>Hobbies: Drawing, Reading</p>
            <button>Contact</button>

        </ProfileCard>
        </>
          
    )

}

export default Profile;

function ProfileCard({name,age, greetings, children}){
    // const {name, age, greetings, children} = props;
    return(
        <>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <p>{greetings}</p>
        <div>{children}</div>
        {/* <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>{props.greetings}</p>
        <div>{props.children}</div> */}
        </>
    )
}