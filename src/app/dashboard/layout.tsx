import { AppSidebar } from "@/components/AppSidBar";
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
          <main className={`flex flex-col h-screen `}>
            <Header />
            {children}
          </main>
        </SidebarProvider>
    </div>
  );
}