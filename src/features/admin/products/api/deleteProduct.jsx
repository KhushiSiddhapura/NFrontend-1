import {api} from '../../../../Config/api';

export const deleteProductApi = async (id) => {
  try {
    await api.post (`/delete/${id}`);
  } catch (error) {
    console.log ('Delete Product api error->', error);
  }
};
