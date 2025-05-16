// data/districts.ts
export interface District {
  name: string;
  slug: string;
  image: string;
  description: string;
}

export const districts: District[] = [
  {
    name: "Dhaka",
    slug: "dhaka",
    image: "/img/dhaka.avif",
    description: "Dhaka is the capital of Bangladesh...",
  },
  {
    name: "Chattogram",
    slug: "chattogram",
    image: "/img/chittagong.jpg",
    description: "Chattogram is a major coastal city...",
  },
  {
    name: "Khulna",
    slug: "khulna",
    image: "/img/khulna.avif",
    description: "Khulna is known for its natural beauty...",
  },
  {
    name: "Rajshahi",
    slug: "rajshahi",
    image: "/img/rajshahi.webp",
    description: "Rajshahi is famous for its mangoes...",
  },
  {
    name: "Barishal",
    slug: "barishal",
    image: "/img/barishal.jpg",
    description: "Barishal is known for its rivers and waterways...",
  },
  {
    name: "Sylhet",
    slug: "sylhet",
    image: "/img/sylhet.jpg",
    description: "Sylhet is famous for its tea gardens...",
  },
  {
    name: "Rangpur",
    slug: "rangpur",
    image: "/img/rangpur.jpg",
    description: "Sylhet is famous for its tea gardens...",
  },
  {
    name: "Mymensingh",
    slug: "mymensingh",
    image: "/img/mymensingh.webp",
    description: "Sylhet is famous for its tea gardens...",
  },
];
