import { GameManager } from "./store";
import { startLogger } from "./logger";

const gameManager = new GameManager();
// Have to create a instance here

startLogger();

setInterval(() => {
    gameManager.addGame({
        id: Math.random().toString(),
        whitePlayerName: "harkirat",
        blackPlayerName: "jaskirat",
        moves: []
    })
},5000)