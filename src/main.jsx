import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Root from './components/conteiners/Root.jsx';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCsKfZrEwwV9Hc4kPr6aNsV5KAeY6ImpU4",
  authDomain: "sportbanners-1163a.firebaseapp.com",
  databaseURL: "https://sportbanners-1163a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sportbanners-1163a",
  storageBucket: "sportbanners-1163a.appspot.com",
  messagingSenderId: "462554446638",
  appId: "your-app-id"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Root/>}>
       <Route index element={<App/>}/>
      </Route>
    </Routes>
  </Router>

)
