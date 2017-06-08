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
    linkName: 'Surroundings',
    linkPath: 'surroundings',
    unique: true,
  }
];

export const ApartmentsNav: NavLinks[] = [
  {
    linkName: 'Home',
    linkPath: '../welcome',
    linkIcon: 'fa-home',
    unique: true,
  },
  {
    linkName: 'Facilities',
    linkPath: 'facilities',
    unique: false,
  },
  {
    linkName: 'Location',
    linkPath: '/apartments/location',
    unique: true,
  },
  {
    linkName: 'Policy',
    linkPath: '/apartments/policy',
    unique: true,
  },
  {
    linkName: 'Price List',
    linkPath: 'pricelist',
    unique: false,
  },
];

export const ApartmentSelectorNav: NavLinks[] = [
  {
    linkName: 'Lavanda',
    linkPath: 'lavanda',
    unique: true,
  },
  {
    linkName: 'Love & Hope',
    linkPath: 'love-and-hope',
    unique: true,
  },
  {
    linkName: 'Old Port',
    linkPath: 'old-port',
    unique: true,
  },
  {
    linkName: 'Old Town',
    linkPath: 'old-town',
    unique: true,
  }
];
