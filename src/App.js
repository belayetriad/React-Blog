import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutComponent from './components/about/About.component';
import DashboardComponent from './components/admin/dashboard/dashboard.component';
import AdminPostComponent from './components/admin/post/post.component';
import ContactComponent from './components/contact/Contact.component';
import HomeComponet from './components/home/Home.component';
import LoginComponent from './components/login/Login.component';
import NoPage from './components/noPage/NoPage.component';
import PostComponent from './components/post/Post.component';
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';
function App() { 
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomeComponet />} /> 
          <Route path="post/:id" element={<PostComponent />} /> 
          <Route path="about" element={<AboutComponent />} />
          <Route path="contact" element={<ContactComponent />} />
          <Route path="login" element={<LoginComponent />} />
          <Route path="*" element={<NoPage />} />
         
        </Route>
        <Route path='admin' element={<AuthLayout />}> 
          <Route path='home' element={<DashboardComponent />} /> 
          <Route path='post' element={<AdminPostComponent />} /> 
        </Route> 
      </Routes>
    </BrowserRouter>
       
  );
}

export default App;
