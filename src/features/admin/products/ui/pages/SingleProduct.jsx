import {ShoppingBag, Pencil, Trash2, ArrowLeft} from 'lucide-react';
import {useProduct} from '../../hooks/getProductsHook';
import Loading from '../../../../../shared/ui/pages/LoadingPage';

const SingleProduct = () => {
  const {product, isLoading,navigate} = useProduct ();

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">

      <div className="mx-auto max-w-6xl">

        {/* Back */}
        <button onClick={()=>{
            navigate('/main')
        }} className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black">
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </button>

        {/* Product Container */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Product Image */}
            <div className="flex min-h-[450px] items-center justify-center bg-gray-100">
              <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white shadow-sm">
                <ShoppingBag className="h-16 w-16 text-gray-400" />
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center p-8 lg:p-12">

              {/* Product ID */}
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Product ID
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {product._id}
              </p>

              {/* Name */}
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
                {product.productName}
              </h1>

              {/* Price */}
              <p className="mt-4 text-3xl font-bold text-green-600">
                ₹{product.productPrice}
              </p>

              {/* Divider */}
              <div className="my-7 h-px bg-gray-200" />

              {/* Description */}
              <div>
                <h2 className="text-sm font-semibold text-gray-900">
                  Description
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500">
                  {product.productDescription}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex gap-3">

                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                  <Pencil className="h-4 w-4" />
                  Edit Product
                </button>

                <button className="flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 text-sm font-semibold text-red-500 transition hover:bg-red-100">
                  <Trash2 className="h-4 w-4" />
                  Delete
                </button>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SingleProduct;
