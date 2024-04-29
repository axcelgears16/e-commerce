import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: any) {
	try {
		const supabase = createClient();
		const { id } = context.params;
		const bodyData = await req.json();
		
		const { available } = bodyData;

		const { data: cart, error } = await supabase
			.from('carts')
			.update({ available })
			.eq('id', id);

		if (error) {
			console.error('Error updating cart:', error.message);
			return NextResponse.json(
				{ message: `Error updating cart: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: 'cart updated' },
			{ status: 200 }
		);
	}
	catch(error) {
		console.error('Error updating cart:', error);
		return NextResponse.json(
			{ message: `Error updating cart: ${error}` },
			{ status: 400 }
		);
	}
}