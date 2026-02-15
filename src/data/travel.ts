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
  { id: "zhoushan", name: "舟山", country: "中国", lat: 29.9853899, lng: 122.20778, period: "家乡", note: "家乡" },
  { id: "charlotte", name: "夏洛特", country: "美国", lat: 35.227085, lng: -80.843124, period: "高中" },
  { id: "st-louis", name: "圣路易斯", country: "美国", lat: 38.627, lng: -90.1994, period: "本科" },
  { id: "toronto", name: "多伦多", country: "加拿大", lat: 43.6532, lng: -79.3832, period: "研究生" },
  { id: "pittsburgh", name: "匹兹堡", country: "美国", lat: 40.440624, lng: -79.995888, period: "09/2023" },
  { id: "new-york", name: "纽约", country: "美国", lat: 40.7128, lng: -74.006, period: "01/2019, 11/2022, 02/2023" },
  { id: "washington-dc", name: "华盛顿", country: "美国", lat: 38.9072, lng: -77.0369, period: "03/2023" },
  { id: "boston", name: "波士顿", country: "美国", lat: 42.3601, lng: -71.0589, period: "05/2022" },
  { id: "chicago", name: "芝加哥", country: "美国", lat: 41.8781, lng: -87.6298, period: "01/2020" },
  { id: "miami", name: "迈阿密", country: "美国", lat: 25.7617, lng: -80.1918, period: "03/2023" },
  { id: "san-francisco", name: "旧金山", country: "美国", lat: 37.7749, lng: -122.4194, period: "05/2023" },
  { id: "zurich", name: "苏黎世", country: "瑞士", lat: 47.3769, lng: 8.5417, period: "12/2022" },
  { id: "milan", name: "米兰", country: "意大利", lat: 45.4642, lng: 9.19, period: "12/2022" },
  { id: "rome", name: "罗马", country: "意大利", lat: 41.9028, lng: 12.4964, period: "12/2022" }
];
