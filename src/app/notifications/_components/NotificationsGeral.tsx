
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Bell, Check, X, CheckCheck, AlertCircle, Info, Calendar } from "@/lib/icons";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Notification {
  id: number;
  title: string;
  description: string;
  date: string;
  isRead: boolean;
  type: 'info' | 'warning' | 'success' | 'error';
  priority: 'low' | 'medium' | 'high';
}

const mockNotifications: Notification[] = [
  {
    id: 1,
    title: "Nova mensagem do professor",
    description: "O professor João Silva enviou uma nova atividade para a turma de matemática. Prazo de entrega: 15/06/2025",
    date: "2025-06-14T10:30:00",
    isRead: false,
    type: 'info',
    priority: 'medium'
  },
  {
    id: 2,
    title: "Reunião de pais agendada",
    description: "Reunião de pais e mestres agendada para dia 20/06/2025 às 19h no auditório principal",
    date: "2025-06-14T09:15:00",
    isRead: false,
    type: 'warning',
    priority: 'high'
  },
  {
    id: 3,
    title: "Avaliação aprovada",
    description: "Sua avaliação de História foi aprovada com nota 8.5. Parabéns pelo excelente desempenho!",
    date: "2025-06-13T16:45:00",
    isRead: true,
    type: 'success',
    priority: 'low'
  },
  {
    id: 4,
    title: "Prazo de matrícula",
    description: "Lembrete: O prazo para renovação de matrícula termina em 25/06/2025. Procure a secretaria",
    date: "2025-06-13T14:20:00",
    isRead: false,
    type: 'warning',
    priority: 'high'
  },
  {
    id: 5,
    title: "Sistema atualizado",
    description: "O sistema escolar foi atualizado com novas funcionalidades. Confira as novidades no menu principal",
    date: "2025-06-12T11:30:00",
    isRead: true,
    type: 'info',
    priority: 'low'
  },
  {
    id: 6,
    title: "Evento cancelado",
    description: "O evento esportivo programado para hoje foi cancelado devido às condições climáticas",
    date: "2025-06-12T08:00:00",
    isRead: false,
    type: 'error',
    priority: 'medium'
  }
];

export default function NotificationsGeral() {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 4;

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const totalPages = Math.ceil(notifications.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedNotifications = notifications.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCheck className="w-5 h-5 text-green-500" />;
      case 'warning': return <AlertCircle className="w-5 h-5 text-orange-500" />;
      case 'error': return <X className="w-5 h-5 text-red-500" />;
      default: return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-orange-500';
      default: return 'border-l-blue-500';
    }
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    toast({
      description: (
        <div className="flex items-center gap-3">
          <CheckCheck className="w-5 h-5 text-green-500" />
          <span>Todas as notificações foram marcadas como lidas</span>
        </div>
      ),
      className: "border-l-4 border-l-green-500"
    });
  };

  const toggleReadStatus = (id: number) => {
    setNotifications(prev => 
      prev.map(n => 
        n.id === id ? { ...n, isRead: !n.isRead } : n
      )
    );
    
    const notification = notifications.find(n => n.id === id);
    toast({
      description: (
        <div className="flex items-center gap-3">
          {notification?.isRead ? (
            <>
              <Bell className="w-5 h-5 text-orange-500" />
              <span>Notificação marcada como não lida</span>
            </>
          ) : (
            <>
              <Check className="w-5 h-5 text-green-500" />
              <span>Notificação marcada como lida</span>
            </>
          )}
        </div>
      ),
      className: `border-l-4 ${notification?.isRead ? 'border-l-orange-500' : 'border-l-green-500'}`
    });
  };

  if (isLoading) {
    return (
      <div className="p-6 space-y-4 max-w-4xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <Bell className="w-6 h-6 text-blue-600 absolute top-3 left-3" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Bell className="w-8 h-8 text-blue-600" />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                {unreadCount}
              </span>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Notificações</h1>
            <p className="text-gray-600">{unreadCount} não lidas de {notifications.length} total</p>
          </div>
        </div>
        
        {unreadCount > 0 && (
          <Button
            onClick={markAllAsRead}
            className="bg-green-600 hover:bg-green-700 text-white transition-all duration-200 transform hover:scale-105"
          >
            <CheckCheck className="w-4 h-4 mr-2" />
            Marcar todas como lidas
          </Button>
        )}
      </div>

      {/* Notifications List */}
      {notifications.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border">
          <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">Nenhuma notificação disponível</p>
        </div>
      ) : (
        <div className="space-y-4">
          {paginatedNotifications.map((notification, index) => (
            <div
              key={notification.id}
              className={`
                bg-white border-l-4 ${getPriorityColor(notification.priority)} 
                rounded-lg shadow-sm hover:shadow-md transition-all duration-300 
                transform hover:-translate-y-1 animate-fade-in
                ${notification.isRead ? 'opacity-75' : 'border-r-2 border-r-blue-200'}
              `}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="p-4 flex justify-between items-start gap-4">
                <div className="flex gap-3 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    {getTypeIcon(notification.type)}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-semibold ${notification.isRead ? 'text-gray-600' : 'text-gray-800'}`}>
                        {notification.title}
                      </h3>
                      {!notification.isRead && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                      )}
                    </div>
                    <p className={`text-sm ${notification.isRead ? 'text-gray-500' : 'text-gray-700'}`}>
                      {notification.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="w-3 h-3" />
                      {formatDate(notification.date)}
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => toggleReadStatus(notification.id)}
                  variant="ghost"
                  size="sm"
                  className={`
                    transition-all duration-200 hover:scale-105
                    ${notification.isRead 
                      ? 'text-orange-600 hover:bg-orange-50' 
                      : 'text-green-600 hover:bg-green-50'
                    }
                  `}
                >
                  {notification.isRead ? (
                    <>
                      <Bell className="w-4 h-4 mr-2" />
                      Marcar como não lida
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Marcar como lida
                    </>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink 
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}