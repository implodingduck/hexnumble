import React from 'react'
import { useState, useEffect } from 'react';
import FormatTime from './FormatTime'
const Timer = ( props ) => {
    const {startTime=new Date().getTime(), endTime=0} = props;
    const [ timerTime, setTimerTime ] = useState(0);

    useEffect(()=>{
        
        let myInterval = setInterval(() => {            
            const now = new Date().getTime()
            setTimerTime(now - startTime)
        }, 1000)
        if (endTime != 0){
            setTimerTime(endTime - startTime)
            clearInterval(myInterval);
        }
        return ()=> {
            clearInterval(myInterval);
        };
        
    });

    return (
        <div>
            <FormatTime time={timerTime}></FormatTime>
        </div>
    )
}

export default Timer;