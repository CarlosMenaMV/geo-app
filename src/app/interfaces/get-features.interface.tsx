export interface Coordinates {
  longitude: string;
  latitude: string;
}

export interface FeatureAttributes {
  external_id: string;
  magnitude: string;
  place: string;
  time: string;
  tsunami: boolean;
  mag_type: string;
  title: string;
  coordinates: Coordinates;
}

export interface FeatureLinks {
  external_url: string;
}

export interface Feature {
  id: number;
  type: string;
  attributes: FeatureAttributes;
  links: FeatureLinks;
  comments: Comment[];
}

export interface Comment {
  id: number;
  text: string;
  created_at: Date;
}

export interface Pagination {
  current_page: number;
  per_page: number;
  total: number;
}

export interface GetGeoListResponse {
  pagination: Pagination;
  data: Feature[];
}
