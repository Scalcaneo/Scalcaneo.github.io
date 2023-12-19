import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Entry point for the React application.
 * 
 * This file is responsible for rendering the root React component (<App />) into the DOM.
 * It uses the new ReactDOM client introduced in React 18 to create a root and then renders
 * the <App /> component. The 'index.css' file is imported to apply global CSS styles to 
 * the application.
 * 
 */
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
