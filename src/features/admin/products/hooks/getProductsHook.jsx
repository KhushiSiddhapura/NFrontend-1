import {useEffect, useState} from 'react';
import {allProductsApi} from '../api/getAllProducts';
import {useNavigate, useParams} from 'react-router';
import {singleProductApi} from '../api/getSingleProduct';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState (true);
  const [products, setProducts] = useState ([]);
  useEffect (() => {
    let getProductsData = async () => {
      let res = await allProductsApi ();
      setProducts (res);
      setIsLoading (false);
    };
    getProductsData ();
  }, []);

  return {
    products,
    isLoading,
  };
};

export const useProduct = () => {
  let navigate = useNavigate ();
  const [product, setProduct] = useState (null);
  const [isLoading, setIsLoading] = useState (true);
  let {id} = useParams ();
  useEffect (
    () => {
      let getSingleProduct = async () => {
        let res = await singleProductApi (id);
        setProduct (res);
        setIsLoading (false);
      };
      getSingleProduct ();
    },
    [id]
  );

  return {
    product,
    isLoading,
    navigate,
  };
};
