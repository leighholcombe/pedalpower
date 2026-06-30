import tags from '@/public/data/tags.json';
import shirts from '@/public/data/shirts.json';
import Tag from './tags';
import { generateCountArray, doTheCounting } from '../lib/utilities';

export default async function Chips(props: PageProps<any>) {
  // Check if tags is an array before mapping to avoid errors
  if (!Array.isArray(tags)) {
    return <p>No tags available.</p>;
  }
  const searchParams = await props.searchParams;
  const cat = searchParams.cat;

  const tagCounter = generateCountArray(tags);
  const tagsCounted = doTheCounting(tagCounter, shirts, "tag_array");
  const tagsSorted = tagsCounted.sort((a:any, b:any) => b.count - a.count);

  return (
    <div>
      <h2 className="mb-2">Filter by category:</h2>
      <div className="flex gap-3 flex-wrap">
        {tagsSorted.map((chip: any) => {
          if(chip.value == cat) {
            return (
              <Tag
                key={chip.value}
                tagParam={chip.value}
                selected={true}
              />
            )
          } else {
            return (
              <Tag
                key={chip.value}
                tagParam={chip.value}
                selected={false}
              />
            )
          }
        })}
      </div>
    </div>
  );
};