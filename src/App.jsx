import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';

/**
 * App component as the root of the application.
 * 
 * This component sets up the main structure of the application using React Router.
 * It includes a <Navbar /> component and a set of routes each linked to a different
 * page component (Home, About, Projects, Contact). The <Router> component wraps
 * the routes to enable navigation. The entire app is contained within a <main> tag
 * with some base styling applied.
 * 
 * @returns {JSX.Element} A JSX element representing the root of the application.
 */
const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </main>
  );
}

export default App;
