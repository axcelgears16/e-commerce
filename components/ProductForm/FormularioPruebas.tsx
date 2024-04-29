'use client'
import { addCartDetails, deleteCartDetails, editCartDetails, getCartDetails } from "@/actions/cart_details/actions-cartDetails";
import { addCart, editCart, getCarts } from "@/actions/carts/action-carts";
import { addProduct, deleteProduct, editProduct } from "@/actions/products/action-products";
import { cartProps } from "@/types/cart";
import { cartDetails } from "@/types/cartDetails";
import { FormProduct } from "@/types/products";


export const FormularioPrueba = () => {

	const testAddProduct = async () => {
		const formProduct: FormProduct = {
			name: 'Product Test',
			description: 'This is a test product',
			price: 10.99,
			image: 'https://example.com/product_image.jpg',
			available: true,
		};

		try {
			const result = await addProduct(formProduct);
			console.log('Product added successfully:', result);
		} catch (error) {
			console.error('Error adding product:', error);
		}
	};

	const testDeleteProduct = async () => {
		const productId: number = 44;

		try {
			const result = await deleteProduct(productId);
			console.log('Product deleted successfully:', result);
		} catch (error) {
			console.error('Error deleting product:', error);
		}
	}

	const testUpdateProduct = async () => {
		const productId: number = 45
		const formProduct: FormProduct = {
			name: 'Este producto actualizado',
			description: 'Producto descrito',
			price: 20,
			image: 'https://example.com/product_image.jpg',
			available: true,
		};

		try {
			const result = await editProduct(productId, formProduct);
			console.log('Product update successfully:', result);
		} catch (error) {
			console.error('Error updating product:', error);
		}
	}

	const testAddCart = async () => {
		const data: cartProps = {
			user_id: '7fc46601-5d6d-44df-bb20-1d8d60960682',
			available: true
		}

		try {
			const result = await getCarts();
			if (result.length > 0) {
				console.log('Ya existe un carrito', result)
			}
			else {
				const response = await addCart(data);
				console.log('Product added successfully:', response);
			}

		} catch (error) {
			console.error('Error adding product:', error);
		}
	}

	const testGetCart = async () => {

		try {
			const result = await getCarts();
			console.log('Product get successfully:', result);
		} catch (error) {
			console.error('Error get product:', error);
		}
	}

	const testEditCart = async () => {
		const cartId: string = '7'
		const available: boolean = false

		try {
			const result = await editCart(cartId, available);
			console.log('Cart update successfully:', result);
		} catch (error) {
			console.error('Error updating Cart:', error);
		}
	}

	const testAddCartDetails = async () => {
		const data: cartDetails = {
			cart_id: 10,
			product_id: 1,
			quantity: 1
		}

		try {
			const result = await addCartDetails(data);
			console.log('Cart Details added successfully:', result);
		} catch (error) {
			console.error('Cart Details product:', error);
		}
	}

	const testGetCartDetails = async () => {
		const cart_id = 10;

		try{
			const result = await getCartDetails(cart_id);
			console.log('Cart Details get succesfully', result)
		}
		catch(error){
			console.error('Cart Details error: ', error);
		}
	}

	const testDeleteCartDetails = async () => {
		const cartDetailId: number = 8;

		try {
			const result = await deleteCartDetails(cartDetailId);
			console.log('Product deleted successfully:', result);
		} catch (error) {
			console.error('Error deleting product:', error);
		}
	}

	const testUpdateCartDetails = async () => {
		const cartDetailId: number = 11;
		const quantity: number = 15;

		try {
			const result = await editCartDetails(cartDetailId, quantity);
			console.log('Product update successfully:', result);
		} catch (error) {
			console.error('Error updating product:', error);
		}
	}

	return (
		<div>
			{/* <button onClick={testAddProduct}>Add product</button>
			<button onClick={testDeleteProduct}>Delete Product</button>
			<button onClick={testUpdateProduct}>Update Product</button>
			<button onClick={testAddCart}>add Cart</button>
			<button onClick={testGetCart}>Get Cart</button>
			<button onClick={testEditCart}>Edit Cart</button> */}
			<button onClick={testAddCartDetails}>Add Cart Details</button>
			<button onClick={testGetCartDetails}>Get Cart Details</button>
			<button onClick={testDeleteCartDetails}>Delete Cart Details</button>
			<button onClick={testUpdateCartDetails}>Update Cart Details</button>
		</div>
	);
}

