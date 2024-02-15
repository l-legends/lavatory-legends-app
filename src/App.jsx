import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
import AddToilet from './pages/AddToiletPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './pages/Footer';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lavatories/:id" element={<DetailsPage />} />
        <Route path="/lavatories/create/:id" element={<AddToilet />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
