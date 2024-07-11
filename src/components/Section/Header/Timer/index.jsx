import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [targetDate, setTargetDate] = useState(new Date('2024-12-10T10:00:00')); // Target date and time

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
    }, []);

    const getTimeRemaining = () => {
        const totalTime = targetDate - currentTime;
        const seconds = Math.floor((totalTime / 1000) % 60);
        const minutes = Math.floor((totalTime / (1000 * 60)) % 60);
        const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
        const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

        return {
            days,
            hours,
            minutes,
            seconds,
        };
    };

    const { days, hours, minutes, seconds } = getTimeRemaining();

    return (
        <>
            <div>
                <h6>Days</h6>
                <div className="time">
                    {days > 0 && <span>{days}</span>}
                    <p>:</p>
                </div>
            </div>
            <div>
                <h6>Hours</h6>
                <div className="time">
                    {hours > 0 && <span>{hours.toString().padStart(2, '0')}</span>}
                    <p>:</p>
                </div>
            </div>
            <div>
                <h6>Minutes</h6>
                <div className="time">
                    <span>{minutes.toString().padStart(2, '0')}</span>
                    <p>:</p>
                </div>
            </div>
            <div>
                <h6>Seconds</h6>
                <div className="time">
                    <span>{seconds.toString().padStart(2, '0')}</span>
                </div>
            </div>
        </>
    );
}

export default CountdownTimer;