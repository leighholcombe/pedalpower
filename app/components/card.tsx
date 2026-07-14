import Image from "next/image";
import { Pedal } from "../lib/definitions";
import Link from 'next/link';

export default function Card({ id, name, image, description, color, type_array}: Pedal) {
  return (
    <div className="border-2 p-4 relative w-5/12 md:w-1/5 aspect-square bg-white">
      <Link
        href={`/${id}`}
      >
        <Image
          src={image}
          fill={true}
          alt={name}
          className="object-contain"
        />
      </Link>
    </div>
  )
}