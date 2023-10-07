import { useContext } from 'react';
import { AppContext } from '../App17';
import { ChangeProfile } from '../components/ChangeProfile';

export const Profile = () => {
    const { username, setUsername } = useContext(AppContext)

    return ( 
        <div> 
            {" "}
            PROFILE, user is: {username}
            <ChangeProfile setUsername={setUsername}/>
        </div> 
    );
};
