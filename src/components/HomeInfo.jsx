import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

/**
 * InfoBox component for displaying a text message with a button link.
 * 
 * This component renders a text message and a button that links to a specified route. 
 * It is styled with a specific design and includes an arrow icon on the button.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.text - The text message to display.
 * @param {string} props.link - The URL path for the button link.
 * @param {string} props.btnText - The text to display on the button.
 * @returns {JSX.Element} A JSX element of the info box.
 */
const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text} </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
           <img src={arrow} className='w-4 h-4 object-contain'/> {btnText}
        </Link>
    </div>
)

/**
 * An object containing JSX elements for different content stages.
 * 
 * Each key represents a stage and is mapped to a JSX element to be rendered. 
 * This includes a welcome message and several InfoBox components with different texts 
 * and links, offering information about Sergio, a Software Engineer.
 */
const renderContent = {
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center
            neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Greetings visitor, I am <span className='font-semibold'> Sergio</span>👋
            <br/>
            A Software Engineer! 💻
        </h1>
    ),
    2: (
        <InfoBox
            text= "Passionate about software development, working towards the creation of a better world using software!"
            link="/About"
            btnText="Learn more"
         />
    ),
    3: (
        <InfoBox
            text= "Over the years, I've had the wonderful opportunity to lead several projects to success. Are you intrigued to learn about their impact?"
            link="/Projects"
            btnText="Visit my portfolio!"
         />
    ),
    4: (
        <InfoBox
            text= "Seeking a skilled developer for your project? I'm just a few keystrokes away, eager to bring expertise and energy to your venture!"
            link="/Contact"
            btnText="Let's talk!"
         />
    ),
}

/**
 * HomeInfo component that selects content based on the current stage.
 * 
 * This component renders the content corresponding to the current stage. If no content
 * is found for the current stage, it returns null.
 * 
 * @param {Object} props - Component props.
 * @param {number} props.currentStage - The current stage identifier to determine 
 *                                      which content to display.
 * @returns {JSX.Element|null} The content for the current stage or null if no content exists.
 */
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;