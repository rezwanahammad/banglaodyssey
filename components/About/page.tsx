import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Aboutpage = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 py-12 bg-yellow-50">
      <div className="bg-gray-200 p-6 rounded-lg shadow-md max-w-3xl w-full">
        <p className="text-lg leading-relaxed text-gray-800 text-center">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-amber-500 w-4 h-4 text-sm inline-block mr-2"
          />
          <strong>Bangladesh</strong> is a vibrant South Asian country known for
          its rich cultural heritage, deeply rooted in Bengali traditions,
          music, art, and literature. Predominantly a Muslim-majority nation, it
          embraces religious harmony with thriving Hindu, Buddhist, and
          Christian communities. The country boasts stunning natural beauty—from
          the world's largest mangrove forest, the Sundarbans, to the serene
          beaches of Cox’s Bazar and lush green hills of Sylhet. Traditional
          festivals like Pahela Baishakh and Durga Puja reflect its colorful and
          diverse cultural fabric. With fertile lands and a deeply hospitable
          people, Bangladesh is a land of resilience, warmth, and beauty.
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="text-amber-500 w-4 h-4 text-sm ml-2 inline-block "
          />
        </p>
      </div>
    </div>
  );
};

export default Aboutpage;
