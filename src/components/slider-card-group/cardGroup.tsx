import React from 'react';
import Card from '../slider-card/card';
import { StaticImageData } from 'next/image';

interface CardData {
  image: StaticImageData;
  title: string;
  description: string;
}

interface CardGroupProps {
  cards: CardData[];
}

const CardGroup: React.FC<CardGroupProps> = ({ cards }) => {
  return (
    <div className='flex bg-purple-950'>
      <div className="flex bg-purple-950 max-w-5xl mx-auto gap-8 pt-5 pb-5 group">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGroup;
