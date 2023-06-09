import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LeftSidebar from './components/leftSideBar/LeftSideBar'
import MainBoard from './components/mainBoard/MainBoard'
import { styled } from '@mui/material'


const Container = styled('div')({
   display:"flex",
   width:'100vw'
})

function App() {
  const [count, setCount] = useState(0)



  return (
    <Container>
         <LeftSidebar/>
         <MainBoard/>
    </Container>
  )
}

export default App
