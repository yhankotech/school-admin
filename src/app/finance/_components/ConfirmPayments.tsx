"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PaymentWithStudent } from "@/types/types";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

export function ConfirmPayments() {
  const [pendingPayments ] = useState<PaymentWithStudent[]>([]);
  const [confirmedBy, setConfirmedBy] = useState("");


  return (
    <Card className="card-hover animate-slide-up">
      <CardHeader>
        <CardTitle>Confirmar Pagamentos Pendentes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Confirmado por:</label>
          <Input
            value={confirmedBy}
            onChange={(e) => setConfirmedBy(e.target.value)}
            placeholder="Nome de quem está confirmando"
          />
        </div>

        <div className="space-y-4">
          {pendingPayments.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              Não há pagamentos pendentes no momento.
            </p>
          ) : (
            pendingPayments.map((payment) => (
              <div
                key={payment.id}
                className="border rounded-lg p-4 space-y-3 hover:bg-accent/5 transition-smooth"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="font-semibold text-lg">{payment.students?.name || 'N/A'}</p>
                    <Badge variant="secondary">Cartão</Badge>
                    <p className="text-sm text-muted-foreground">
                      Registrado em: {new Date(payment.created_at).toLocaleString('pt-AO')}
                    </p>
                    {payment.notes && (
                      <p className="text-sm text-muted-foreground">Obs: {payment.notes}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gradient-primary">
                      3237821
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    variant="default"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Confirmar
                  </Button>
                  <Button
                    variant="destructive"
                    className="flex-1"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Cancelar
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
