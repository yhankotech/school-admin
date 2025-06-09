
import { Home, List, HandCoins,  MessagesSquare, CalendarDays, UsersThree, Student, SuitcaseSimple, University } from "@/lib/icons";


export const routes = [
  {
    id: 1,
    title: "Dashboard",
    url: "dashboard",
    icon: Home,
  },
  {
    id: 2,
    title: "Estudantes",
    url: "students",
    icon: Student,
  },
  {
    id: 3,
    title: "Area pedagógica",
    url: "pedagogical-area",
    icon: University,
  },
   {
    id: 4,
    title: "Associação",
    url: "students-association",
    icon: UsersThree,
 },
  {
    id: 5,
    title: "Eventos",
    url: "events",
    icon: CalendarDays,
  },
  {
    id: 6,
    title: "Finanças",
    url: "finance",
    icon: HandCoins,
  },
 {
  id: 7,
    title: "Funcionários",
    url: "employees",
    icon: SuitcaseSimple,
 },
  {
    id: 8,
    title: "Chat",
    url: "chat",
    icon:  MessagesSquare,
 },
  {
    id: 9,
    title: "Atividades",
    url: "activity",
    icon: List,
 },
]