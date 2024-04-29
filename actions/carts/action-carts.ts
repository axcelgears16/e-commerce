import { cartProps } from "@/types/cart";
import { createAxiosInstace } from "@/utils/axiosConfig"

export const getCarts = async () => {
  try {
    const axiosInstance = createAxiosInstace();
    const { data: { data: carts } } = await axiosInstance.get('/carts');

    return carts;
  }
  catch (error) {
    return error;
  }
}

export const addCart = async (cartProps: cartProps) => {
  try {
    const axiosInstance = createAxiosInstace();
    const data = { 
      user_id: cartProps.user_id,
      available: cartProps.available
    }

    const response = await axiosInstance.post('/carts', data);
    console.log('data: ', data)
    console.log('response: ', response)
    return response.data;
  }

  catch(error) {
    console.log('Error', error);
  }
}

export const editCart = async (cartId: string, available: boolean) => {
  try {
    const axiosInstance = createAxiosInstace();
    const data = { available: available };

    const response = await axiosInstance.put(`/carts/${cartId}`, data);
    console.log('response: ', response);
    return response.data;
  }
  catch (error) {
    console.log('Error', error);
		return error;
  }
}