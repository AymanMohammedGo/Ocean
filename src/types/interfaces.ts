export interface Clinet {
  imageUrl: string;
  alt: string;
}
export interface Feature {
  imageUrl: string;
  title: string;
  content: string;
}
export interface featureBlock extends Feature {
  isReversed?: boolean;
}
