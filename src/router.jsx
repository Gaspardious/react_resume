
import { createBrowserRouter } from "react-router-dom";
import './index.css'
import App from "./App";
import About from "./pages/about/About";  
import Error from './pages/Error';
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import Home from "./pages/home/Home";



const router = createBrowserRouter ([
{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [
  { path: '/', element: <Home />, index: true },
  { path: 'portfolio', element: <Portfolio /> },
  { path: 'about', element: <About />},
  { path: 'contact', element: <Contact /> }
]
},
]);

export default router;