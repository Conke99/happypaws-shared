export interface SetPricingRequest {
  items: {
    service: string;
    priceMin: number;
    priceMax: number;
  }[];
}
