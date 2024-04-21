//  It's purpose is to just log the current state every 5 second
import { GameManager } from "./store";

const gameManager = new GameManager();

export function startLogger() {
    setInterval(()=> {
        gameManager.log()
    },4000)
}