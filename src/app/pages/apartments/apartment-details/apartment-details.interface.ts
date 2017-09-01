// TODO: add more facilities

export interface ApartmentDetails {
  _id: string;
  apartmentShortName: string;
  apartmentName: string;
  apartmentDescription: string;
  address: string;
  language: string;
  facilities: {
    ac?: string;
    childFriendly?: string;
    freeWifi?: string;
    heating?: string;
    kitchen?: string;
    laundry?: string;
    parking?: string;
    saTV?: string;
    smoking?: string;
  };
  note: string;
  bookingLink: string;
}
