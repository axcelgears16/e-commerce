import { createClient } from "@/utils/supabase/server";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest, context: any) {

	try {
		const supabase = createClient();
		const { id } = context.params;

		const { data: product, error } = await supabase
			.from('products')
			.delete()
			.eq('id', id)

		if (error) {
			console.error('Error deleting notes:', error.message);
			return NextResponse.json(
				{ message: `Error deleting notes: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: 'Product eliminated' },
			{ status: 201 }
		);
	}
	catch (error) {
		return NextResponse.json(
			{ message: `Error deleting notes: ${error}` },
			{ status: 400 }
		);
	}
}

export async function PUT(req: NextRequest, context: any) {
	try {
		const supabase = createClient();
		const { id } = context.params;
		const bodyData = await req.json();
		
		const { name, description, price, image, available } = bodyData;

		const { data: product, error } = await supabase
			.from('products')
			.update({ name, description, price, image, available })
			.eq('id', id);

		if (error) {
			console.error('Error updating product:', error.message);
			return NextResponse.json(
				{ message: `Error updating product: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: 'Product updated' },
			{ status: 200 }
		);
	}
	catch(error) {
		console.error('Error updating product:', error);
		return NextResponse.json(
			{ message: `Error updating product: ${error}` },
			{ status: 400 }
		);
	}
}