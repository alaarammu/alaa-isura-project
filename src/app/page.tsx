import Image from 'next/image';
import image1 from "../assets/photos/setting.png";
import image2 from "../assets/photos/itc_banner.png";
import CardGroup from '../components/slider-card-group/cardGroup';
import Link from 'next/link';

export default function Home() {
  const cards = [
    {
      image: image1,
      title: "Software Engineer",
      description: "Software is a collection of programs and data that tell a computer"
    },
    {
      image: image1,
      title: "Software Engineer",
      description: "Software is a collection of programs and data that tell a computer"
    },
    {
      image: image1,
      title: "Software Engineer",
      description: "Software is a collection of programs and data that tell a computer"
    }
  ];
  
  return (
    <>
      <div className="relative bg-purple-950">
        <Image alt="" src={image2} layout="responsive" width={1000} height={350} />
        <div className="absolute top-1/4 left-8 text-purple-500 pt-3 pr-4 pb-3 pl-4 bg-opacity-90 rounded-xl">
          <h1 className="text-5xl font-bold">Got a Question?</h1>
          <p className="text-2xl mb-7">You ask, your colleagues answer.</p>
          <Link href="./dashboard" legacyBehavior>
            <a className="bg-purple-400 text-white pt-2 pb-2 pl-4 pr-4 rounded-full hover:bg-purple-500">
              Start Browsing
            </a>
          </Link>
        </div>
      </div>
      <CardGroup cards={cards} />
    </>
  );
}
