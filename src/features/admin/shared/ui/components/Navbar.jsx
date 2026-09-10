import {ShoppingBag, Plus} from 'lucide-react';
import {useNavigate} from 'react-router';

const Navbar = () => {
  let navigate = useNavigate ();
  return (
    <nav className="h-16 w-full border-b border-gray-200 bg-white px-6 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black">
          <ShoppingBag className="h-5 w-5 text-white" />
        </div>

        <h1 className="text-xl font-bold text-gray-900">
          Nids<span className="text-lime-500">EComm</span>
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3">

        {/* Products */}
        <button
          onClick={() => {
            navigate ('/main');
          }}
          className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Products
        </button>

        {/* Add Product */}
        <button onClick={()=>{
            navigate('/main/add')
        }} className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
          <Plus className="h-4 w-4" />
          Add New Product
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
