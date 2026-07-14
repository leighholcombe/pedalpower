import types from '@/public/data/brands.json';
import { TypeProps } from '../lib/definitions';
import Link from 'next/link';

export default function Type({ typeParam, selected }: TypeProps) {
  let chipClasses = "text-neutral-800 rounded-full block py-2 px-4 whitespace-nowrap hover:bg-sky-300";
  let typeValue;
  let typeName;
  if(selected) {
    chipClasses += " bg-sky-400";
  } else {
    chipClasses += " bg-sky-200";
  }

  {types.map((tag:any) => {
    if(tag.value == typeParam) {
      typeValue = tag.value;
      typeName = tag.name;
    }
  })};

  return (
    <Link
      href={`/?type=${typeValue}`}
      key={typeValue}
      className={chipClasses}
    >
      {typeName}
    </Link>
  );
}