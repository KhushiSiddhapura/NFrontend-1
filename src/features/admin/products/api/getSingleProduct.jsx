import {api} from '../../../../Config/api';

export const singleProductApi = async (id) => {
  try {
    let res = await api.get (`/singleproduct/${id}`);
    return res.data.product;
  } catch (error) {
    console.log ('Single Product api error->', error);
  }
};
