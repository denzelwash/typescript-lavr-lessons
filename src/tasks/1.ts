type TForm = {
  title: string
  questions: TQuestion[]
}

type TQuestion = {
  id: number
  question: string
  answer: TAnswerText | TAnswerRadios | TAnswerCheckboxes
}

enum InputType {
  TEXT = 'text',
  RADIO = 'radio',
  CHECKBOX = 'checkbox'
}

type TAnswerText = {
  type: InputType.TEXT
  value: string
  rightAnswer: string
}

type TAnswerRadios = {
  type: InputType.RADIO
  list: { id: number; text: string }[]
  rightAnswer: number
}

type TAnswerCheckboxes = {
  type: InputType.CHECKBOX
  list: { id: number; text: string }[]
  rightAnswer: number[]
}

const form: TForm = {
  title: 'Заголовок формы',
  questions: [
    {
      id: 1,
      question: 'Первый вопрос',
      answer: {
        type: InputType.TEXT,
        value: '',
        rightAnswer: 'Правильный ответ'
      }
    },
    {
      id: 2,
      question: 'Второй вопрос',
      answer: {
        type: InputType.RADIO,
        list: [
          {
            id: 1,
            text: 'Первый ответ'
          },
          {
            id: 2,
            text: 'Второй ответ'
          }
        ],
        rightAnswer: 1
      }
    },
    {
      id: 3,
      question: 'Третий вопрос',
      answer: {
        type: InputType.CHECKBOX,
        list: [
          {
            id: 1,
            text: 'Первый ответ'
          },
          {
            id: 2,
            text: 'Второй ответ'
          },
          {
            id: 3,
            text: 'Третий ответ'
          }
        ],
        rightAnswer: [1, 3]
      }
    }
  ]
}

console.log(form)

export {}
