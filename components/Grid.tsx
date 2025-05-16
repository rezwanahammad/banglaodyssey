"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type District = {
  name: string;
  slug: string;
  image: string;
};

export default function DistrictGrid() {
  const [districts, setDistricts] = useState<District[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/districts")
      .then((res) => res.json())
      .then(setDistricts)
      .catch(() => setError(true));
  }, []);

  if (error)
    return <p className="text-red-500 p-4">Failed to load districts.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 bg-yellow-50">
      {districts.map((district) => (
        <Link key={district.slug} href={`/districts/${district.slug}`}>
          <div className="ml-2 cursor-pointer transition hover:scale-105">
            <Image
              src={district.image}
              alt={district.name}
              width={300}
              height={200}
              className="rounded-md object-cover h-48 w-full "
            />
            <p className="mt-2 text-center font-medium text-green-700">{district.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
