/* eslint-disable react/prop-types */ //
import CoffeeTemplate from "./home/CoffeeTemplate";
import CopyWrite from "./navigation/CopyWrite";
const coffeeData = [
  {
    name: "House Blend Coffee",
    imgSrc: "/images/house-blend.jpeg",
    link: "https://en.wikipedia.org/wiki/Coffee",
    key: "234",
  },
  {
    name: "French Roast",
    imgSrc: "/images/french-roast.jpeg",
    key: "455",
    link: "https://en.wikipedia.org/wiki/French_Roast",
  },
  {
    name: "Columbian Roast",
    imgSrc: "/images/columbian-roast.jpeg",
    key: "455",
    link: "https://en.wikipedia.org/wiki/Coffee_production_in_Colombia",
  },
];

export default function Home() {
  return (
    <>
      <h2>Featured Product</h2>
      <br />
      <br />
      {coffeeData.map((ele) => (
        <CoffeeTemplate
          key={ele.key}
          name={ele.name}
          imgSrc={ele.imgSrc}
          link={ele.link}
        />
      ))}

      <CopyWrite />
    </>
  );
}
