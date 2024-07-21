import { redirect } from "next/navigation";

import { validateRequest } from "@/auth";
import SessionProvider from "@/components/providers/SessionProvider";
import Navbar from "@/components/common/Navbar";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();
  if (!session.user) redirect("/login");
  return (
    <SessionProvider value={session}>
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col">
        <Navbar />
        <main className="p-5">{children}</main>
      </div>
    </SessionProvider>
  );
}
