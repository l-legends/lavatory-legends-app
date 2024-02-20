import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
import AddToilet from './pages/AddToiletPage';
import EditToilet from './pages/EditToiletPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from "./components/Footer";
import ListAll from './components/ListAll';
import SearchBar from './components/Searchbar';



function App() {

  return (
    <>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lavatories/:id" element={<DetailsPage />} />
        <Route path="/lavatories/edit/:id" element={<EditToilet />} />
        <Route path="/lavatories/create/:id" element={<AddToilet />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
