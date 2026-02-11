export type TravelLocation = {
  id: string;
  name: string;
  country: string;
  lat: number;
  lng: number;
  period?: string;
  note?: string;
};

export const travelLocations: TravelLocation[] = [
  { id: "zhoushan", name: "Zhoushan", country: "China", lat: 29.9853899, lng: 122.20778, period: "Hometown", note: "Hometown" },
  { id: "charlotte", name: "Charlotte, NC", country: "USA", lat: 35.227085, lng: -80.843124, period: "High School" },
  { id: "st-louis", name: "St. Louis, MO", country: "USA", lat: 38.627, lng: -90.1994, period: "Undergraduate" },
  { id: "toronto", name: "Toronto, ON", country: "Canada", lat: 43.6532, lng: -79.3832, period: "Graduate" },
  { id: "pittsburgh", name: "Pittsburgh, PA", country: "USA", lat: 40.440624, lng: -79.995888, period: "09/2023" },
  { id: "new-york", name: "New York, NY", country: "USA", lat: 40.7128, lng: -74.006, period: "01/2019, 11/2022, 02/2023" },
  { id: "washington-dc", name: "Washington, DC", country: "USA", lat: 38.9072, lng: -77.0369, period: "03/2023" },
  { id: "boston", name: "Boston, MA", country: "USA", lat: 42.3601, lng: -71.0589, period: "05/2022" },
  { id: "chicago", name: "Chicago, IL", country: "USA", lat: 41.8781, lng: -87.6298, period: "01/2020" },
  { id: "miami", name: "Miami, FL", country: "USA", lat: 25.7617, lng: -80.1918, period: "03/2023" },
  { id: "san-francisco", name: "San Francisco, CA", country: "USA", lat: 37.7749, lng: -122.4194, period: "05/2023" },
  { id: "zurich", name: "Zurich", country: "Switzerland", lat: 47.3769, lng: 8.5417, period: "12/2022" },
  { id: "milan", name: "Milan", country: "Italy", lat: 45.4642, lng: 9.19, period: "12/2022" },
  { id: "rome", name: "Rome", country: "Italy", lat: 41.9028, lng: 12.4964, period: "12/2022" }
];
