import { uiElements, type uiElementsType1 } from './elements'
import { TEXT } from './consts'
import { makeWonGame, makeGameOver } from './phaseGame'

function displayResultInputNumber (inputValue: number, totalAttempt: number, guessedNumber: number, elements: uiElementsType1): void {
  if (elements.result === null || elements.button === null || elements.attempts === null) {
    throw new Error('Couldn\'t find result, button, attempts')
  }

  if (inputValue < guessedNumber) {
    elements.result.textContent = TEXT.RESULT_BIGGER_TEXT
  } else if (inputValue > guessedNumber) {
    elements.result.textContent = TEXT.RESULT_LESS_TEXT
  } else if (inputValue === guessedNumber) {
    makeWonGame(totalAttempt, uiElements)
  }

  if (totalAttempt === 0) {
    makeGameOver(uiElements)
  }
}

function showResultGameOver (uiElements: uiElementsType1): void {
  if (uiElements.result === null) {
    throw new Error('result element not found')
  }

  uiElements.result.textContent = TEXT.RESULT_TRYING_IS_OVER_TEXT
  uiElements.result.classList.add('noAttempt')
}

function showResultWonGame (uiElements: uiElementsType1, totalAttempt: number): void {
  if (uiElements.result === null || uiElements.button === null || uiElements.attempts === null) {
    throw new Error('Couldn\'t find uiElements - result, button, attempts')
  }

  uiElements.result.textContent = TEXT.RESULT_YOU_WON_TEXT
  uiElements.attempts.textContent = TEXT.ATTEMPT_BASE_TEXT + totalAttempt

  uiElements.result.classList.add('win')
}

export { displayResultInputNumber, showResultGameOver, showResultWonGame }
