import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './components/Firebase/firebase'
import mockupData from './mockup';

function App() {

  const [data, setData] = useState(mockupData)

  const fetchData = async () => {
    const response = await fetch("https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818")
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [isUserSignedIn, setIsUserSignedIn] = useState(true)
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsUserSignedIn(true)
    } else
      setIsUserSignedIn(false)
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          { isUserSignedIn ? (<Route index element={<Home data={data} />} />) : (<Route index element={<SignIn />} />)}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
