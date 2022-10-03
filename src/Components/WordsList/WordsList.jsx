import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteWord } from '../../Store/WordSlice'

export function WordsList() {
  const words = useSelector((state) => state.words.words)

  const [change, setChange] = useState(true)

  const dispatch = useDispatch()

  if (!words.length)
    return (
      <div className="text-center">
        <h6>Ви ще не вивчили жодного слова</h6>
      </div>
    )

  return (
    <>
      <div className="word-list">
        {words.map((word) => (
          <div key={word.id} className="word">
            <p className="">
              {word.textEng} -{' '}
              <small className="text-muted">{word.textUkr}</small>
            </p>
            <div>
              <i className="bi bi-gear gear mx-1"></i>
              <i
                onClick={() => dispatch(deleteWord(word))}
                className="bi bi-trash trash"
              ></i>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="change-word">Hello</div> */}
    </>
  )
}
