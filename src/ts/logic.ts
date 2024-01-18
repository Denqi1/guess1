import { DEFAULT_ATTEMPTS, TEXT, type InterfaceTEXT } from './consts'
import { uiElements, type uiElementsType1 } from './elements'
import { getInputValue, activateForm, clearInputValue } from './сustomOperations'
import { makeGuessedNumber } from './maths'
import { displayResultInputNumber } from './view'

let totalAttempt = DEFAULT_ATTEMPTS
let guessedNumber = makeGuessedNumber()

function formHandler (event: Event): void {
  event.preventDefault()
  if (uiElements.result === null || uiElements.input === null || uiElements.attempts === null || uiElements.button === null || uiElements.history === null) {
    throw new Error('Element result, input, attempts and button was not found')
  }

  --totalAttempt
  uiElements.attempts.textContent = TEXT.ATTEMPT_BASE_TEXT + totalAttempt

  const inputValue = getInputValue(uiElements)

  displayResultInputNumber(inputValue, totalAttempt, guessedNumber, uiElements)
  uiElements.history.textContent += `${inputValue}, `
  clearInputValue(uiElements)
}

function restartHandler (): void {
  if (uiElements.result === null || uiElements.input === null || uiElements.attempts === null || uiElements.button === null) {
    throw new Error('Element result, input, attempts and button was not found')
  }

  activateForm(uiElements)
  clearInputValue(uiElements)
  MakeValuesByDefault(uiElements, TEXT)

  guessedNumber = makeGuessedNumber()
}

function MakeValuesByDefault (uiElements: uiElementsType1, TEXT: InterfaceTEXT): void {
  if (uiElements.result === null || uiElements.input === null || uiElements.attempts === null || uiElements.button === null || uiElements.history === null) {
    throw new Error('Element result, input, attempts and button was not found')
  }

  uiElements.result.textContent = TEXT.RESULT_BASE_TEXT
  uiElements.history.textContent = TEXT.HISTORY_BASE_TEXT
  uiElements.result.classList.remove('win')
  uiElements.button.classList.remove('disabled')
  uiElements.attempts.textContent = TEXT.ATTEMPT_BASE_TEXT + DEFAULT_ATTEMPTS

  totalAttempt = DEFAULT_ATTEMPTS
}

export { formHandler, restartHandler }
