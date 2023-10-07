import { useContext } from 'react';
import { AppContext } from '../App17';

// Props becomes eliminated
export const Home = () => {
    const { username } = useContext(AppContext)
    return <h1>THIS IS THE HOMEPAGE AND USER IS: {username}</h1>;
}