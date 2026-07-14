import Card from './card';
import pedals from '@/public/data/pedals.json';
import { shuffle } from '../lib/utilities';
import { Pedal } from '../lib/definitions';

export default async function Deck(props: PageProps<any>) {
  // Check if pedals is an array before mapping to avoid errors
  if (!Array.isArray(pedals)) {
    return <p>No products available.</p>;
  }
  const arrayLimit = 20;
  const searchParams = await props.searchParams;
  let color = searchParams.color;
  let type = searchParams.type;
  let brand = searchParams.brand;
  let resultArray: Array<Pedal> = [];
  let headingText = "";
  pedals.forEach((pedal) => {
    if(type) {
      if(Array.isArray(type)) {
        type = type[0];
      }
      if(pedal.type_array.includes(type)) {
        resultArray.push(pedal);
      }
    } else if(color) {
      if(pedal.color == color) {
        resultArray.push(pedal);
      }
    } else if(brand) {
      if(pedal.brand == brand) {
        resultArray.push(pedal);
      }
    } else {
      resultArray.push(pedal);
    }
    resultArray = shuffle(resultArray);
  })
  headingText = "Pedals in filter: " + resultArray.length;
  if (!type && !color && !brand) {
    headingText = "Pedals in inventory: " + resultArray.length + " (limit " + arrayLimit + ")";
    resultArray = resultArray.slice(0, arrayLimit);
  }

  if(resultArray && resultArray.length > 0) {
    return (
      <div>
        <h2 className="mb-3">{headingText}</h2>
        <div className="flex gap-3 items-center flex-row flex-wrap">
          {resultArray.map((pedal) => {
            return (
              <Card
                key={pedal.id}
                id={pedal.id}
                name={pedal.name}
                image={pedal.image}
                description={pedal.description}
                color={pedal.color}
                brand={pedal.brand}
                type_array={pedal.type_array}
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