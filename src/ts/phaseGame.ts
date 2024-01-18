import { type uiElementsType1 } from './elements'
import { disableForm } from './сustomOperations'
import { showResultGameOver, showResultWonGame } from './view'

function makeGameOver (uiElements: uiElementsType1): void {
  disableForm(uiElements)
  showResultGameOver(uiElements)
}

function makeWonGame (totalAttempt: number, uiElements: uiElementsType1): void {
  disableForm(uiElements)
  showResultWonGame(uiElements, totalAttempt)
}

export { makeGameOver, makeWonGame }
