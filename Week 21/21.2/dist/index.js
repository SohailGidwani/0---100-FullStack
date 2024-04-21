"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
// const gameManager = new GameManager();
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.gameManager.addGame({
        id: Math.random().toString(),
        "whitePlayer": "harkirat",
        "blackPlayer": "jaskirat",
        moves: []
    });
}, 5000);
