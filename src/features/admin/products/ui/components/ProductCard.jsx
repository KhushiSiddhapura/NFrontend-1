import {Pencil, Trash2, ShoppingBag} from 'lucide-react';
import {useProductCard} from '../../hooks/formHook';

const ProductCard = ({product}) => {
  let {navigate, onDelete} = useProductCard ();

  return (
    <div
      onClick={() => {
        navigate (`/main/details/${product._id}`);
      }}
      className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >

      {/* Product Image Placeholder */}
      <div className="flex h-52 items-center justify-center bg-gray-100">
        <ShoppingBag className="h-16 w-16 text-gray-400" />
      </div>

      {/* Product Details */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              {product.productName}
            </h2>

            <p className="mt-1 text-lg font-semibold text-green-600">
              ₹{product.productPrice}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-1">
            <button
              onClick={e => {
                e.stopPropagation ();
                navigate (`/main/update/${product._id}`, {state: {product}});
              }}
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
              <Pencil className="h-4 w-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation ();
                onDelete (product._id);
              }}
              className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-red-50 hover:text-red-500"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-gray-500">
          {product.productDescription}
        </p>

      </div>
    </div>
  );
};

export default ProductCard;
