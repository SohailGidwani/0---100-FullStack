"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
// const gameManager = new GameManager();
function startLogger() {
    setInterval(() => {
        store_1.gameManager.logState();
    }, 4000);
}
exports.startLogger = startLogger;
