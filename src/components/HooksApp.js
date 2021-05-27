import React, {useState, useEffect} from 'react'; 
import Clock from './Clock';
import getSeason from '../utils/getSeason'
const App = () => {
    const [date, setDate] = useState(new Date());
    const [latitude, setLatitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    function tick() {
        setDate(new Date());
    }; 
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    }, []);
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition((position)=> {
            setLatitude(position.coords.latitude);
        }, 
        (err) => {
            setErrorMessage(err.message);
        })
    }, [])

    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            <Clock date={date} season={getSeason(latitude, date)} />
        </div>
    )    
}

export default App;