// TODO: add more facilities

export interface ApartmentDetails {
  _id: string;
  apartmentShortName: string;
  apartmentName: string;
  apartmentDescription: string;
  address: string;
  language: string;
  facilities: {
    freeWifi: boolean;
    parking: boolean;
  };
  note: string;
  bookingLink: string;
}
