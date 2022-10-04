import { useSelector } from 'react-redux'
import { Question } from '../../Components/Question/Question'
import { useState } from 'react'

export function Testing() {
  const words = useSelector((state) => state.words.words)

  if (words.length < 10)
    return (
      <div className="text-center mt-5">
        <h6>Для тестування потрібно вивчите більше десяти слів</h6>
      </div>
    )

  return <Question />
}
