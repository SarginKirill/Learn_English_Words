import { useSelector } from 'react-redux'

export function WordsList() {
  const words = useSelector((state) => state.words.words)

  console.log(words)

  if (!words.length)
    return (
      <div className="text-center">
        <h6>Ви ще не вивчили жодного слова</h6>
      </div>
    )

  return (
    <div className="word-list">
      {words.map((el) => (
        <p key={el.id} className="word">
          {el.textEng} - <small className="text-muted">{el.textUkr}</small>
        </p>
      ))}
    </div>
  )
}
