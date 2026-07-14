import pedals from '@/public/data/pedals.json';
import { Pedal } from '../lib/definitions';
import Image from "next/image";
import colors from '@/public/data/colors.json';
import Color from '../components/colors';
import types from '@/public/data/types.json';
import Tag from '../components/types';
import ChipLink from '../components/chiplink';
import brands from '@/public/data/brands.json';

export default async function Page( {params}:any ) {
  const { id } = await params;

  if (!Array.isArray(pedals)) {
    return <p>No products available.</p>;
  }
  let result: Array<Pedal> = [];
  pedals.forEach((pedal) => {
    if (pedal.id == id) {
      result.push(pedal);
    }
  });

  if (result.length > 0) {
    const item = result[0];
    const type_array = item.type_array;
    let brandName;
    brands.forEach((brandi) => {
      if (item.brand == brandi.value) {
        brandName = brandi.name;
      }
    })
    const full_name = brandName + " " + item.name;
    
    return (
      <div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl mb-3">{full_name}</h2>
          <div className="relative aspect-square w-3xl max-w-full mb-3">
            <Image
              src={item.image}
              fill={true}
              alt={full_name}
              objectFit={"contain"}
            />
          </div>
          <p className="text-xl">{item.description}</p>
          <div>
            {colors.map((swatch) => {
              if(swatch.value == item.color) {
                return (
                  <Color
                    key={swatch.value}
                    colorParam={swatch.value}
                    selected={false}
                  />
                )
              }
            })}
          </div>
          <div className="flex gap-3 flex-wrap mt-3">
            {brands.map((brandchip) => {
              if(item.brand == brandchip.value) {
                return (
                  <ChipLink
                    key={brandchip.value}
                    chipParam={brandchip.value}
                    groupParam = {"brand"}
                    selected={false}
                  />
                )
              }
            })}
          </div>
          <div className="flex gap-3 flex-wrap mt-3">
            {types.map((cat) => {
              if(type_array.includes(cat.value)) {
                return (
                  <ChipLink
                    key={cat.value}
                    chipParam={cat.value}
                    groupParam = {"type"}
                    selected={false}
                  />
                )
              }
            })}
          </div>
        </div>
      </div>
    )

  } else {
    return <p>Product unavailable</p>
  }
}