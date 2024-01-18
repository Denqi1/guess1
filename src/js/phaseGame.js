"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWonGame = exports.makeGameOver = void 0;
const _ustomOperations_1 = require("./\u0441ustomOperations");
const view_1 = require("./view");
function makeGameOver(uiElements) {
    (0, _ustomOperations_1.disableForm)(uiElements);
    (0, view_1.showResultGameOver)(uiElements);
}
exports.makeGameOver = makeGameOver;
function makeWonGame(totalAttempt, uiElements) {
    (0, _ustomOperations_1.disableForm)(uiElements);
    (0, view_1.showResultWonGame)(uiElements, totalAttempt);
}
exports.makeWonGame = makeWonGame;
//# sourceMappingURL=phaseGame.js.map