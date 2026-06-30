import tags from '@/public/data/tags.json';
import { TagProps } from '../lib/definitions';
import Link from 'next/link';

export default function Tag({ tagParam, selected }: TagProps) {
  let chipClasses = "text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-sky-300";
  let tagValue;
  let tagName;
  if(selected) {
    chipClasses += " bg-sky-400";
  } else {
    chipClasses += " bg-sky-200";
  }

  {tags.map((tag) => {
    if(tag.value == tagParam) {
      tagValue = tag.value;
      tagName = tag.name;
    }
  })};

  return (
    <Link
      href={`/?cat=${tagValue}`}
      key={tagParam}
      className={chipClasses}
    >
      {tagName}
    </Link>
  );
}