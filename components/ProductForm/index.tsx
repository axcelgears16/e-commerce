'use client'
import { addProduct } from '@/actions/products/action-products';
import { FormProduct } from '@/types/products';
import { useState } from 'react';

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<FormProduct>({
    name: '',
    description: '',
    price: 0,
    available: false,
    image: '',
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const result = await addProduct(formData);
      console.log('Product added successfully:', result);
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          placeholder="Nombre del producto"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-bold text-gray-700">
          Descripción:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          placeholder="Descripción del producto"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block mb-2 font-bold text-gray-700">
          Precio:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          placeholder="Precio del producto"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="available" className="inline-flex items-center font-bold text-gray-700">
          Disponible:
          <input
            type="checkbox"
            id="available"
            name="available"
            checked={formData.available}
            onChange={handleChange}
            className="ml-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </label>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block mb-2 font-bold text-gray-700">
          Imagen:
        </label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 text-black"
          placeholder="URL de la imagen del producto"
          required
        />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
        Añadir Producto
      </button>
    </form>
  );
};

export default ProductForm;