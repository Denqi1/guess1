import { type uiElementsType1 } from './elements'

function getInputValue (uiElements: uiElementsType1): number {
  return Number((uiElements.input as HTMLInputElement).value)
}

function clearInputValue (uiElements: uiElementsType1): void {
  (uiElements.input as HTMLInputElement).value = ''
}

function disableForm (uiElements: uiElementsType1): void {
  if (uiElements.button === null) {
    throw new Error('Button not found')
  }

  (uiElements.button as HTMLButtonElement).disabled = true;
  (uiElements.input as HTMLButtonElement).disabled = true
  uiElements.button.classList.add('disabled')
}

function activateForm (uiElements: uiElementsType1): void {
  (uiElements.button as HTMLButtonElement).disabled = false;
  (uiElements.input as HTMLButtonElement).disabled = false
}

export { getInputValue, clearInputValue, disableForm, activateForm }
