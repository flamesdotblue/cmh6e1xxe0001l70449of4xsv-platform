import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Heavyweight Box Tee',
    color: 'Bone',
    price: 48,
    img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1974&auto=format&fit=crop',
    tag: 'Essential',
  },
  {
    id: 2,
    name: 'Tech Cargo Pant',
    color: 'Obsidian',
    price: 98,
    img: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1974&auto=format&fit=crop',
    tag: 'Utility',
  },
  {
    id: 3,
    name: 'Cropped Puffer',
    color: 'Matte Black',
    price: 168,
    img: 'https://images.unsplash.com/photo-1614252235316-8c857dede3aa?q=80&w=1970&auto=format&fit=crop',
    tag: 'Outerwear',
  },
  {
    id: 4,
    name: 'Zip Hoodie',
    color: 'Charcoal',
    price: 98,
    img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=2069&auto=format&fit=crop',
    tag: 'Layer',
  },
  {
    id: 5,
    name: 'Relaxed Denim',
    color: 'Eclipse',
    price: 128,
    img: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=2070&auto=format&fit=crop',
    tag: 'Denim',
  },
  {
    id: 6,
    name: 'Minimalist Crewneck',
    color: 'Slate',
    price: 78,
    img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1974&auto=format&fit=crop',
    tag: 'Knit',
  },
  {
    id: 7,
    name: 'Statement Jacket',
    color: 'Graphite',
    price: 198,
    img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1974&auto=format&fit=crop',
    tag: 'Outerwear',
  },
  {
    id: 8,
    name: 'Everyday Beanie',
    color: 'Onyx',
    price: 26,
    img: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1974&auto=format&fit=crop',
    tag: 'Accessory',
  },
];

function ProductCard({ product }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950/60 hover:border-neutral-700"
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-900">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-2 top-2 text-[11px] uppercase tracking-wide bg-white text-black px-2 py-1 rounded">
          {product.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white">
          <a href="#" className="hover:underline">
            {product.name}
          </a>
        </h3>
        <p className="text-sm text-neutral-400">{product.color}</p>
        <div className="mt-3 flex items-center justify-between">
          <p className="font-semibold">${product.price.toFixed(2)}</p>
          <button className="text-sm px-3 py-1.5 rounded-md border border-neutral-700 text-neutral-200 hover:border-neutral-600">
            Add to cart
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
