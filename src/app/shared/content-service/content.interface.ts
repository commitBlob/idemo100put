export interface Content {
  _id: string;
  language: string;
  header: string;
  content: string;
  note?: string;
  ECB?: string;
  image?: string;
  disabled?: boolean;
}
