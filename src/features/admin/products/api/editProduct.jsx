import { api } from '../../../../Config/api';

export const editProductApi = async (details, id) => {
  try {
    const res = await api.post(`/update/${id}`, details);
    return res.data.product;
  } catch (error) {
    console.error('Update Product API error:', error);
  }
};