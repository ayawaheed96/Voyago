import logo from "./logo.svg";
import colorLogo from "./color-logo.svg";
import menu from "./menu.svg";
import type { Room } from "../types/types";

export const assets = {
  logo,
  colorLogo,
  menu,
};

export const mockUsers = [
  { name: "aya", username: "aya@gmail.com", password: "1234" },
  { name: "test", username: "test@gmail.com", password: "1234" },
];

export const rooms: Room[] = [
  {
    id: "1",
    name: "Deluxe Room",
    status: "clean",
    price: 200,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    type: "Double",
    description:
      "A spacious room with a comfortable double bed and modern interior.",
    available: true,
  },
  {
    id: "2",
    name: "Single Standard",
    status: "occupied",
    price: 120,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    type: "Single",
    description:
      "Cozy room perfect for solo travelers with essential amenities.",
    available: false,
  },
  {
    id: "3",
    name: "Family Suite",
    status: "cleaning",
    price: 350,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    type: "Suite",
    description:
      "Large suite suitable for families, includes 2 bedrooms and a living area.",
    available: false,
  },
  {
    id: "4",
    name: "Premium King Room",
    status: "clean",
    price: 480,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    type: "Suite",
    description: "Luxury king-sized room with balcony and city view.",
    available: true,
  },
  {
    id: "5",
    name: "Twin Sharing",
    status: "maintenance",
    price: 150,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    type: "Single",
    description: "Comfortable room with two separate beds, ideal for friends.",
    available: false,
  },
  {
    id: "6",
    name: "Elegant King",
    status: "maintenance",
    price: 450,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    type: "Suite",
    description: "Comfortable room with two separate beds, ideal for friends.",
    available: true,
  },
  {
    id: "7",
    name: "Cozy Loft",
    status: "maintenance",
    price: 180,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    type: "Single",
    description: "Comfortable room with two separate beds, ideal for friends.",
    available: true,
  },
  {
    id: "8",
    name: "Minimal Room",
    status: "maintenance",
    price: 100,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    type: "Single",
    description: "Comfortable room with two separate beds, ideal for friends.",
    available: true,
  },
];
