"use client"
import {  
  DollarSign, 
  FileText, 
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { CLASS_FEES } from "@/types/school-system";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export function Payments(){
    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Gestão de Pagamentos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Tabela de Preços por Classe</h4>
                    <div className="space-y-2 text-sm">
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">1º ao 4º ano:</p>
                        <p>Mensalidade: {CLASS_FEES['1-4'].mensalidade.toLocaleString()} Kz</p>
                        <p>Matrícula: {CLASS_FEES['1-4'].matricula.toLocaleString()} Kz</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">5º ao 6º ano:</p>
                        <p>Mensalidade: {CLASS_FEES['5-6'].mensalidade.toLocaleString()} Kz</p>
                        <p>Folha de Prova: {CLASS_FEES['5-6'].folha_prova.toLocaleString()} Kz</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <p className="font-medium">7º ao 9º ano:</p>
                        <p>Mensalidade: {CLASS_FEES['7-9'].mensalidade.toLocaleString()} Kz</p>
                        <p>Folha de Prova: {CLASS_FEES['7-9'].folha_prova.toLocaleString()} Kz</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full">Processar Pagamentos</Button>
                  <Button className="w-full">Cadastrar propinas por classe</Button>
                  <Button className="w-full">Cadastrar pagamentos de confirmação de matrículas por classe</Button>
                  <Button className="w-full">Cadastrar pagamentos de inscrição por classe</Button>
                  <Button className="w-full">Cadastrar pagamentos de actividades</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recibos e Controle de Caixa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Emitir Recibo
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Relatório de Fluxo de Caixa
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Confirmar Pagamentos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
        </div>
    )
}