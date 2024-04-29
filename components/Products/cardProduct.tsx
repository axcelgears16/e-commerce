
export const CardProduct: React.FC<cardProductProps> = ({ card }) => {

	const renderButton = () => {
		if (card.available) {
			return (
				<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
					Add to Cart
				</button>
			)
		};
		return (
			<p className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Not in stock</p>
		)
	}

	return (
		<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<img src={card.image} alt={card.name} className="rounded-t-lg w-screen h-1/2" />
			<div className="px-5 pb-5">
				<h1 className=" px-5 pb-5text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{card.name}</h1>
				<div className="flex items-center mt-2.5 mb-5">
					<span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
				</div>
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">${card.price}</span>
					{renderButton()}
				</div>
				
			</div>
		</div>
	);
};

interface cardProductProps {
	card: {
		id: number;
		name: string;
		image: string;
		price: number;
		description: string;
		available: boolean;
	}
	onDelete: any;
}
