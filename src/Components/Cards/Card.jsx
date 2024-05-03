import React from "react";
import cardData from "./CardData";

const Card = ({ title, description, headingColor, cardNumber }) => {
  // Extract the color code from the headingColor class
  const colorCode = headingColor.split("-")[1];

  return (
    <div
      className={`bg-white w-full sm:w-[380px] h-[300px] flex flex-col quicksand rounded-md text-center border text-black relative overflow-hidden hover:bg-[${headingColor}] transition-colors duration-500`}
    >
      <div className="absolute top-2 left-2 flex items-center transition-all duration-500 hover:translate-x-5">
        <div className="text-6xl quicksand font-bold mr-2 text-gray-500">
          {cardNumber}
        </div>
        <div
          className={`text-2xl font-bold transition-all duration-500 hover:translate-x-5 ${headingColor}`}
        >
          <h2 style={{ width: "220px" }}>{title}</h2>
        </div>
      </div>
      <div className="flex-grow quicksand flex flex-col justify-end p-4 transition-all duration-500 hover:translate-x-5">
        <p className="text-lg mb-4 quicksand text-left text-black transition-all duration-500 hover:translate-x-5">
          {description}
        </p>
      </div>
    </div>
  );
};

const CardList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center mb-10">
      {cardData.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          headingColor={
            card.id === 1
              ? "text-green-400 font-semibold"
              : card.id === 2
              ? "text-sky-400 font-semibold"
              : card.id === 3
              ? "text-fuchsia-400 font-semibold"
              : "text-orange-400 font-semibold"
          }
          cardNumber={`0${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CardList;
