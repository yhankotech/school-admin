"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Class, TuitionFee } from "@/types/types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TuitionConfig() {
  const [classes,] = useState<Class[]>([]);
  const [tuitionFees, ] = useState<TuitionFee[]>([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [amount, setAmount] = useState("");
  const [enrollmentFee, setEnrollmentFee] = useState("");
  const [activityFee, setActivityFee] = useState("");
  const [loading,] = useState(false);

  return (
    <div className="grid gap-6 lg:grid-cols-2 animate-fade-in">
      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Configurar Valores</CardTitle>
        </CardHeader>
        <CardContent>
          <form  className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="class">Classe/Nível</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass} required>
                <SelectTrigger id="class">
                  <SelectValue placeholder="Selecione uma classe" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tuition">Valor da Propina Mensal (AOA)</Label>
              <Input
                id="tuition"
                type="number"
                step="0.01"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enrollment">Taxa de Matrícula (AOA)</Label>
              <Input
                id="enrollment"
                type="number"
                step="0.01"
                value={enrollmentFee}
                onChange={(e) => setEnrollmentFee(e.target.value)}
                placeholder="0.00"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="activity">Taxa de Atividades (AOA)</Label>
              <Input
                id="activity"
                type="number"
                step="0.01"
                value={activityFee}
                onChange={(e) => setActivityFee(e.target.value)}
                placeholder="0.00"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Salvando..." : "Salvar Configuração"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="card-hover">
        <CardHeader>
          <CardTitle>Valores Configurados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Classe</TableHead>
                  <TableHead>Propina</TableHead>
                  <TableHead>Matrícula</TableHead>
                  <TableHead>Atividade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tuitionFees.map((fee) => (
                  <TableRow key={fee.id}>
                    <TableCell className="font-medium">123</TableCell>
                    <TableCell>54556666</TableCell>
                    <TableCell>99332</TableCell>
                    <TableCell>88783889</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
