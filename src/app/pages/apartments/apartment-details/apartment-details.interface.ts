
export interface ApartmentDetails {
  _id?: string;
  shortName: string;
  name: string;
  description: string;
  address: string;
  language: string;
  facilities: {
    ac_unit?: string;
    wifi?: string;
    whatshot?: string;
    local_laundry_service?: string;
    local_parking?: string;
    tv?: string;
    smoke_free?: string;
  };
  note: string;
  bookingLink: string;
  minStay?: number;
}
