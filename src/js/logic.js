"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restartHandler = exports.formHandler = void 0;
const consts_1 = require("./consts");
const elements_1 = require("./elements");
const _ustomOperations_1 = require("./\u0441ustomOperations");
const maths_1 = require("./maths");
const view_1 = require("./view");
let totalAttempt = consts_1.DEFAULT_ATTEMPTS;
let guessedNumber = (0, maths_1.makeGuessedNumber)();
function formHandler(event) {
    event.preventDefault();
    if (elements_1.uiElements.result === null || elements_1.uiElements.input === null || elements_1.uiElements.attempts === null || elements_1.uiElements.button === null || elements_1.uiElements.history === null) {
        throw new Error('Element result, input, attempts and button was not found');
    }
    --totalAttempt;
    elements_1.uiElements.attempts.textContent = consts_1.TEXT.ATTEMPT_BASE_TEXT + totalAttempt;
    const inputValue = (0, _ustomOperations_1.getInputValue)(elements_1.uiElements);
    (0, view_1.displayResultInputNumber)(inputValue, totalAttempt, guessedNumber, elements_1.uiElements);
    elements_1.uiElements.history.textContent += `${inputValue}, `;
    (0, _ustomOperations_1.clearInputValue)(elements_1.uiElements);
}
exports.formHandler = formHandler;
function restartHandler() {
    if (elements_1.uiElements.result === null || elements_1.uiElements.input === null || elements_1.uiElements.attempts === null || elements_1.uiElements.button === null) {
        throw new Error('Element result, input, attempts and button was not found');
    }
    (0, _ustomOperations_1.activateForm)(elements_1.uiElements);
    (0, _ustomOperations_1.clearInputValue)(elements_1.uiElements);
    MakeValuesByDefault(elements_1.uiElements, consts_1.TEXT);
    guessedNumber = (0, maths_1.makeGuessedNumber)();
}
exports.restartHandler = restartHandler;
function MakeValuesByDefault(uiElements, TEXT) {
    if (uiElements.result === null || uiElements.input === null || uiElements.attempts === null || uiElements.button === null || uiElements.history === null) {
        throw new Error('Element result, input, attempts and button was not found');
    }
    uiElements.result.textContent = TEXT.RESULT_BASE_TEXT;
    uiElements.history.textContent = TEXT.HISTORY_BASE_TEXT;
    uiElements.result.classList.remove('win');
    uiElements.button.classList.remove('disabled');
    uiElements.attempts.textContent = TEXT.ATTEMPT_BASE_TEXT + consts_1.DEFAULT_ATTEMPTS;
    totalAttempt = consts_1.DEFAULT_ATTEMPTS;
}
//# sourceMappingURL=logic.js.map