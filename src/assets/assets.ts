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
      "Designed with sophistication and ease in mind, this room blends contemporary elegance with practical comfort. Large windows allow natural light to fill the space, highlighting refined finishes and stylish furniture. Enjoy a restful night in a premium bed with plush bedding, or take advantage of the modern amenities that enhance your stay, including fast Wi-Fi, an entertainment system, and a private bathroom featuring high-end bath products. Whether you're here on business or vacation, this room is crafted to help you feel refreshed, inspired, and completely at home—offering an experience of tranquility, privacy, and understated luxury.",
    available: true,
  },
  {
    id: "2",
    name: "Single Standard",
    status: "occupied",
    price: 120,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    type: "Single",
    description:
      "Designed with sophistication and ease in mind, this room blends contemporary elegance with practical comfort. Large windows allow natural light to fill the space, highlighting refined finishes and stylish furniture. Enjoy a restful night in a premium bed with plush bedding, or take advantage of the modern amenities that enhance your stay, including fast Wi-Fi, an entertainment system, and a private bathroom featuring high-end bath products. Whether you're here on business or vacation, this room is crafted to help you feel refreshed, inspired, and completely at home—offering an experience of tranquility, privacy, and understated luxury.",
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
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: false,
  },
  {
    id: "4",
    name: "Premium King Room",
    status: "clean",
    price: 480,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    type: "Suite",
    description:
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: true,
  },
  {
    id: "5",
    name: "Twin Sharing",
    status: "maintenance",
    price: 150,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    type: "Single",
    description:
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: false,
  },
  {
    id: "6",
    name: "Elegant King",
    status: "maintenance",
    price: 450,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    type: "Suite",
    description:
      "Designed with sophistication and ease in mind, this room blends contemporary elegance with practical comfort. Large windows allow natural light to fill the space, highlighting refined finishes and stylish furniture. Enjoy a restful night in a premium bed with plush bedding, or take advantage of the modern amenities that enhance your stay, including fast Wi-Fi, an entertainment system, and a private bathroom featuring high-end bath products. Whether you're here on business or vacation, this room is crafted to help you feel refreshed, inspired, and completely at home—offering an experience of tranquility, privacy, and understated luxury.",
    available: true,
  },
  {
    id: "7",
    name: "Cozy Loft",
    status: "maintenance",
    price: 180,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    type: "Single",
    description:
      "Designed with sophistication and ease in mind, this room blends contemporary elegance with practical comfort. Large windows allow natural light to fill the space, highlighting refined finishes and stylish furniture. Enjoy a restful night in a premium bed with plush bedding, or take advantage of the modern amenities that enhance your stay, including fast Wi-Fi, an entertainment system, and a private bathroom featuring high-end bath products. Whether you're here on business or vacation, this room is crafted to help you feel refreshed, inspired, and completely at home—offering an experience of tranquility, privacy, and understated luxury.",
    available: true,
  },
  {
    id: "8",
    name: "Minimal Room",
    status: "clean",
    price: 100,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    type: "Single",
    description:
      "This room has been thoughtfully designed to offer a calm and comfortable stay for every guest. With warm lighting, soft textures, and a welcoming ambiance, it provides the perfect retreat after a day of travel, work, or exploring the city. The spacious layout allows you to move freely, while the cozy seating area creates an inviting spot to unwind with a book, cup of coffee, or your favorite show. Whether you're traveling alone, as a couple, or with loved ones, this room ensures a soothing environment where comfort meets style. Every detail—from the carefully selected décor to the high-quality linens—was chosen to make your stay feel effortless and relaxing.",
    available: true,
  },
  {
    id: "9",
    name: "Deluxe Suite View",
    status: "clean",
    price: 420,
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    type: "Suite",
    description:
      "This room has been thoughtfully designed to offer a calm and comfortable stay for every guest. With warm lighting, soft textures, and a welcoming ambiance, it provides the perfect retreat after a day of travel, work, or exploring the city. The spacious layout allows you to move freely, while the cozy seating area creates an inviting spot to unwind with a book, cup of coffee, or your favorite show. Whether you're traveling alone, as a couple, or with loved ones, this room ensures a soothing environment where comfort meets style. Every detail—from the carefully selected décor to the high-quality linens—was chosen to make your stay feel effortless and relaxing.",
    available: true,
  },
  {
    id: "10",
    name: "Executive Single",
    status: "occupied",
    price: 160,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    type: "Single",
    description: "Comfortable room designed for business travelers.",
    available: false,
  },
  {
    id: "11",
    name: "Royal Family Suite",
    status: "cleaning",
    price: 520,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    type: "Suite",
    description: "Grand suite perfect for families needing extra space.",
    available: false,
  },
  {
    id: "12",
    name: "King Deluxe Balcony",
    status: "clean",
    price: 500,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    type: "Suite",
    description:
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: true,
  },
  {
    id: "13",
    name: "Twin Comfort",
    status: "maintenance",
    price: 140,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    type: "Double",
    description:
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: false,
  },
  {
    id: "14",
    name: "Modern King Suite",
    status: "clean",
    price: 460,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    type: "Suite",
    description:
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: true,
  },
  {
    id: "15",
    name: "City Loft",
    status: "clean",
    price: 210,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    type: "Single",
    description:
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: true,
  },
  {
    id: "16",
    name: "Minimal Comfort",
    status: "occupied",
    price: 110,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
    type: "Single",
    description:
      "This room offers a peaceful atmosphere that feels both inviting and familiar, making it easy to settle in from the moment you arrive. The soft color palette, comfortable furnishings, and thoughtful layout create a relaxing retreat that feels like a home away from home. Enjoy quiet mornings with natural light drifting in, or restful evenings wrapped in comfortable bedding. The room includes everything you need for a smooth and pleasant stay—from storage space to modern essentials—allowing you to relax freely and focus on enjoying your trip. Whether staying short-term or settling in for a longer visit, this space provides warmth, comfort, and genuine coziness.",
    available: false,
  },
];
