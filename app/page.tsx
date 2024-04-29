import { Footer } from "@/components/Footer";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { Products } from "@/components/Products";

export default async function Index() {
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
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
    <Header />
    <Products />
    <Footer />
    </div>
  );
}
