"use client";

import React from "react";

const divisions = [
  {
    name: "Dhaka",
    area: "20,509 sq km",
    population: "39 million",
    districts: [
      "Dhaka",
      "Faridpur",
      "Gazipur",
      "Gopalganj",
      "Kishoreganj",
      "Madaripur",
      "Manikganj",
      "Munshiganj",
      "Narayanganj",
      "Narsingdi",
      "Rajbari",
      "Shariatpur",
      "Tangail",
    ],
  },
  {
    name: "Chittagong",
    area: "33,771 sq km",
    population: "28 million",
    districts: [
      "Chittagong",
      "Bandarban",
      "Brahmanbaria",
      "Comilla",
      "Cox's Bazar",
      "Feni",
      "Khagrachari",
      "Lakshmipur",
      "Noakhali",
      "Rangamati",
    ],
  },
  {
    name: "Rajshahi",
    area: "18,174 sq km",
    population: "19 million",
    districts: [
      "Rajshahi",
      "Bogura",
      "Joypurhat",
      "Naogaon",
      "Natore",
      "Chapainawabganj",
      "Pabna",
      "Sirajganj",
    ],
  },
  {
    name: "Khulna",
    area: "22,285 sq km",
    population: "15 million",
    districts: [
      "Khulna",
      "Bagerhat",
      "Chuadanga",
      "Jessore",
      "Jhenaidah",
      "Kushtia",
      "Magura",
      "Meherpur",
      "Narail",
      "Satkhira",
    ],
  },
  {
    name: "Barisal",
    area: "13,644 sq km",
    population: "9 million",
    districts: [
      "Barisal",
      "Barguna",
      "Bhola",
      "Jhalokati",
      "Patuakhali",
      "Pirojpur",
    ],
  },
  {
    name: "Sylhet",
    area: "12,596 sq km",
    population: "10 million",
    districts: ["Sylhet", "Habiganj", "Moulvibazar", "Sunamganj"],
  },
  {
    name: "Rangpur",
    area: "16,185 sq km",
    population: "17 million",
    districts: [
      "Rangpur",
      "Dinajpur",
      "Gaibandha",
      "Kurigram",
      "Lalmonirhat",
      "Nilphamari",
      "Panchagarh",
      "Thakurgaon",
    ],
  },
  {
    name: "Mymensingh",
    area: "10,485 sq km",
    population: "11 million",
    districts: ["Mymensingh", "Jamalpur", "Netrokona", "Sherpur"],
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white/95 px-4 py-10 max-w mx-auto text-gray-800">
      {/* Bangladesh Overview */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About Bangladesh
        </h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          Bangladesh is a beautiful South Asian country known for its rich
          culture, rivers, and vibrant people. It has an area of{" "}
          <strong>147,570 sq km</strong> and a population of over{" "}
          <strong>170 million</strong>. The capital is <strong>Dhaka</strong>,
          and the official language is Bengali. Bangladesh is divided into 8
          administrative divisions and 64 districts.
        </p>
      </section>

      {/* Division Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 px-4">
        {divisions.map((division, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              {division.name}
            </h2>
            <p className="text-gray-700">
              <span className="font-medium">Area:</span> {division.area}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Population:</span>{" "}
              {division.population}
            </p>
            <div>
              <h3 className="text-green-700 font-medium mt-3 mb-1 text-sm uppercase">
                Districts
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-1">
                {division.districts.map((district, i) => (
                  <li key={i}>{district}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Map Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold mb-4 text-green-700 text-center">
          Map of Bangladesh
        </h2>
        <div className="w-[400px] h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-200 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689813.9821625883!2d88.02715676076954!3d23.685025224193837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37543f2952b8f0d3%3A0x234262e9c04fdfc4!2sBangladesh!5e0!3m2!1sen!2sbd!4v1715854992891!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
