import { useSelector } from 'react-redux'
import { Question } from '../../Components/Question/Question'
import { useState } from 'react'

export function Testing() {
  const words = useSelector((state) => state.words.words)

  const [counter, setCounter] = useState(0)
  const [stat, setStat] = useState(0)

  // const [randomWords, setRandomWords] = useState(getRandomWords())
  // const [answers, setAnswers] = useState('')

  // function getRandomAnswers() {
  //   const array = []
  // }

  // function getRandomWords() {
  //   const array = []

  //   for (let i = 0; i < 10; i++) {
  //     array.push(words[Math.floor(Math.random() * words.length)])
  //   }

  //   return array
  // }

  // function getRandomAnswers(quest, allWords) {
  //   const array = []

  //   for (let i = 0; i < 4; i++) {}
  // }

  // console.log(randomWords)

  if (words.length < 10)
    return (
      <div className="text-center mt-5">
        <h6>Для тестування потрібно вивчите більше десяти слів</h6>
      </div>
    )

  return <Question />
}
