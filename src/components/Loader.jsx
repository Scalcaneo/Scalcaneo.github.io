import { Html } from '@react-three/drei';

/**
 * Loader component using React Three Drei.
 * 
 * This component creates a loading spinner using the 'Html' component from '@react-three/drei'.
 * The spinner is styled with Tailwind CSS and is animated to spin. The 'Html' component
 * allows for the integration of HTML elements in the 3D scene rendered by React Three Fiber.
 * 
 * @returns {JSX.Element} A JSX element representing the loading spinner.
 */
const Loader = () => {
  return (
    <Html>
      <div className='flex justify-center items-center'>
        <div className='w-20 h-20 border-2 border-opacity-20
          border-blue-500 border-t-blue-500 rounded-full animate-spin' />
      </div>
    </Html>
  );
}

export default Loader;