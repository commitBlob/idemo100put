/* Navigation builder for general page */

// App specific
import { NavLinks } from './navigation-links.interface';


export const GlobalNavigation: NavLinks[] = [
  {
    linkName: 'About Us',
    linkPath: 'apartments/about-us',
    linkIcon: 'people',
    unique: true,
  },
  {
    linkName: 'Contact Us',
    linkPath: 'apartments/contact-us',
    linkIcon: 'chat',
    unique: true,
  },
  {
    linkName: 'Croatia Facts',
    linkPath: 'apartments/cro-facts',
    linkIcon: 'assistant_photo',
    unique: true,
  },
  {
    linkName: 'Dubrovnik Facts',
    linkPath: 'apartments/du-facts',
    linkIcon: 'local_activity',
    unique: true,
  },
  {
    linkName: 'Location',
    linkPath: 'apartments/location',
    linkIcon: 'place',
    unique: true,
  },
  {
    linkName: 'Policy',
    linkPath: 'apartments/policy',
    linkIcon: 'content_paste',
    unique: true,
  },
  {
    linkName: 'Surroundings',
    linkPath: 'apartments/surroundings',
    linkIcon: 'landscape',
    unique: true,
  }
]
