import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../UI/Button/Button'

export function Question() {
  const words = useSelector((state) => state.words.words)

  const [randomWords, setWords] = useState(getRandomWords())
  const [answers, setAnswers] = useState([])
  const [questCounter, setQuestCounter] = useState(0)
  const [score, setScore] = useState(0)
  const [close, setClose] = useState(false)

  function getRandomWords() {
    const array = []

    for (let i = 0; i < 11; i++) {
      const random = Math.floor(Math.random() * words.length)

      if (array.find((el) => el.textEng === words[random].textEng)) {
        i--
        continue
      } else {
        array.push(words[random])
      }
    }

    return array
  }

  function getRandomAnswers() {
    const array = []

    array.push(randomWords[questCounter].textUkr)

    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * words.length)

      if (array.find((el) => el === words[random].textUkr)) {
        i--
        continue
      } else {
        array.push(words[random].textUkr)
      }
    }

    array.sort()

    return array
  }

  function getAnswer(answer) {
    if (randomWords[questCounter].textUkr === answer) {
      setScore(score + 1)
    }

    setQuestCounter(questCounter + 1)
  }

  console.log(questCounter)

  useEffect(() => {
    setAnswers(getRandomAnswers())

    if (questCounter === 10) setClose(true)
  }, [questCounter])

  return (
    <div className="conteiner text-center mt-5">
      {!close ? (
        <>
          <p className="h4 mb-4">{randomWords[questCounter].textEng}</p>
          {answers.map((el, index) => (
            <Button
              className="mt-4"
              key={index}
              text={el}
              click={() => getAnswer(el)}
            />
          ))}
        </>
      ) : (
        <>
          <p className="h4">Результат:</p>

          <p className="h4">{(score / 10) * 100} %</p>
          <p>правільних відповідей</p>
        </>
      )}
    </div>
  )
}
