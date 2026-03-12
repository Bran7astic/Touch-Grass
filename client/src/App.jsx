import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="view/:id" element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
