import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  category: string;
  price: string;
  href: string;
}

export const ProductCard = ({ imageUrl, name, category, price, href }: ProductCardProps) => {
  return (
    <Link href={href} className="group text-center">
      <div className="bg-gray-100 overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          width={400}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-500">{category}</p>
        <h3 className="font-medium text-gray-800 mt-1">{name}</h3>
        <p className="text-sm text-gray-800 mt-1">{price}</p>
      </div>
    </Link>
  );
};