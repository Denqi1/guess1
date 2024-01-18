"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateForm = exports.disableForm = exports.clearInputValue = exports.getInputValue = void 0;
function getInputValue(uiElements) {
    return Number(uiElements.input.value);
}
exports.getInputValue = getInputValue;
function clearInputValue(uiElements) {
    uiElements.input.value = '';
}
exports.clearInputValue = clearInputValue;
function disableForm(uiElements) {
    if (uiElements.button === null) {
        throw new Error('Button not found');
    }
    uiElements.button.disabled = true;
    uiElements.input.disabled = true;
    uiElements.button.classList.add('disabled');
}
exports.disableForm = disableForm;
function activateForm(uiElements) {
    uiElements.button.disabled = false;
    uiElements.input.disabled = false;
}
exports.activateForm = activateForm;
//# sourceMappingURL=%D1%81ustomOperations.js.map