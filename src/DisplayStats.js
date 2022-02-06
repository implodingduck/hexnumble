import LocalStorageHelper from './LocalStorageHelper'
import { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import FormatTime from './FormatTime';

const DisplayStats = ( props ) => {
    const [bestTime, setBestTime] = useState(0)
    const [bestId, setBestId] = useState('#')
    const [avgTime, setAvgTime] = useState(0)
    const [numGames, setNumGames] = useState(0)
    //const [worstTime, setWorstTime] = useState(0)
    
    useEffect(() => {
        const games = LocalStorageHelper.getGames()
        let best = 0 
        let bId = ''
        let sum = 0

        for( let g of games){
            if ( g.time < best || best === 0 ){
                best = g.time
                bId = g.id
            }
            
            sum += g.time
        }
        setBestTime(best)
        setBestId(bId)
        setAvgTime(sum / games.length)
        setNumGames(games.length)
    }, [setBestTime, setBestId, setAvgTime, setNumGames])
    

    return (
        
        <div>
            { ( props.currentId === bestId) ? <span className="newrecord">New Record!</span> : '' }
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>More Stats</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li><b>Best Time:</b> <FormatTime time={bestTime}></FormatTime></li>
                            <li><b>Average Time:</b> <FormatTime time={avgTime}></FormatTime></li>
                            <li><b>Number of Games Played:</b> { numGames }</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )

}

export default DisplayStats;