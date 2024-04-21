interface Game {
    id: string;
    whitePlayerName:string;
    blackPlayerName: string;
    moves: string[]
}

// export const games:Game[] = []

//  Now export a class, which has a array and functions which
// are hidden from the world. So the intern does not have to worry
// about calling Game.id.push etc

export class GameManager {
    games: Game[] = [];
    constructor() {
        this.games = [];
    }

    addMove(gameId: string, move: string) {
        console.log(`Adding move ${move} to game ${gameId}`)
        const game = this.games.find(game => game.id === gameId);
        if(game) {
            game.moves.push(move);
        }
    }

    addGame(game: Game) {
        this.games.push(game)
    }

    log() {
        console.log(this.games)
    }

}