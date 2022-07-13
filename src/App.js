import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Header from './components/Header'
import Footer from './components/Footer'

import Home from './page/Home'
import Rooms from './page/Room/Rooms'
import Room from './page/Room/Room'
import Rest from './page/Rest/Rest'
import RestItem from './page/Rest/RestItem'
import Gallery from './page/Gallery'
import News from './page/News/News'
import NewsItem from './page/News/NewsItem'
import SpecialOffer from './page/SpecialOffer'
import Contacts from './page/Contacts'
import Way from './page/Way'

import NotPage from './page/NotPage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:roomId" element={<Room />} />
            <Route path="/rest" element={<Rest />} />
            <Route path="/rest/:restId" element={<RestItem />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:newsId" element={<NewsItem />} />
            <Route path="/special-offer" element={<SpecialOffer />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/way" element={<Way />} />
            <Route path="*" element={<NotPage />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
