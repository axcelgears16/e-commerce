import { createClient } from "@/utils/supabase/server";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
	try {
		const supabase = createClient();

		const { data, error } = await supabase
			.from('products')
			.select('*')

		if (error) {
			console.error('Error fetching notes:', error.message);
			return NextResponse.json(
				{ message: `Error fetching notes: ${error.message}` },
				{ status: 400 }
			);
		}

		return NextResponse.json({ data }, { status: 200 });

	} catch (error) {
		return NextResponse.json(
			{ message: `Error fetching notes: ${error}` },
			{ status: 400 }
		);
	}
}

// export async function POST(req: NextRequest, res: NextResponse) {
// 	try {
// 		const supabase = createClient();
// 		const bodydata = await req.json();
// 		const { name, description, price, image, available } = bodydata;

// 		const { data: product, error } = await supabase
// 			.from('products')
// 			.insert({ name, description, price, image, available })

// 		if (error) {
// 			console.error('Error fetching notes:', error.message);
// 			return NextResponse.json(
// 				{ message: `Error fetching notes: ${error.message}` },
// 				{ status: 400 }
// 			);
// 		}

// 		return NextResponse.json(
// 			{ message: 'Product added' },
// 			{ status: 201 }
// 		);

// 	}
// 	catch (error) {
// 		return NextResponse.json(
// 			{ message: `Error fetching notes: ${error}` },
// 			{ status: 400 }
// 		);
// 	}
// }


