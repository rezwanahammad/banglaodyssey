import { notFound } from "next/navigation";

type Spot = {
  name: string;
  image: string;
  details: string;
};

type District = {
  name: string;
  slug: string;
  description: string;
  image: string;
  spots: Spot[];
};

async function getDistrict(slug: string): Promise<District | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/districts-by-slug/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function DistrictPage({ params }: { params: { slug: string } }) {
  const district = await getDistrict(params.slug);

  if (!district) return notFound();

  return (
    <div className="p-6 min-h-screen bg-yellow-50 text-gray-800">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-yellow-700 drop-shadow-sm">
      {district.name}
    </h1>

    <div className="flex justify-center mb-8">
      <img
        src={district.image}
        alt={district.name}
        className="w-full md:w-2/3 lg:w-1/2 h-64 object-cover rounded-xl shadow-lg border border-yellow-200"
      />
    </div>

    <p className="mb-10 text-lg leading-relaxed text-gray-700 text-justify">
      {district.description}
    </p>

    <h2 className="text-2xl font-bold mb-4 text-yellow-600 border-b-2 border-yellow-300 pb-2">
      Tourist Spots
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {district.spots.map((spot, index) => (
        <div
          key={index}
          className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200 transform transition hover:scale-[1.015] hover:shadow-lg duration-300"
        >
          <img
            src={spot.image}
            alt={spot.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-yellow-800 mb-1">{spot.name}</h3>
            <p className="text-sm text-gray-600">{spot.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
