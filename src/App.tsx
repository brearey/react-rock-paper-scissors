import {BrowserRouter, Route, Routes} from 'react-router'
import { MainPage } from './pages/main/MainPage'
import { GamePage } from './pages/game/GamePage.tsx'
import { ROUTES } from './util/constants/routes.ts'
import './App.css'


export function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={ ROUTES.INDEX } element={<MainPage/>}/>
              <Route path={ ROUTES.GAME } element={<GamePage/>}/>
          </Routes>
      </BrowserRouter>
  )
}