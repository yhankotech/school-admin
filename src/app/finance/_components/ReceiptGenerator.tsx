"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaymentWithStudent, Receipt } from "@/types/types";
import { Printer, FileText } from "lucide-react";


export function ReceiptGenerator() {
  const [confirmedPayments, ] = useState<PaymentWithStudent[]>([]);
  const [receipts, ] = useState<Receipt[]>([]);
  const [issuedBy, setIssuedBy] = useState("");

  const printReceipt = (receipt: Receipt) => {
    const printWindow = window.open('', '', 'width=800,height=600');
    if (!printWindow) return;

    const content = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Recibo ${receipt.receipt_number}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            .header { text-align: center; margin-bottom: 40px; }
            .content { margin: 20px 0; }
            .footer { margin-top: 60px; text-align: center; }
            .signature { border-top: 1px solid #000; width: 300px; margin: 40px auto 0; padding-top: 10px; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            td { padding: 10px; border-bottom: 1px solid #ddd; }
            .label { font-weight: bold; width: 200px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>RECIBO DE PAGAMENTO</h1>
            <h2>${receipt.receipt_number}</h2>
          </div>
          <div class="content">
            <table>
              <tr>
                <td class="label">Estudante:</td>
                <td>${receipt.student_name}</td>
              </tr>
              <tr>
                <td class="label">Descrição:</td>
                <td>${receipt.description}</td>
              </tr>
              <tr>
                <td class="label">Valor:</td>
                <td style="font-size: 1.2em; font-weight: bold;">
                  ${new Intl.NumberFormat('pt-AO', { style: 'currency', currency: 'AOA' }).format(Number(receipt.amount))}
                </td>
              </tr>
              <tr>
                <td class="label">Data de Emissão:</td>
                <td>${new Date(receipt.issued_date).toLocaleString('pt-AO')}</td>
              </tr>
              <tr>
                <td class="label">Emitido por:</td>
                <td>${receipt.issued_by}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            <div class="signature">
              Assinatura do Responsável
            </div>
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA',
    }).format(value);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Gerar Novo Recibo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Emitido por:</label>
            <Input
              value={issuedBy}
              onChange={(e) => setIssuedBy(e.target.value)}
              placeholder="Nome de quem está emitindo"
            />
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {confirmedPayments.map((payment) => (
              <div
                key={payment.id}
                className="border rounded-lg p-3 space-y-2 hover:bg-accent/5 transition-smooth"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">{payment.students?.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {payment.type === 'enrollment' ? 'Matrícula' : payment.type === 'tuition' ? 'Propina' : 'Atividade'}
                    </p>
                  </div>
                  <p className="font-bold">{formatCurrency(Number(payment.amount))}</p>
                </div>
                <Button
                  size="sm"
                  className="w-full"
                >
                  Gerar Recibo
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Printer className="h-5 w-5" />
            Recibos Emitidos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
            {receipts.map((receipt) => (
              <div
                key={receipt.id}
                className="border rounded-lg p-3 space-y-2 hover:bg-accent/5 transition-smooth"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="font-semibold">{receipt.receipt_number}</p>
                    <p className="text-sm">{receipt.student_name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(receipt.issued_date).toLocaleDateString('pt-AO')}
                    </p>
                  </div>
                  <p className="font-bold">{formatCurrency(Number(receipt.amount))}</p>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => printReceipt(receipt)}
                  className="w-full"
                >
                  <Printer className="h-4 w-4 mr-2" />
                  Imprimir
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
