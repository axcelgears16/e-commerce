import  ProductForm  from '@/components/ProductForm';
import { FormularioPrueba } from '@/components/ProductForm/FormularioPruebas';
import Link from 'next/link';

export default function addProduct() {
	return (
		<div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
			<Link href="/" className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-gray-600">
					Back
			</Link>
			<h1>Add your Product</h1>
			<ProductForm />
			<FormularioPrueba />
		</div>
	);
}