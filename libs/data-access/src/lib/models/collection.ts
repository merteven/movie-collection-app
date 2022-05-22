export interface CollectionDTO {
  id: number;
  name: string;
  username: string;
}

export interface MovieDTO {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;
}

export interface CollectionPage {
  content: CollectionDTO[];
  totalElements: number;
}

export interface MoviePage {
  content: MovieDTO[];
  totalElements: number;
}
