const getItem = ( k ) => {
    return localStorage.getItem(k);
}
const getGames = () => {
    let games = getItem('games')
    if (games === null){
        games = '[]'
    }
    return JSON.parse(games)

}
const appendGame = ( id, t ) => {
    let games = getGames()
    games.push( { id: id, time: t } )
    localStorage.setItem('games', JSON.stringify(games))
}

module.exports = {
    getItem,
    getGames,
    appendGame
}