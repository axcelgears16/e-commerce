import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	try {
		const supabase = createClient();
		const { data : { user }} = await supabase.auth.getUser();

		const { data, error } = await supabase
			.from('carts')
			.select('*')
			.eq('user_id', user?.id)
			.eq('available', true);
		
		if(error) {
			console.error('Error fetching cart: ', error.message);
			return NextResponse.json(
				{ message: `Error fetching cart: ${error.message}` },
				{ status: 400 }
			);
		}
		return NextResponse.json( { data }, { status: 200 });
	}
	catch(error) {
		return NextResponse.json(
			{ message:`Error fetchinh cart: ${error}` },
			{ status: 400 }
		);
	}
}

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		const supabase = createClient();
		const bodydata = await req.json();
		const { user_id, available } = bodydata;

		const { data: cart, error } = await supabase
			.from('carts')
			.insert({ user_id, available })

		if (error) {
			console.error('Error fetching cart:', error.message);
			return NextResponse.json(
				{ message: `Error fetching cart: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json(
			{ message: 'Cart added' },
			{ status: 201 }
		);

	}
	catch (error) {
		return NextResponse.json(
			{ message: `Error fetching cart: ${error}` },
			{ status: 400 }
		);
	}
}