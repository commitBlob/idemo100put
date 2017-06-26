/* Navigation builder for general page */

// App specific
import { NavLinks } from './navigation-links.interface';

export const Navigation: NavLinks[] = [
  {
    linkName: 'Home',
    linkPath: '../welcome',
    linkIcon: 'home',
    unique: true,
  },
  {
    linkName: 'About Us',
    linkPath: '+about-us',
    linkIcon: 'people',
    unique: true,
  },
  {
    linkName: 'Contact Us',
    linkPath: '+contact-us',
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
    linkName: 'Surroundings',
    linkPath: 'surroundings',
    linkIcon: 'landscape',
    unique: true,
  },
];

export const ApartmentsNav: NavLinks[] = [
  {
    linkName: 'Home',
    linkPath: '../welcome',
    linkIcon: 'home',
    unique: true,
  },
  {
    linkName: 'Facilities',
    linkPath: 'facilities',
    linkIcon: 'list',
    unique: false,
  },
  {
    linkName: 'Location',
    linkPath: '/+apartments/+location',
    linkIcon: 'place',
    unique: true,
  },
  {
    linkName: 'Policy',
    linkPath: '/+apartments/policy',
    linkIcon: 'content_paste',
    unique: true,
  },
  {
    linkName: 'Price List',
    linkPath: 'pricelist',
    linkIcon: 'local_atm',
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


export const GlobalNavigation: NavLinks[] = [
  {
    linkName: 'About Us',
    linkPath: '+about-us',
    linkIcon: 'people',
    unique: true,
  },
  {
    linkName: 'Contact Us',
    linkPath: '+contact-us',
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
    linkName: 'Surroundings',
    linkPath: 'surroundings',
    linkIcon: 'landscape',
    unique: true,
  },
  {
    linkName: 'Facilities',
    linkPath: 'facilities',
    linkIcon: 'list',
    unique: false,
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
    linkName: 'Price List',
    linkPath: 'pricelist',
    linkIcon: 'local_atm',
    unique: false,
  }
]
