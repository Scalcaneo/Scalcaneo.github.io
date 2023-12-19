import { NavLink } from 'react-router-dom';

/**
 * Navbar component for navigation using React Router.
 * 
 * This component creates a header with navigation links using 'NavLink' from 'react-router-dom'.
 * The links change color based on whether they are active, providing a visual cue to the user
 * about their current location in the app. The header contains a logo or brand element (SM) and
 * navigation links ('About', 'Projects'). The styling is handled with Tailwind CSS.
 * 
 * @returns {JSX.Element} A JSX element representing the navigation bar.
 */
const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center
        justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">SM</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to="/about" className={({ isActive }) => 
            isActive ? "text-blue-500" : "text-black"}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive}) => 
            isActive ? "text-blue-500" : "text-black"}>
                Projects
            </NavLink>
        </nav>
    </header>
  );
}

export default Navbar;
