import Image from 'next/image'
import image1 from "../assets/photos/setting.png";
import CardGroup from '../components/slider-card-group/cardGroup';
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
    <div className="bg-purple-950"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
      }}
    >
      <Image alt="" width={100}
        height={100} src={image1}/>
      
    </div>
     <CardGroup cards={cards} />
    </>
  );
}
