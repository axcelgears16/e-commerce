import { createAxiosInstace } from "@/utils/axiosConfig";
import { FormProduct } from "@/types/products";

export const getProducts = async () => {
	try {
		const axiosInstance = createAxiosInstace();
		const { data: { data: products } } = await axiosInstance.get('/products');
		console.log('products:', products);

		return products;
	}
	catch (error) {
		return error;
	}
}

// export const addProduct = async (formProduct: FormProduct) => {
// 	try {
// 		const axiosInstance = createAxiosInstace();
// 		const data = {
// 			name: formProduct.name,
// 			description: formProduct.description,
// 			price: formProduct.price,
// 			image: formProduct.image,
// 			available: formProduct.available
// 		}

// 		const response = await axiosInstance.post('/products', data);

// 		return response.data
// 	}
// 	catch (error) {
// 		console.log('Error', error);
// 	}
// }

export const deleteProduct = async (productId: number) => {
	try {
		const axiosInstance = createAxiosInstace();
		const id = productId;

		const response = await axiosInstance.delete(`/products/${id}`);
		console.log('response form action: ', response)
		return response.data
	}
	catch (error) {
		console.log('Error', error);
	}
}

// export const editProduct = async (productId: number, formProduct: FormProduct) => {
// 	try {
// 		const axiosInstance = createAxiosInstace();
// 		const data = {
// 			name: formProduct.name,
// 			description: formProduct.description,
// 			price: formProduct.price,
// 			image: formProduct.image,
// 			available: formProduct.available
// 		};

// 		const response = await axiosInstance.put(`/products/${productId}`, data);
// 		console.log('response', response);
// 		return response.data;
// 	}
// 	catch (error) {
// 		console.log('Error', error);
// 		return error;
// 	}
// }