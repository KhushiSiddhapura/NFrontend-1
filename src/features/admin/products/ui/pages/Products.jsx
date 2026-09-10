import Loading from '../../../../../shared/ui/pages/LoadingPage';
import { useProducts } from '../../hooks/getProductsHook';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 px-6 py-8">

      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-8 flex items-end justify-between">

          <div>
            <p className="mb-1 text-sm font-medium text-lime-600">
              NidsEComm Store
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              All Products
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Browse and manage your products
            </p>
          </div>

          {/* Product Count */}
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-2 shadow-sm">
            <span className="text-lg font-bold text-gray-900">
              {products.length}
            </span>

            <span className="ml-2 text-sm text-gray-500">
              Products
            </span>
          </div>

        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}

        </div>

      </div>
    </div>
  );
};

export default Products;