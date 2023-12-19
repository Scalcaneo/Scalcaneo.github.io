/**
 * A React component to display a notification alert.
 * 
 * This component creates an alert box at the top of the screen with a message.
 * The alert type (e.g., 'danger' or other types) determines the background color 
 * of the alert. The component is positioned absolutely at the top center of its 
 * parent container.
 * 
 * @param {Object} props - The properties for the Alert component.
 * @param {string} props.type - The type of alert, e.g., 'danger'. This determines 
 *                              the styling of the alert.
 * @param {string} props.text - The text message to be displayed in the alert.
 * @returns {JSX.Element} The JSX code for the alert component.
 */
const Alert = ({ type, text }) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex
     justify-center items-center'>
        <div className={`${type === 'danger' ? 'bg-red-800' :
            'bg-blue-800'} p-2 text-indigo-100 leading-none lg:rounded-full
            flex lg:inline-flex items-center`} role="alert">
            <p className={`${type === 'danger' ? 'bg-red-500' :
              'bg-blue-500'} flex rounded-full uppercase px-2 py-1 
              font-semibold mr-3 text-xs` }>{type === 'danger' ?
              'Failed': 'Success'}
            </p>
            <p className="mr-2 text-left">{text}</p>
        </div>
    </div>
  )
}

export default Alert;