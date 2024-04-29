import { createClient } from "@/utils/supabase/server";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest,) {
	try {
		const supabase = createClient();
		const url = new URL(req.url);
        const id = url.searchParams.get('id');
		

		const { data, error } = await supabase
			.from('cart_details')
			.select('*')
			.eq('cart_id', id);

		if (error) {
			return NextResponse.json(
				{ message: `Error get cartDetails: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json({ data }, { status: 200 });

	} catch (error) {
		return NextResponse.json(
			{ message: `Error get cartDetails: ${error}` },
			{ status: 400 }
		);
	}
}

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const supabase = createClient();
		const bodydata = await req.json();
		const { cart_id, product_id,  quantity } = bodydata;

        const { data: cart_details, error } = await supabase
            .from('cart_details')
            .insert([{ cart_id: cart_id, product_id: product_id, quantity: quantity }])

        if (error) {
            console.error('Error fetching cart_details:', error.message);
            return NextResponse.json(
                { message: `Error fetching cart_details: ${error.message}` },
                { status: 400 }
            );
        }

        return NextResponse.json(
			{ message: 'Cart_Details added' },
			{ status: 201 }
		);
    }

    catch (error) {
		return NextResponse.json(
			{ message: `Error fetching cart_details: ${error}` },
			{ status: 400 }
		);
	}
}