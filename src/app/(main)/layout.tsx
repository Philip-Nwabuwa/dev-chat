import { redirect } from "next/navigation";

import { validateRequest } from "@/auth";
import SessionProvider from "@/components/providers/SessionProvider";
import Navbar from "@/components/common/Navbar";
import MenuBar from "@/components/common/MenuBar";

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
        <div className="flex w-full grow gap-5 p-5">
          <MenuBar className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80" />
          {children}
        </div>
        <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden" />
      </div>
    </SessionProvider>
  );
}
