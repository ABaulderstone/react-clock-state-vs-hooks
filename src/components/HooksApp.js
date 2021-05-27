import React, {useState, useEffect} from 'react'; 
import Clock from './Clock';
import getSeason from '../utils/getSeason'
import timeZones from '../utils/timeZones'
const App = () => {
    const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [date, setDate] = useState(new Date().toLocaleString('EN-US', {timeZone}));
    const [latitude, setLatitude] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    
    
    useEffect(() => {
        function tick() {
            setDate(new Date().toLocaleString('EN-US', {timeZone}));
        };
        tick();
        console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    }, [timeZone]);
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
            <h1>{timeZone}</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <Clock date={date} season={getSeason(latitude, date)} />
            <br />
            <p>{date.split(" ")[1]}</p>
            <select onChange={(e) => setTimeZone(e.target.value)}>
                {timeZones.map((zone, index) => {
                    return <option key={index}>{zone}</option>
                })}
            </select>
        </div>
    )    
}

export default App;