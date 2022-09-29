import { useDispatch } from 'react-redux'
import { addWord } from '../../Store/WordSlice'
import { useState } from 'react'

import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'

export default function Form() {
  const [textEng, setTextEng] = useState('')
  const [textUkr, setTextUkr] = useState('')

  const dispatch = useDispatch()

  const addNewWord = () => {
    dispatch(addWord({ textEng, textUkr }))

    setTextEng('')
    setTextUkr('')
  }

  return (
    <form className="form-floating mt-4">
      <Input
        value={textEng}
        onChange={(value) => {
          setTextEng(value.target.value)
        }}
        ph="Введіть нове слово англійською"
        id="eng"
      />
      <Input
        value={textUkr}
        onChange={(value) => setTextUkr(value.target.value)}
        ph="Введіть переклад українською"
        id="ukr"
      />
      <Button
        text="Додати"
        click={() => {
          addNewWord()
        }}
      />
    </form>
  )
}
