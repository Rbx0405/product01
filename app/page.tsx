import Image from "next/image";
import ProductCard from "./components/ProductCard";

const featuredProducts = [
  {
    id: "1",
    name: "Casual Cotton T-Shirt",
    brand: "Fashion Brand",
    price: 599,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=T-Shirt",
    discount: 20
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    brand: "Denim Co",
    price: 1299,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Jeans",
    discount: 15
  },
  {
    id: "3",
    name: "Summer Dress",
    brand: "Style Studio",
    price: 899,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Dress",
    discount: 25
  },
  {
    id: "4",
    name: "Classic White Shirt",
    brand: "Fashion Brand",
    price: 799,
    image: "https://placehold.co/600x800/e2e8f0/1e293b.png?text=Shirt",
    discount: 10
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="h-[60vh] relative">
          <Image
            src="https://placehold.co/2000x1000/667eea/ffffff.png?text=Summer+Collection+2025"
            alt="Fashion Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Summer Collection 2025</h1>
              <p className="text-xl mb-8">Discover the latest trends in fashion</p>
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Men', 'Women', 'Kids'].map((category) => (
            <div key={category} className="relative h-[300px] group cursor-pointer">
              <Image
                src={`https://placehold.co/800x600/667eea/ffffff.png?text=${category}`}
                alt={category}
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
