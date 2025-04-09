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
    <Link href={`/product/${id}`} className="group">
      <div className="relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={image}
            alt={name}
            width={300}
            height={400}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          {discount && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
              {discount}% OFF
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 font-medium">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{brand}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">₹{price}</p>
            {discount && (
              <p className="text-sm text-gray-500 line-through">
                ₹{Math.round(price / (1 - discount / 100))}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
