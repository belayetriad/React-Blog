import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutComponent from './components/about/About.component';
import ContactComponent from './components/contact/Contact.component';
import HomeComponet from './components/home/Home.component';
import NoPage from './components/noPage/NoPage.component';
import PostComponent from './components/post/Post.component';
import AppLayout from './layouts/AppLayout';
function App() { 
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeComponet />} /> 
          <Route path="post/:id" element={<PostComponent />} /> 
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
       
  );
}

export default App;
