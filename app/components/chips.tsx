import types from '@/public/data/types.json';
import brands from '@/public/data/brands.json';
import pedals from '@/public/data/pedals.json';
import ChipLink from './chiplink';
import { generateCountArray, doTheCounting } from '../lib/utilities';

export default async function Chips(props: PageProps<any> & {intake: string}) {
  // Check if intake is an array before mapping to avoid errors
  if (!Array.isArray(types) || !Array.isArray(brands)) {
    return <p>No {props.intake} available.</p>;
  }
  const searchParams = await props.searchParams;
  const typeCat = searchParams.type;
  const brandCat = searchParams.brand;
  let sortField;
  let cat;
  let intakeField

  if(props.intake == "brand") {
    sortField = "brand";
    cat = brandCat;
    intakeField = brands;
  } else {
    sortField = "type_array";
    cat = typeCat;
    intakeField = types;
  }
  const chipCounter = generateCountArray(intakeField);
  const chipCounted = doTheCounting(chipCounter, pedals, sortField);
  const chipSorted = chipCounted.sort((a:any, b:any) => b.count - a.count);

  return (
    <div>
      <h2 className="mb-2">Filter by {props.intake}:</h2>
      <div className="flex gap-3 flex-wrap">
        {chipSorted.map((chip: any) => {
          if(chip.value == cat) {
            return (
              <ChipLink
                key={chip.value}
                chipParam={chip.value}
                groupParam = {props.intake}
                selected={true}
              />
            )
          } else {
            return (
              <ChipLink
                key={chip.value}
                chipParam={chip.value}
                groupParam = {props.intake}
                selected={false}
              />
            )
          }
        })}
      </div>
    </div>
  );
};