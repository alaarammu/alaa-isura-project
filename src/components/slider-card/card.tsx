import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white/10 duration-200 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity flex flex-col items-center justify-center">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className='max-auto'
      />
      <h4 className="uppercase text-xl font-bold text-white">{title}</h4>
      <p className='text-sm leading-7 my-3 font-light opacity-50 text-white'>{description}</p>
    </div>
  );
};

export default Card;
