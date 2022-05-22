export interface Collection {
  id: string;
  name: string;
  username: string;
}

export interface CollectionPage {
  content: Collection[];
  totalElements: number;
}
