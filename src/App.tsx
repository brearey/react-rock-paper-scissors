import './App.css'
import { MainPage } from './pages/main/MainPage'
import { GamePage } from './pages/game/GamePage.tsx'
import {BrowserRouter, Route, Routes} from 'react-router'

export function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<MainPage/>}/>
              <Route path='/game' element={<GamePage/>}/>
          </Routes>
      </BrowserRouter>
  )
}