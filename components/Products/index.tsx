"use client"
import React, { useEffect, useState } from 'react'
import { deleteProduct, getProducts } from '@/actions/products/action-products'
import { CardProduct } from './cardProduct';

export const Products = () => {
	const [products, setProducts] = useState<any[]>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const productList = await getProducts()
			setProducts(productList || [])
		}

		fetchProducts()
	}, []);

	const handleDelete = async (id: number) => {
		// try {
		// 	const result = await deleteProduct(id);
		// 	setProducts(products.filter((x) => x.id != id))
		// 	console.log('Product deleted successfully:', result);
		// } catch (error) {
		// 	console.error('Error al eliminar el producto:', error);
		// }
	};

	const renderProducts = () => {
		if (Array.isArray(products) && products.length > 0)
			return products.map((product) => (
				<CardProduct key={product.id} card={product} onDelete={() => handleDelete(product.id)} />
			));

		return <span>No hay productos</span>
	}

	return (
		<div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
			<h1 className="mb-8 text-4xl">Productos en Venta</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{renderProducts()}
			</div>
		</div>
	)
}
