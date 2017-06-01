import { NavLinks } from './navigation-links.interface';

export const Navigation: NavLinks[] = [
  {
    linkName: 'Home',
    linkPath: 'welcome',
    linkIcon: 'fa-home',
    unique: true,
    dropdown: false
  },
  {
    linkName: 'About Us',
    linkPath: 'about-us',
    unique: true,
    dropdown: false
  },
  {
    linkName: 'Contact Us',
    linkPath: 'contact-us',
    unique: true,
    dropdown: false
  },
  {
    linkName: 'Cro Facts',
    linkPath: 'cro-facts',
    unique: true,
    dropdown: false
  },
  {
    linkName: 'Du Facts',
    linkPath: 'du-facts',
    unique: true,
    dropdown: false
  },
  {
    linkName: 'Facilities',
    linkPath: 'facilities',
    unique: false,
    dropdown: false
  },
  {
    linkName: 'Lavanda',
    linkPath: 'lavanda',
    unique: false,
    dropdown: true
  },
  {
    linkName: 'Location',
    linkPath: 'location',
    unique: true,
    dropdown: false
  },
  {
    linkName: 'Love & Hope',
    linkPath: 'love-and-hope',
    unique: false,
    dropdown: true
  },
  {
    linkName: 'Old Port',
    linkPath: 'old-port',
    unique: false,
    dropdown: true
  },
  {
    linkName: 'Old Town',
    linkPath: 'old-town',
    unique: false,
    dropdown: true
  },
  {
    linkName: 'Policy',
    linkPath: 'policy',
    unique: true,
    dropdown: false
  },
  {
    linkName: 'Price List',
    linkPath: 'pricelist',
    unique: false,
    dropdown: false
  },
  {
    linkName: 'Surroundings',
    linkPath: 'surroundings',
    unique: true,
    dropdown: false
  },
];
