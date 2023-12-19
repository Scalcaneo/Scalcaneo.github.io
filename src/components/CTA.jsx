import React from 'react';
import SocialMediaLinks from './SocialMedia';

/**
 * A React component for a call-to-action (CTA) section.
 * 
 * This component creates a CTA section, typically used to engage visitors and 
 * prompt them to take some action, like contacting for a project. It includes 
 * a message and social media links. The component is designed with responsiveness 
 * in mind, adjusting layout for smaller screens.
 * 
 * The `SocialMediaLinks` component is used to display a list of social media links.
 * 
 * @returns {JSX.Element} The JSX code for the CTA section.
 */
const CTA = () => {
  return (
    <section className="cta relative pb-16 sm:pb-20">
        <p className="cta-text mb-8 sm:mb-12">
            Have a project in mind? <br className="sm:block hidden" />
            Let's collaborate and create something amazing!
        </p>
        <SocialMediaLinks />
    </section>
  );
}

export default CTA;