import { LoaderCircle, ShoppingBag } from "lucide-react";

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* Logo */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black shadow-lg">
          <ShoppingBag className="h-7 w-7 text-white" />
        </div>

        {/* Brand */}
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900">
          Nids<span className="text-lime-500">EComm</span>
        </h1>

        {/* Loader */}
        <div className="mt-6 flex items-center gap-2">
          <LoaderCircle className="h-5 w-5 animate-spin text-gray-700" />

          <span className="text-sm font-medium text-gray-500">
            {text}
          </span>
        </div>

      </div>
    </div>
  );
};

export default Loading;