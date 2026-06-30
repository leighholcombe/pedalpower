import pedals from '@/public/data/pedals.json';
import { Pedal } from '../lib/definitions';
import { shuffle } from '../lib/utilities';
import Card from '../components/card';

export default async function Page () {
  // Check if pedals is an array before mapping to avoid errors
  if (!Array.isArray(pedals)) {
    return <p>No products available.</p>;
  }
  let resultArray: Array<Pedal> = [];
  let headingText = "";
  pedals.forEach((pedal) => {
    resultArray.push(pedal);
  });
  resultArray = shuffle(resultArray);
  headingText = "Pedals in inventory: " + resultArray.length;
  
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
                type={pedal.type}
              />
            )
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div><p>No results at all.</p></div>
    )
  }
}