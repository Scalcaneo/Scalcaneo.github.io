import { useState } from 'react';

/**
 * Custom hook 'useAlert' for managing alert states and behaviors in a React application.
 * 
 * This hook provides functionalities to show and hide alerts. It uses the 'useState' hook
 * from React to manage the alert's state. The state includes whether the alert is visible,
 * the text to be displayed, and the type of alert (e.g., 'danger').
 * 
 * The hook returns an object containing the alert state and functions to show or hide the alert.
 * 
 * @returns {{
 *   alert: {show: boolean, text: string, type: string},
 *   showAlert: ({text, type}) => void,
 *   hideAlert: () => void
 * }} An object containing the alert state and functions to manipulate it.
 */
const useAlert = () => {
    const [alert, setAlert] = useState({show: false, text: '', type: 'danger'});

    const showAlert = ({ text, type = 'danger' }) => setAlert({
        show: true,
        text,
        type
    });

    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    });

    return { alert, showAlert, hideAlert };
}

export default useAlert;
