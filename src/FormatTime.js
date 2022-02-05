const FormatTime = ( { time } ) => {

    const getSeconds = ( t ) => {
        const s = Math.floor( time / 1000) % 60
        return (s < 10) ? '0'+s : s
    }

    const getMinutes = ( t ) => {
        const m = Math.floor( time / 60000) % 60
        return (m < 10) ? '0'+m : m
    }

    return (
        <span>{getMinutes(time)}:{getSeconds(time)}</span>
    )
}

export default FormatTime;