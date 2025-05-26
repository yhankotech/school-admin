import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
  import SmsNotificationIcon from "@/assets/smsNotificationIcon.svg";
  import { useState } from "react";
  import { NotificationsConfiguratiosReferencia } from "./NotificationsConfiguratiosReferencia";
  import { NotificationsConfiguratiosPayment } from "./NotificationsConfigurationPayment";
  import { Button } from "@/components/ui/button";
  import Image from "next/image";

  export function MessageConfigurater() {
    const [ close, setClosed] = useState(false)
  
    const closeDialog = function(value: boolean){
      setClosed(value)
    }
  
    return (
      <Sheet onOpenChange={closeDialog} open={close}>
        <SheetTrigger asChild>
          <Button className="flex justify-center cursor-pointer items-center h-11 w-[15rem] bg-[#F08F3E] hover:bg-[#E07923] text-[#FFFF] hover:text-[#FFFF] rounded-[6px] font-semibold border-[#F08F3E] shadow-none">
            <Image src={SmsNotificationIcon} alt="fileIcon" className="w-6 h-8" />
                Configurar Mensagem
          </Button>
        </SheetTrigger>
        <SheetContent  style={{minWidth:600}}>
          <SheetHeader className="ml-14 mt-4 space-y-8 ">
            <SheetTitle className="text-[#1D5298] font-semibold">Configuração de notificação</SheetTitle>
          </SheetHeader>
            <Tabs defaultValue="Reference" className="mt-14">
              <TabsList className="flex flex-col">
                <div className="flex space-x-3">
                  <TabsTrigger value="Reference" className="h-12 w-[10rem] boerder-[2px] border-b-0 mt-1 -ml-32">Referências</TabsTrigger>
                  <TabsTrigger value="paymets" className="h-12 w-[10rem] boerder border-b-0 mt-1">Pagamentos</TabsTrigger>
                </div>
                <div className="absolute bg-[#FFF] border border-b-0 border-l-0 border-r-0 w-[29rem] h-[7px] mt-12"></div>
              </TabsList>
  
              <div className="mt-8 overflow-y-auto scrollbar-none">
                <TabsContent value="Reference">
                 <NotificationsConfiguratiosReferencia/>
                </TabsContent>
  
                <TabsContent value="paymets">
                  <NotificationsConfiguratiosPayment/>
                </TabsContent>
              </div>
          </Tabs>
        </SheetContent>
      </Sheet>
    )
  }