import { StaticImageData } from 'next/image';
import event01 from '../assets/images/event01.jpg';
import event02 from '../assets/images/event02.jpg';

export interface Event {
  id: number;
  title: string;
  category?: string;
  price?: number;
  description: string;
  imageUrl: StaticImageData;
  date: string;
  time?: string;
  location?: string;
  spots?: number;
}

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 1,
    title: "Beginner's Resin Art Workshop",
    category: "Beginner",
    price: 125,
    description: "Learn the basics of resin art in this hands-on workshop. Create your own small resin piece to take home.",
    imageUrl: event01,
    date: "September 16, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "ArtisanCraft Studio",
    spots: 8,
  },
  {
    id: 2,
    title: "Chess Board Crafting Masterclass",
    category: "Intermediate",
    price: 285,
    description: "Master the art of creating beautiful chess boards with resin inlays. This full-day intensive covers everything from wood selection to finishing touches.",
    imageUrl: event02,
    date: "September 22, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "ArtisanCraft Studio",
    spots: 6,
  },
  {
    id: 3,
    title: "Woodworking Fundamentals",
    category: "Beginner",
    price: 95,
    description: "Perfect for beginners! Learn essential woodworking techniques, tool safety, and create a simple project.",
   imageUrl: event01,
    date: "September 29, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "ArtisanCraft Studio",
    spots: 10,
  },
];

export const RECENT_EVENTS: Event[] = [
  {
    id: 4,
    title: "Summer Resin Art Festival",
    description: "A fantastic day of resin art demonstrations and community creativity.",
   imageUrl: event01,
    date: "August 12, 2025",
  },
  {
    id: 5,
    title: "Advanced Furniture Making Workshop",
    description: "Participants created stunning live-edge tables with resin rivers.",
    imageUrl: event02,
    date: "July 28, 2025",
  },
];