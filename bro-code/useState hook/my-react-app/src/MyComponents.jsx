import React, {useState} from 'react';

function MyComponents () {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(50);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    }

    const updateAge = () => {
        setAge(20); 
    }

    const updateEmployement = () =>  {
        setIsEmployed(!isEmployed);
    }

    return (
        <>
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
                <p>Age: {age}</p>
                <button onClick={updateAge}>Set Age</button>
                <p>Employment: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={updateEmployement}>Change Employment</button>
            </div>
        </>
    );
}

export default MyComponents