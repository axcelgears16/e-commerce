import { cartDetails } from "@/types/cartDetails";
import { createAxiosInstace } from "@/utils/axiosConfig";

export const getCartDetails = async (cart_id: any) => {
    try {
        const axiosInstance = createAxiosInstace();
        const { data: { data: cart_details } } = await axiosInstance.get(`/cart_details?id=${cart_id}`);

        return cart_details;
    } catch(error) {
        return error;
    }
}

export const addCartDetails = async (cartDetails: cartDetails) => {
    try {
        const axiosInstance = createAxiosInstace();
        const data = {
            product_id: cartDetails.product_id,
            cart_id: cartDetails.cart_id,
            quantity: cartDetails.quantity
        }

        const response = await axiosInstance.post('/cart_details', data);

        return response.data;
    }
    catch(error) {
        console.log('Error', error);
    }
}

export const deleteCartDetails = async (cartDetailId: number) => {
	try {
		const axiosInstance = createAxiosInstace();
		const id = cartDetailId;

		const response = await axiosInstance.delete(`/cart_details/${id}`);
		return response.data
	}
	catch (error) {
		console.log('Error', error);
	}
}

export const editCartDetails = async (cartDetailId: number, quantity: number) => {
	try {
		const axiosInstance = createAxiosInstace();
		const data = { quantity: quantity }
        const id = cartDetailId;

		const response = await axiosInstance.put(`/cart_details/${id}`, data);
		return response.data;
	}
	catch (error) {
		console.log('Error', error);
		return error;
	}
}