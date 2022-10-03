import { createSlice } from '@reduxjs/toolkit'

const wordSlice = createSlice({
  name: 'words',
  initialState: {
    words: JSON.parse(localStorage.getItem('words')) || [],
  },
  reducers: {
    addWord(state, action) {
      if (
        !action.payload.textEng.trim().length &&
        !action.payload.textUkr.trim().length
      ) {
        return alert('Всі поля повинні бути заповнени')
      }

      const exam = state.words.find(
        (el) => el.textEng === action.payload.textEng.trim().toLowerCase()
      )

      if (exam) return alert('Ви вже вивчили це слово')

      state.words.push({
        id: new Date().toISOString(),
        textEng: action.payload.textEng.toLowerCase(),
        textUkr: action.payload.textUkr.toLowerCase(),
      })

      localStorage.removeItem('words')
      localStorage.setItem('words', JSON.stringify(state.words))
    },
    changeWord(state, action) {},
    deleteWord(state, action) {
      const data = state.words
      console.log(action.payload)
      console.log(data)
    },
  },
})

export const { addWord, changeWord, deleteWord } = wordSlice.actions

export default wordSlice.reducer
