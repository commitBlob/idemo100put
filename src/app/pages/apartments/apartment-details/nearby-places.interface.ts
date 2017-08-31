export interface NearbyPlaces {
  _id: string;
  // need this in order to filter by apartment
  apartmentName: string;
  placeName: string;
  imeLokacije: string;
  distance: number;
  icon: string;
}
