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
import FilterByTagPage from './pages/FilteredTagsPage';
import Footer from "./components/Footer";
import ListAll from './components/ListAll';



function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/lavatories/:id" element={<DetailsPage />} />
        <Route path="/lavatories/tag/:tag" element={<FilterByTagPage />} />
        <Route path="/lavatories/edit/:id" element={<EditToilet />} />
        <Route path="/lavatories/create/:id" element={<AddToilet />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
