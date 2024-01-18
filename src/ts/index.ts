import { uiElements } from './elements'
import { formHandler, restartHandler } from './logic'

uiElements.form?.addEventListener('submit', formHandler)
uiElements.restart?.addEventListener('click', restartHandler)
