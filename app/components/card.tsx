import Image from "next/image";
import { Shirt } from "../lib/definitions";
import Link from 'next/link';

export default function Card({ id, title, image, description, color, sleeves, tag_array, archived }: Shirt) {
  return (
    <div className="border-2 p-4 relative w-5/12 md:w-1/5 aspect-square bg-white">
      <Link
        href={`/${id}`}
      >
        <Image
          src={image}
          fill={true}
          alt={title}
          className="object-contain"
        />
      </Link>
      {archived && <div className="absolute right-0 bottom-0 bg-white text-red-900 px-2 py-1">Archived</div>}
    </div>
  )
}