"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lock,
  Unlock,
  Search,
  Download,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
} from "@/lib/icons";
import { AddNewUserPermission } from "./_components/add_permission";

export default function Permission(){
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Admin Sistema",
      email: "admin@escola.com",
      role: "Administrador",
      status: "Ativo",
      permissions: {
        dashboard: true,
        students: true,
        teachers: true,
        classes: true,
        financial: true,
        activities: true,
        payments: true,
        attendance: true,
        discipline: true,
        permissions: true,
      },
    },
    {
      id: 2,
      name: "Prof. Carlos Silva",
      email: "carlos.silva@escola.com",
      role: "Professor",
      status: "Ativo",
      permissions: {
        dashboard: true,
        students: true,
        teachers: false,
        classes: true,
        financial: false,
        activities: true,
        payments: false,
        attendance: true,
        discipline: true,
        permissions: false,
      },
    },
    {
      id: 3,
      name: "Secretária Maria",
      email: "maria@escola.com",
      role: "Secretária",
      status: "Ativo",
      permissions: {
        dashboard: true,
        students: true,
        teachers: true,
        classes: true,
        financial: true,
        activities: true,
        payments: true,
        attendance: false,
        discipline: false,
        permissions: false,
      },
    },
    {
      id: 4,
      name: "Diretor João",
      email: "joao@escola.com",
      role: "Diretor",
      status: "Ativo",
      permissions: {
        dashboard: true,
        students: true,
        teachers: true,
        classes: true,
        financial: true,
        activities: true,
        payments: true,
        attendance: true,
        discipline: true,
        permissions: true,
      },
    },
    {
      id: 5,
      name: "Assistente Pedro",
      email: "pedro@escola.com",
      role: "Assistente",
      status: "Inativo",
      permissions: {
        dashboard: true,
        students: true,
        teachers: false,
        classes: false,
        financial: false,
        activities: false,
        payments: false,
        attendance: false,
        discipline: false,
        permissions: false,
      },
    },
  ]);

  const [showPermissionDetails, setShowPermissionDetails] = useState<number | null>(null);

  const permissionLabels: Record<string, string> = {
    dashboard: "Dashboard",
    students: "Gestão de Alunos",
    teachers: "Gestão de Professores",
    classes: "Gestão de Turmas",
    financial: "Relatório Financeiro",
    activities: "Atividades e Eventos",
    payments: "Pagamentos",
    attendance: "Frequência",
    discipline: "Gestão Disciplinar",
    permissions: "Gestão de Permissões",
  };

  const togglePermission = (userId: number, permission: string) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          permissions: {
            ...user.permissions,
            [permission]: !user.permissions[permission as keyof typeof user.permissions],
          },
        };
      }
      return user;
    }));
  };

  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          status: user.status === "Ativo" ? "Inativo" : "Ativo",
        };
      }
      return user;
    }));
  };

  const countPermissions = (permissions: Record<string, boolean>) => {
    return Object.values(permissions).filter(Boolean).length;
  };

  const getRoleColor = (role: string) => {
    const colors: Record<string, string> = {
      "Administrador": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
      "Diretor": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100",
      "Professor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
      "Secretária": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
      "Assistente": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    };
    return colors[role] || colors["Assistente"];
  };

  return(
    <div className="space-y-8 p-8">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Gestão de Permissões</h1>
            <p className="text-muted-foreground">Controle de acesso e permissões de usuários</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2 rounded-full hover:cursor-pointer bg-[#5856eb] text-white hover:text-white hover:bg-[#2d2add]">
              <Download className="w-4 h-4" />
              Exportar
            </Button>
            < AddNewUserPermission/>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Total de Usuários</p>
                <p className="text-4xl font-bold text-primary">{users.length}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Usuários Ativos</p>
                <p className="text-4xl font-bold text-green-600">
                  {users.filter(u => u.status === "Ativo").length}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Administradores</p>
                <p className="text-4xl font-bold text-red-600">
                  {users.filter(u => u.role === "Administrador").length}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Professores</p>
                <p className="text-4xl font-bold text-blue-600">
                  {users.filter(u => u.role === "Professor").length}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Pesquisar por nome ou email..."
              className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Usuários e Permissões</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm rounded-2xl border-[1px] border-gray-300">
                <thead>
                  <tr className="border-[1px] rounded-2xl border-gray-300">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Usuário</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Função</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Permissões</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-[1px] border-gray-200 hover:bg-muted/50">
                      <td className="py-3 px-4 font-medium text-foreground">{user.name}</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">{user.email}</td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="font-semibold text-foreground">
                            {countPermissions(user.permissions)}/10
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setShowPermissionDetails(
                                showPermissionDetails === user.id ? null : user.id
                              )
                            }
                          >
                            {showPermissionDetails === user.id ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "Ativo"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <div className="flex gap-2 justify-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0"
                            onClick={() => toggleUserStatus(user.id)}
                            title={user.status === "Ativo" ? "Desativar" : "Ativar"}
                          >
                            {user.status === "Ativo" ? (
                              <Unlock className="w-4 h-4 text-green-600" />
                            ) : (
                              <Lock className="w-4 h-4 text-red-600" />
                            )}
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-600">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Permission Details */}
        {showPermissionDetails !== null && (
          <Card>
            <CardHeader>
              <CardTitle>
                Detalhes de Permissões - {users.find(u => u.id === showPermissionDetails)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(
                  users.find(u => u.id === showPermissionDetails)?.permissions || {}
                ).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {value ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                      <span className="font-medium text-foreground">
                        {permissionLabels[key] || key}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => togglePermission(showPermissionDetails, key)}
                    >
                      {value ? "Revogar" : "Conceder"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Role Templates */}
        <Card>
          <CardHeader>
            <CardTitle>Modelos de Função (Roles)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Diretor</h3>
                <p className="text-sm text-muted-foreground mb-3">Acesso a gestão e relatórios</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>✓ Dashboard</p>
                  <p>✓ Gestão Completa</p>
                  <p>✓ Relatórios</p>
                  <p>✗ Permissões</p>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Director pedagógico</h3>
                <p className="text-sm text-muted-foreground mb-3">Acesso total a todas as funcionalidades</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>✓ Dashboard</p>
                  <p>✓ Gestão Completa</p>
                  <p>✓ Relatórios</p>
                  <p>✓ Permissões</p>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Professor</h3>
                <p className="text-sm text-muted-foreground mb-3">Acesso limitado a turmas e frequência</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>✓ Dashboard</p>
                  <p>✓ Alunos e Turmas</p>
                  <p>✓ Frequência</p>
                  <p>✗ Financeiro</p>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Secretária</h3>
                <p className="text-sm text-muted-foreground mb-3">Acesso a gestão e pagamentos</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>✓ Dashboard</p>
                  <p>✓ Gestão de Alunos</p>
                  <p>✓ Pagamentos</p>
                  <p>✗ Frequência</p>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-3">Assistente</h3>
                <p className="text-sm text-muted-foreground mb-3">Acesso mínimo para suporte</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>✓ Dashboard</p>
                  <p>✓ Alunos</p>
                  <p>✗ Financeiro</p>
                  <p>✗ Permissões</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
  )
}