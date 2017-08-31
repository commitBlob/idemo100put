export interface NearbyPlaces {
  _id: string;
  // need this in order to filter by apartment
  apartmentName: string;
  placeName: string;
  //  Croatian location name, would rather have extra field over another backend call
  imeLokacije: string;
  distance: number;
  icon: string;
}
