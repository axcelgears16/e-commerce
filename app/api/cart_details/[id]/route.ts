import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, context: any) {
    try {
		const supabase = createClient();
		const { id } = context.params;

		const { data: cartDetails, error } = await supabase
			.from('cart_details')
			.delete()
			.eq('id', id)

		if (error) {
			return NextResponse.json(
				{ message: `Error deleting product in the cart: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: 'Product eliminated in the cart' },
			{ status: 201 }
		);
	}
	catch (error) {
		return NextResponse.json(
			{ message: `Error deleting product in the cart: ${error}` },
			{ status: 400 }
		);
	}
}

export async function PUT(req: NextRequest, context: any) {
	try {
		const supabase = createClient();
		const { id } = context.params;
		const bodyData = await req.json();
		
		const { quantity } = bodyData;

		const { data: product, error } = await supabase
			.from('cart_details')
			.update({ quantity })
			.eq('id', id);

		if (error) {
			console.error('Error updating cart details:', error.message);
			return NextResponse.json(
				{ message: `Error updating cart details: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: 'Cart Detail updated' },
			{ status: 200 }
		);
	}
	catch(error) {
		console.error('Error updating CartDetail:', error);
		return NextResponse.json(
			{ message: `Error updating CartDetail: ${error}` },
			{ status: 400 }
		);
	}
}