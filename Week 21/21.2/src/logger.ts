import { gameManager } from "./store";

// const gameManager = new GameManager();

export function startLogger() {
    setInterval(() => {
        gameManager.logState();
    }, 4000)
}
