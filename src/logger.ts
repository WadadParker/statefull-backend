//  It's purpose is to just log the current state every 5 second
import { games } from "./store";

export function startLogger() {
    setInterval(()=> {
        console.log(games);
    },4000)
}