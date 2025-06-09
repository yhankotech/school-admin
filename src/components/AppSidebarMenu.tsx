"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from 'next/image';
import { routes } from "@/lib/routes"
import LogoTipo from "@/assets/yhankoIMG.png";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";

export function AppSidebarMenu() {
  return(
    <Sidebar
    className={`h-screen border-none`}>
      <SidebarContent className="bg-[#4D44B5] h-full overflow-hidden">
        <SidebarGroup>
             {/* Logo Section */}
          <SidebarGroupLabel className="flex justify-center items-center mb-8 mt-4 p-2"> 
            <Image src={LogoTipo} alt="Logo" className="h-8 w-8 mr-2" /> 
            <h1 className="font-extrabold text-[1rem] text-[#FFFFFF]">Yhanko Akademi</h1>
          </SidebarGroupLabel>
                {/* Dynamic Menu Sections */}
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map((item) => (
                <SidebarMenuItem key={item.id} className="w-[14rem]">
                  <SidebarMenuButton asChild className="h-10 hover:text-[#4D44B5] cursor-pointer space-x-3 rounded-l-4xl">
                    <a href={item.url} className="flex hover:bg-[#F1F5F7] cursor-pointer text-white h-10 hover:text-[#4D44B5] hover:font-semibold pl-5">
                      <item.icon size={50}/>
                      <span className="text-[0.9rem]">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
         </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>        
    </Sidebar>
  )}