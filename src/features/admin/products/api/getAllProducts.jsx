import {api} from '../../../../Config/api';

export const allProductsApi = async () => {
  try {
    let res = await api.get ('/allproducts');
    return res.data.products;
  } catch (error) {
    console.log ('all Product api error->', error);
  }
};
