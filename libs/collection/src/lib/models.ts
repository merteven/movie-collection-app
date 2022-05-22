export interface Collection {
  id: string;
  name: string;
  username: string;
}

export interface CollectionPage {
  content: Collection[];
  totalElements: number;
}

export interface CollectionItem {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;
}
