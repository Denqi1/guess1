const DEFAULT_ATTEMPTS = 10

const TEXT = {
  ATTEMPT_BASE_TEXT: 'Attempts remaining: ',
  RESULT_BASE_TEXT: '',
  HISTORY_BASE_TEXT: 'The history of attempts in this game: ',
  RESULT_TRYING_IS_OVER_TEXT: 'Trying is over. Start again',
  RESULT_YOU_WON_TEXT: 'You WON!',
  RESULT_LESS_TEXT: 'Less',
  RESULT_BIGGER_TEXT: 'Bigger'
}

interface InterfaceTEXT {
  ATTEMPT_BASE_TEXT: string
  RESULT_BASE_TEXT: string
  HISTORY_BASE_TEXT: string
  RESULT_TRYING_IS_OVER_TEXT: string
  RESULT_YOU_WON_TEXT: string
  RESULT_LESS_TEXT: string
  RESULT_BIGGER_TEXT: string
}

export { DEFAULT_ATTEMPTS, TEXT, type InterfaceTEXT }
