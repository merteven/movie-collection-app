export interface Collection {
  id: number;
  name: string;
  username: string;
}

interface Page<T> {
  content: T[];
  totalElements: number;
}

export type CollectionPage = Page<Collection>;

export interface CollectionItem {
  id: number;
  title: string;
  overview: string;
  posterUrl: string;
}

export type CollectionItemPage = Page<CollectionItem>;
