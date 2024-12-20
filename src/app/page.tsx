import { auth } from "@/auth";
import HomePage from "@/components/layout/homepage";

export default async function Home() {
  const session = await auth();
  // console.log("check", session);
  return (
    <div>
      <HomePage />
    </div>
  );
}
