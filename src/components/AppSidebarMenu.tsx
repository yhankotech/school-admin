"use client";
import Link from 'next/link'
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
import { Home } from "@/utils/icons";
import LogoTipo from "@/assets/yhankoIMG.png";
//import getCookie from "@/hooks/Hooks/Login/useGetTokenLogin";

export function AppSidebarMenu() {
    //const { entidade } = getCookie();
    return(
        <Sidebar
          className={`h-screen border-none`}>
            <SidebarContent className="bg-[#4D44B5] h-full">
                <SidebarGroup>
             {/* Logo Section */}
                <SidebarGroupLabel className="flex justify-center items-center mb-8 mt-4"> 
                 <Image src={LogoTipo} alt="Logo" className="h-8 w-8 mr-2" /> 
                 <h1>Yhanko Akademi</h1>
                </SidebarGroupLabel>
            
                {/* Dynamic Menu Sections */}
                <SidebarGroupContent>

                <SidebarMenu className="p-3">
                <SidebarMenuItem>
                    <SidebarMenuButton
                        asChild
                        className="h-10 hover:bg-[#F08F3E] hover:text-white cursor-auto"
                    >
                        <Link
                            href="/dashboard"
                            className={
                            `flex bg-[#F1F5F7] cursor-pointer text-sm text-[#717F96] h-10 hover:bg-[#F08F3E] hover:text-[#FFFFFF] active:bg-[#F08F3E] active:text-[#ffffff] active:font-normal `}
                            >
                                <Home className="cursor-pointer"/>
                                <span>DashBoard</span>
                            </Link>
                    </SidebarMenuButton>
                    </SidebarMenuItem>
                <div>
                    <div className="bg-[#F1F5F7] h-[0.5px] mt-3 mb-3"></div>
                    <h2 className=""></h2>
                    <h2 className="text-sm text-[#CBD5E0] font-semibold mb-2">GESTÃO</h2>
                    
                    <SidebarMenuItem className="flex flex-col space-y-2" >
                        <SidebarMenuButton
                            asChild
                            className="flex text-[#717F96] hover:bg-[#FFF9F3] hover:text-[#F08F3E] h-10 group"
                        >
                            <Link href="/referencias" className={`flex text-[#717F96] cursor-pointer text-sm hover:bg-[#FFF9F3] hover:text-[#F08F3E] hover:font-semibold h-10`}
                                >
                                <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="currentColor"  
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current transition-colors cursor-pointer duration-200 group-hover:fill-[#F08F3E]"
                                >
                                <path
                                    d="M12.9908 1.0399C12.9098 1.04114 12.8301 1.06131 12.7583 1.0988L1.83826 6.8188C1.75421 6.86294 1.68384 6.92924 1.63478 7.01052C1.58573 7.0918 1.55986 7.18496 1.55998 7.2799V8.8399C1.55999 8.97781 1.61478 9.11006 1.7123 9.20758C1.80981 9.30509 1.94207 9.35988 2.07998 9.3599H2.59998V10.0881C2.59998 10.7183 3.04941 11.2553 3.63998 11.3993V20.806H2.13178L2.2181 20.8131C1.57745 20.7053 1.03998 21.2547 1.03998 21.8561V23.2851C1.03998 23.8988 1.52569 24.4399 2.13178 24.4399H23.8164C24.4225 24.4399 24.9082 23.9394 24.9082 23.3379V21.909C24.9082 21.3076 24.4225 20.806 23.8164 20.806H22.36V11.3993C22.9505 11.2553 23.4 10.7183 23.4 10.0881V9.3599H23.92C24.0579 9.35988 24.1901 9.30509 24.2877 9.20758C24.3852 9.11006 24.44 8.97781 24.44 8.8399V7.2799C24.4401 7.18496 24.4142 7.0918 24.3652 7.01052C24.3161 6.92924 24.2458 6.86294 24.1617 6.8188L13.2417 1.0988C13.1643 1.05843 13.0781 1.03818 12.9908 1.0399ZM13 2.14794L23.4 7.59474V8.3199H22.9673C22.9112 8.31062 22.8539 8.31062 22.7977 8.3199H17.7602C17.731 8.31502 17.7015 8.31264 17.6719 8.31279C17.6467 8.31333 17.6215 8.31571 17.5967 8.3199H15.6873C15.6312 8.31062 15.5739 8.31062 15.5177 8.3199H10.4802C10.451 8.31502 10.4215 8.31264 10.3919 8.31279C10.3667 8.31333 10.3415 8.31571 10.3167 8.3199H8.40732C8.35117 8.31062 8.29387 8.31062 8.23771 8.3199H3.20021C3.17102 8.31502 3.14145 8.31264 3.11185 8.31279C3.08666 8.31333 3.06154 8.31571 3.0367 8.3199H2.59998V7.59474L13 2.14794ZM3.63998 9.3599H7.79998V10.0881C7.79998 10.2865 7.68655 10.3999 7.48818 10.3999H3.95178C3.7534 10.3999 3.63998 10.2865 3.63998 10.0881V9.3599ZM8.83998 9.3599H9.87998V10.0881C9.87998 10.7183 9.3294 11.2553 9.92 11.3993V20.806H7.79998V11.3993C8.39055 11.2553 8.83998 10.7183 8.83998 10.0881V9.3599ZM10.92 9.3599H15.08V10.0881C15.08 10.2865 14.9666 10.3999 14.7682 10.3999H11.2318C11.0334 10.3999 10.92 10.2865 10.92 10.0881V9.3599ZM16.12 9.3599H17.16V10.0881C17.16 10.7183 17.6094 11.2553 18.2 11.3993V20.806H15.08V11.3993C15.6705 11.2553 16.12 10.7183 16.12 10.0881V9.3599ZM18.2 9.3599H22.36V10.0881C22.36 10.2865 22.2466 10.3999 22.0482 10.3999H18.5118C18.3134 10.3999 18.2 10.2865 18.2 10.0881V9.3599ZM4.67998 11.4399H6.75998V20.7999H4.67998V11.4399ZM11.96 11.4399H14.04V20.7999H11.96V11.4399ZM19.24 11.4399H21.32V20.7999H19.24V11.4399ZM2.07185 21.8419C2.09173 21.8444 2.11174 21.8458 2.13178 21.846H23.8164C23.8343 21.846 23.8682 21.8749 23.8682 21.909V23.3379C23.8682 23.372 23.8343 23.3999 23.8164 23.3999H2.13178C2.11386 23.3999 2.07998 23.4119 2.07998 23.2851V21.8561C2.07998 21.8441 2.07547 21.8439 2.07185 21.8419Z"
                                    fill="currentColor"  
                                    stroke="currentColor" 
                                    strokeWidth="0.3"
                                />
                                </svg>

                                <span>Referências</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </div>
        </SidebarMenu>
        </SidebarGroupContent>
    </SidebarGroup>
    </SidebarContent>        
    </Sidebar>
    )
}