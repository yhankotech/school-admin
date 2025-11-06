"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  PaymentWithStudent } from "@/types/types";
import { DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";;

export function CashFlowReport() {
  const [recentPayments, ] = useState<PaymentWithStudent[]>([]);


  return (
    <div className="space-y-6 animate-slide-up">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="card-gradient border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Confirmado</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gradient-primary">
               <span>----</span>            
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient border-secondary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Pendente</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gradient-secondary">
              <span>----</span>  
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient border-accent/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Matrículas</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              <span>----</span>  
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient border-primary/20">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Propinas</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
               <span>----</span>  
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Pagamentos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/5 transition-smooth"
              >
                <div className="space-y-1">
                  <p className="font-medium">{payment.students?.name || 'N/A'}</p>
                  <p className="text-sm text-muted-foreground">
                     <span>----</span>  
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="font-bold">22344554</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
