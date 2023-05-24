export interface ISeries {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  photos: { id: string; url: string; price: string }[];
  active: boolean;
}

export interface IFrame {
  id: string;
  title: string;
  price: string;
  url: string;
}
