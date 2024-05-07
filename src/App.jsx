import { Outlet } from 'react-router-dom'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import ThemeProvider from './features/ThemeProvider.jsx'


function App() {
  return (  
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
        <Footer />  
      </ThemeProvider>
    </>
  )
}

export default App
