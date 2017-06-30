/* Navigation builder for general page */

// App specific
import { NavLinks } from './navigation-links.interface';


export const GlobalNavigation: NavLinks[] = [
  {
    linkName: 'About Us',
    linkPath: 'about-us',
    linkIcon: 'people',
    unique: true,
  },
  {
    linkName: 'Contact Us',
    linkPath: 'contact-us',
    linkIcon: 'chat',
    unique: true,
  },
  {
    linkName: 'Croatia Facts',
    linkPath: 'cro-facts',
    linkIcon: 'assistant_photo',
    unique: true,
  },
  {
    linkName: 'Dubrovnik Facts',
    linkPath: 'du-facts',
    linkIcon: 'local_activity',
    unique: true,
  },
  {
    linkName: 'Location',
    linkPath: 'location',
    linkIcon: 'place',
    unique: true,
  },
  {
    linkName: 'Policy',
    linkPath: 'policy',
    linkIcon: 'content_paste',
    unique: true,
  },
  {
    linkName: 'Surroundings',
    linkPath: 'surroundings',
    linkIcon: 'landscape',
    unique: true,
  }
]
