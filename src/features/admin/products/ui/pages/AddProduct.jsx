import {PackagePlus, ArrowLeft} from 'lucide-react';
import {useProductForm} from '../../hooks/formHook';

const AddProduct = () => {
  let {handleSubmit, errors, register, navigate, onSubmit} = useProductForm ();
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
        <button
          onClick={() => {
            navigate ('/main');
          }}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black">
              <PackagePlus className="h-5 w-5 text-white" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Add New Product
              </h1>

              <p className="text-sm text-gray-500">
                Add a new product to your store
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit (onSubmit)}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >

          <div className="space-y-6">

            {/* Product Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Product Name {''}
                <span className="text-red-600">
                  *{errors.productName && errors.productName.message}
                </span>
              </label>

              <input
                type="text"
                placeholder="Enter product name"
                {...register ('productName', {
                  required: 'Product Name is required',
                })}
                className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />
              {' '}
            </div>

            {/* Product Price */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Product Price {' '}
                <span className="text-red-600">
                  *{errors.productPrice && errors.productPrice.message}
                </span>
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium text-gray-500">
                  ₹
                </span>

                <input
                  type="number"
                  placeholder="Enter product price"
                  {...register ('productPrice', {
                    required: 'Product Price is required',
                  })}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-9 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
                />
              </div>
            </div>

            {/* Product Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Product Description {' '}
                <span className="text-red-600">
                  *
                  {errors.productDescription &&
                    errors.productDescription.message}
                </span>
              </label>

              <textarea
                rows="5"
                placeholder="Enter product description"
                {...register ('productDescription', {
                  required: 'Product Price is required',
                })}
                className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:justify-end">

              <button
                onClick={() => navigate ('/main')}
                className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Cancel
              </button>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
                <PackagePlus className="h-4 w-4" />
                Add Product
              </button>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
};

export default AddProduct;
