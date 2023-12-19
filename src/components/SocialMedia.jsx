import React from 'react';
import { socialLinks } from '../constants';

/**
 * SocialMediaLinks component for displaying social media links.
 * 
 * This component renders a set of social media links, provided by the 'socialLinks' array
 * from '../constants'. Each link is represented by an icon and is wrapped in an anchor tag
 * for navigation. The component is absolutely positioned at the bottom-right of its parent 
 * container, and it's styled to be responsive.
 * 
 * @returns {JSX.Element} A JSX element representing the social media links.
 */
const SocialMediaLinks = () => {
    return (
        <div className="absolute bottom-0 right-0 mb-4 mr-4 flex flex-wrap">
            {socialLinks.map((link, index) => (
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="inline-block mx-2 my-1">
                    <img src={link.iconUrl} alt={link.name} className="h-10 w-10 sm:h-8 sm:w-8" />
                </a>
            ))}
        </div>
    );
};

export default SocialMediaLinks;