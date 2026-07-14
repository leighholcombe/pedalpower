import types from '@/public/data/types.json';
import brands from '@/public/data/brands.json';
import { ChipProps } from '../lib/definitions';
import Link from 'next/link';

export default function ChipLink({ chipParam, groupParam, selected }: ChipProps) {
  let chipClasses = "text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-sky-300";
  let chipValue;
  let chipName;
  let chipGroup;
  if(selected) {
    chipClasses += " bg-sky-400";
  } else {
    chipClasses += " bg-sky-200";
  }
  if (groupParam == "brand") {
    chipGroup = brands;
  } else {
    chipGroup = types;
  }

  {chipGroup.map((tag:any) => {
    if(tag.value == chipParam) {
      chipValue = tag.value;
      chipName = tag.name;
    }
  })};

  return (
    <Link
      href={`/?${groupParam}=${chipValue}`}
      key={chipValue}
      className={chipClasses}
    >
      {chipName}
    </Link>
  );
}