import Link from "next/link";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import verificationLogin from "@/utils/verificationLogin";

export default function Header() {

  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
      <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
        <ul>
          <li>
            <Link href={"/addProduct"}>Add Product</Link>
          </li>
        </ul>
        {isSupabaseConnected && <AuthButton />}
      </div>
    </nav>
  );
}