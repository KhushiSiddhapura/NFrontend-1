import {api} from '../../../../Config/api';

export const createProductApi = async details => {
  try {
    let res = await api.post ('/create', details);
    return res.data.product;
  } catch (error) {
    console.log ('Create Product api error->', error);
  }
};
