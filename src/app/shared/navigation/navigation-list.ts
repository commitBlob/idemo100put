/* Navigation builder for general page */

// App specific
import { NavLinks } from './navigation-links.interface';

export const Navigation: NavLinks[] = [
  {
    linkName: 'Home',
    linkPath: 'welcome',
    linkIcon: 'fa-home',
    unique: true,
  },
  {
    linkName: 'About Us',
    linkPath: 'about-us',
    unique: true,
  },
  {
    linkName: 'Contact Us',
    linkPath: 'contact-us',
    unique: true,
  },
  {
    linkName: 'Cro Facts',
    linkPath: 'cro-facts',
    unique: true,
  },
  {
    linkName: 'Du Facts',
    linkPath: 'du-facts',
    unique: true,
  },
  {
    linkName: 'Facilities',
    linkPath: 'facilities',
    unique: false,
  },
  {
    linkName: 'Location',
    linkPath: 'location',
    unique: true,
  },
  {
    linkName: 'Policy',
    linkPath: 'policy',
    unique: true,
  },
  {
    linkName: 'Price List',
    linkPath: 'pricelist',
    unique: false,
  },
  {
    linkName: 'Surroundings',
    linkPath: 'surroundings',
    unique: true,
  },
  {
    linkName: 'Apartments',
    linkPath: 'apartments',
    unique: true,
  },
];
