
export interface ApartmentDetails {
  _id: string;
  apartmentShortName: string;
  apartmentName: string;
  apartmentDescription: string;
  address: string;
  language: string;
  facilities: {
    ac?: string;
    freeWifi?: string;
    heating?: string;
    laundry?: string;
    parking?: string;
    saTV?: string;
    smoking?: string;
  };
  note: string;
  bookingLink: string;
  minStay?: number;
}
