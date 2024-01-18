"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showResultWonGame = exports.showResultGameOver = exports.displayResultInputNumber = void 0;
const elements_1 = require("./elements");
const consts_1 = require("./consts");
const phaseGame_1 = require("./phaseGame");
function displayResultInputNumber(inputValue, totalAttempt, guessedNumber, elements) {
    if (elements.result === null || elements.button === null || elements.attempts === null) {
        throw new Error('Couldn\'t find result, button, attempts');
    }
    if (inputValue < guessedNumber) {
        elements.result.textContent = consts_1.TEXT.RESULT_BIGGER_TEXT;
    }
    else if (inputValue > guessedNumber) {
        elements.result.textContent = consts_1.TEXT.RESULT_LESS_TEXT;
    }
    else if (inputValue === guessedNumber) {
        (0, phaseGame_1.makeWonGame)(totalAttempt, elements_1.uiElements);
    }
    if (totalAttempt === 0) {
        (0, phaseGame_1.makeGameOver)(elements_1.uiElements);
    }
}
exports.displayResultInputNumber = displayResultInputNumber;
function showResultGameOver(uiElements) {
    if (uiElements.result === null) {
        throw new Error('result element not found');
    }
    uiElements.result.textContent = consts_1.TEXT.RESULT_TRYING_IS_OVER_TEXT;
    uiElements.result.classList.add('noAttempt');
}
exports.showResultGameOver = showResultGameOver;
function showResultWonGame(uiElements, totalAttempt) {
    if (uiElements.result === null || uiElements.button === null || uiElements.attempts === null) {
        throw new Error('Couldn\'t find uiElements - result, button, attempts');
    }
    uiElements.result.textContent = consts_1.TEXT.RESULT_YOU_WON_TEXT;
    uiElements.attempts.textContent = consts_1.TEXT.ATTEMPT_BASE_TEXT + totalAttempt;
    uiElements.result.classList.add('win');
}
exports.showResultWonGame = showResultWonGame;
//# sourceMappingURL=view.js.map