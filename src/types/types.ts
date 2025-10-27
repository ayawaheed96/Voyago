export interface Room {
  id: string;
  name: string;
  status: string;
  price: number;
  image: string;
  type: string;
  description: string;
  available: boolean;
}
export interface Reservation {
  id: string;
  roomId: string;
  name: string;
  date: { checkIn: Date; checkOut: Date };
  price: number;
  image: string;
}
