import Card from './card';
import shirts from '@/public/data/shirts.json';
import { shuffle } from '../lib/utilities';
import { Shirt } from '../lib/definitions';

export default async function Deck(props: PageProps<any>) {
  // Check if shirts is an array before mapping to avoid errors
  if (!Array.isArray(shirts)) {
    return <p>No products available.</p>;
  }
  const arrayLimit = 20;
  const searchParams = await props.searchParams;
  let color = searchParams.color;
  let cat = searchParams.cat;
  let resultArray: Array<Shirt> = [];
  let headingText = "";
  shirts.forEach((shirt) => {
    if(cat) {
      if(Array.isArray(cat)) {
        cat = cat[0];
      }
      if(shirt.tag_array.includes(cat)) {
        resultArray.push(shirt);
      }
    } else if(color) {
      if(shirt.color == color) {
        resultArray.push(shirt);
      }
    } else {
      resultArray.push(shirt);
    }
    resultArray = shuffle(resultArray);
  })
  headingText = "Shirts in filter: " + resultArray.length;
  if (!cat && !color) {
    headingText = "Shirts in inventory: " + resultArray.length + " (limit " + arrayLimit + ")";
    resultArray = resultArray.slice(0, arrayLimit);
  }

  if(resultArray && resultArray.length > 0) {
    return (
      <div>
        <h2 className="mb-3">{headingText}</h2>
        <div className="flex gap-3 items-center flex-row flex-wrap">
          {resultArray.map((shirt) => {
            return (
              <Card
                key={shirt.id}
                id={shirt.id}
                title={shirt.title}
                image={shirt.image}
                description={shirt.description}
                color={shirt.color}
                sleeves={shirt.sleeves}
                tag_array={shirt.tag_array}
                archived={shirt.archived}
              />
            )
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div><p>No results found for selected filter.</p></div>
    )
  }
}