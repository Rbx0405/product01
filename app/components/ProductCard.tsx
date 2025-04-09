import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  discount?: number;
}

const ProductCard = ({ id, name, brand, price, image, discount }: ProductCardProps) => {
  return (
    <Link href={`/product/${id}`}>
      <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={image}
            alt={name}
            width={300}
            height={400}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{brand}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">₹{price}</p>
            {discount && (
              <p className="text-sm text-green-600">{discount}% OFF</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
