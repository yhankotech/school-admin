import { AppSidebar } from "@/components/AppSidebarMenu";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      >
        <SidebarProvider>
          <AppSidebar  />
          <main className={`flex flex-col h-screen flex-1 sm:w-full md:w-full xl:w-[1100px] 2xl:w-[1100px]`}>
            <Header />
            {children}
          </main>
        </SidebarProvider>
    </div>
  );
}