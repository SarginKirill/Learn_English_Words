import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import AddWord from './Pages/AddWord/AddWord'
import Main from './Pages/Main/Main'
import { Testing } from './Pages/Testing/Testing'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="addword" element={<AddWord />} />
        <Route path="testing" element={<Testing />} />
      </Routes>
    </div>
  )
}

export default App
