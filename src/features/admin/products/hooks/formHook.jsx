import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import {createProductApi} from '../api/createProduct';
import {deleteProductApi} from '../api/deleteProduct';
import {editProductApi} from '../api/editProduct';
import {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router';

export const useProductForm = () => {
  const {id} = useParams ();
  const location = useLocation ();
  const navigate = useNavigate ();
  const editing = Boolean (id);
  const editProduct = location.state?.product;

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting},
  } = useForm ({
    defaultValues: {
      productName: '',
      productPrice: '',
      productDescription: '',
    },
  });

  useEffect (
    () => {
      if (editing && editProduct) {
        reset ({
          productName: editProduct.productName,
          productPrice: editProduct.productPrice,
          productDescription: editProduct.productDescription,
        });
      }
    },
    [editProduct, editing, reset]
  );

  const onSubmit = async formData => {
    if (editing) {
      await editProductApi (formData, id);
      toast.success ('Product updated successfully');
    } else {
      await createProductApi (formData);
      toast.success ('Product added successfully');
    }
    reset ();
    navigate ('/main');
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    navigate,
    onSubmit,
    editing,
  };
};

export const useProductCard = () => {
  const [reload, setReload] = useState (false);
  const navigate = useNavigate ();
  const onDelete = async id => {
    let res = confirm ('are you sure want to delete this?');
    if (res) {
      await deleteProductApi (id);
      toast.warn ('Product Deleted');
      setReload (false);
    } else {
      return;
    }
  };

  const onEdit = async (id, updatedData) => {
    await editProductApi (updatedData, id);
    toast.success ('Product updated successfully');
    navigate ('/main');
  };

  return {
    onDelete,
    navigate,
    onEdit,
  };
};
