import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Asosiy from './components/Asosiy/Asosiy'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Muallif from './components/Muallif/Muallif'
import Xizmatlar from './components/Xizmatlar/Xizmatlar'

export default class App extends Component {
  render() {
    return (
      <div className='app-page'>
        <Header />
        <Routes>
          <Route path='/' element={
            <Asosiy />
          } />
        </Routes>
        <Routes>
          <Route path='/xizmatlar' element={
            <Xizmatlar />
          } />
        </Routes>
        <Routes>
          <Route path='/muallif' element={
            <Muallif />
          } />
        </Routes>
        <Footer/>
      </div>
    )
  }
}

