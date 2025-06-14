import { Phone, Mail, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Staff {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
}

const staffMembers: Staff[] = [
  {
    id: "1",
    name: "Dr. Maria Silva",
    position: "Diretora",
    department: "Administração",
    email: "maria.silva@escola.com",
    phone: "+55 11 99999-0001"
  },
  {
    id: "2", 
    name: "Prof. João Santos",
    position: "Professor de Matemática",
    department: "Ensino",
    email: "joao.santos@escola.com",
    phone: "+55 11 99999-0002"
  },
  {
    id: "3",
    name: "Ana Costa",
    position: "Coordenadora Pedagógica",
    department: "Coordenação",
    email: "ana.costa@escola.com",
    phone: "+55 11 99999-0003"
  },
  {
    id: "4",
    name: "Carlos Oliveira",
    position: "Professor de Física",
    department: "Ensino",
    email: "carlos.oliveira@escola.com",
    phone: "+55 11 99999-0004"
  },
  {
    id: "5",
    name: "Lucia Ferreira",
    position: "Bibliotecária",
    department: "Biblioteca",
    email: "lucia.ferreira@escola.com",
    phone: "+55 11 99999-0005"
  },
  {
    id: "6",
    name: "Roberto Lima",
    position: "Coordenador de TI",
    department: "Tecnologia",
    email: "roberto.lima@escola.com",
    phone: "+55 11 99999-0006"
  },
  {
    id: "7",
    name: "Fernanda Rocha",
    position: "Psicóloga Escolar",
    department: "Apoio",
    email: "fernanda.rocha@escola.com",
    phone: "+55 11 99999-0007"
  },
  {
    id: "8",
    name: "Miguel Torres",
    position: "Professor de História",
    department: "Ensino",
    email: "miguel.torres@escola.com",
    phone: "+55 11 99999-0008"
  },
  {
    id: "9",
    name: "Patricia Alves",
    position: "Secretária Escolar",
    department: "Administração",
    email: "patricia.alves@escola.com",
    phone: "+55 11 99999-0009"
  },
  {
    id: "10",
    name: "Eduardo Mendes",
    position: "Professor de Educação Física",
    department: "Ensino",
    email: "eduardo.mendes@escola.com",
    phone: "+55 11 99999-0010"
  },
  {
    id: "11", 
    name: "Mariana Souza",
    position: "Nutricionista",
    department: "Alimentação",
    email: "mariana.souza@escola.com",
    phone: "+55 11 99999-0011"
  },
  {
    id: "12",
    name: "Ricardo Barbosa",
    position: "Zelador",
    department: "Manutenção",
    email: "ricardo.barbosa@escola.com",
    phone: "+55 11 99999-0012"
  }
];

export function StaffGrid () {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getDepartmentColor = (department: string) => {
    const colors = {
      "Administração": "bg-blue-100 text-blue-800",
      "Ensino": "bg-green-100 text-green-800",
      "Coordenação": "bg-purple-100 text-purple-800",
      "Biblioteca": "bg-yellow-100 text-yellow-800",
      "Tecnologia": "bg-gray-100 text-gray-800",
      "Apoio": "bg-pink-100 text-pink-800",
      "Alimentação": "bg-orange-100 text-orange-800",
      "Manutenção": "bg-red-100 text-red-800"
    };
    return colors[department as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Funcionários da Instituição</h2>
        <p className="text-gray-600">Gerencie todos os funcionários e suas informações</p>
      </div>

      {/* Grid of Staff */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {staffMembers.map((staff) => (
          <div key={staff.id} className="bg-gray-50 rounded-lg p-6 relative hover:shadow-md transition-shadow">
            {/* More Options */}
            <div className="absolute top-4 right-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg z-50">
                  <DropdownMenuItem className="hover:bg-gray-50">Ver Detalhes</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-50">Editar</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-50 text-red-600">Remover</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Avatar */}
            <div className="text-center mb-4">
              <Avatar className="h-16 w-16 mx-auto mb-3">
                <AvatarFallback className="bg-purple-200 text-purple-700 text-lg font-medium">
                  {getInitials(staff.name)}
                </AvatarFallback>
              </Avatar>
              
              {/* Name */}
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{staff.name}</h3>
              
              {/* Position */}
              <p className="text-gray-700 text-sm font-medium mb-2">{staff.position}</p>
              
              {/* Department Badge */}
              <Badge className={`${getDepartmentColor(staff.department)} text-xs`}>
                {staff.department}
              </Badge>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-600 truncate">{staff.email}</p>
              <p className="text-xs text-gray-600">{staff.phone}</p>
            </div>

            {/* Contact Buttons */}
            <div className="flex justify-center space-x-2">
              <Button 
                size="icon" 
                className="h-8 w-8 bg-[#6366f1] hover:bg-[#5856eb] text-white rounded-full"
              >
                <Phone className="h-4 w-4" />
              </Button>
              <Button 
                size="icon" 
                className="h-8 w-8 bg-[#6366f1] hover:bg-[#5856eb] text-white rounded-full"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Mostrando 1-12 de 45 funcionários
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" className="text-gray-400 hover:text-gray-600" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive className="bg-[#6366f1] text-white hover:bg-[#5856eb]">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-gray-600 hover:bg-gray-100">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" className="text-gray-600 hover:bg-gray-100">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" className="text-gray-400 hover:text-gray-600" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
