interface uiElementsType1 {
  form: Element | null
  input: Element | null
  button: Element | null
  result: Element | null
  attempts: Element | null
  restart: Element | null
  history: Element | null
}

const uiElements = {
  form: document.querySelector('.guess-form'),
  input: document.querySelector('.guess-form-input'),
  button: document.querySelector('.guess-form-button'),
  result: document.querySelector('.result'),
  attempts: document.querySelector('.attempts'),
  restart: document.querySelector('.restart-button'),
  history: document.querySelector('.attempts-history')
}

export { uiElements, type uiElementsType1 }
