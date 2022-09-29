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

      state.words.push({
        id: new Date().toISOString(),
        textEng: action.payload.textEng.toLowerCase(),
        textUkr: action.payload.textUkr.toLowerCase(),
      })

      localStorage.removeItem('words')
      localStorage.setItem('words', JSON.stringify(state.words))
    },
  },
})

export const { addWord } = wordSlice.actions

export default wordSlice.reducer
