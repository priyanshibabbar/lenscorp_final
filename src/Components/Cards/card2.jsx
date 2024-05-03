import React from 'react';
import card2Data from './Card2data';

const Card = ({ title, description,imageUrl, headingColor, cardNumber }) => {
  // Extract the color code from the headingColor class
  const colorCode = headingColor.split('-')[1];

  return (
    <div
      className={`bg-white w-[380px] h-[450px] mt-8 flex flex-col rounded-lg text-center border border-gray-300 text-black relative overflow-hidden hover:bg-[${headingColor}] transition-colors duration-500`}
    >
      <div className="absolute top-2 left-2 flex items-center transition-all duration-500 hover:translate-x-5">
        <div className="text-6xl font-bold mr-2 text-gray-500">
          {cardNumber}
        </div>
        <div
          className={`text-2xl font-bold transition-all duration-500 hover:translate-x-5  ${headingColor}`}
        >
          <h2 style={{ width: '220px' }}>{title}</h2>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center ">
        <img
          src={`${imageUrl}`}
          alt={`${title} illustration`}
          className="w-40 h-40 mt-12"
        />
      </div>
      <div className="flex-grow flex flex-col justify-between p-4">
        <p className="text-lg mb-4 text-black text-justify font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

const CardList2 = () => {
  return (
    <div className="flex flex-row gap-8 justify-center overflow-x-auto">
      {card2Data.map((card, index) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          headingColor={
            card.id === 5
              ? 'text-green-400'
              : card.id === 6
              ? 'text-sky-400'
              : card.id === 7
              ? 'text-fuchsia-400'
              : 'text-orange-400'
          }
          cardNumber={`0${index + 1}`}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList2;