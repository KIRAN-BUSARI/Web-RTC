import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import { SocketProvider } from './provider/Socket'

function App() {
  return (
    <>
      <SocketProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </SocketProvider>
    </>
  )
}

export default App
