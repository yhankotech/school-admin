"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"

export function PaymentHistoryCard () {
  const paymentHistory = [
    {
      id: "#123456789",
      date: "2 March 2021, 13:45 PM",
      amount: "$ 50,036",
      status: "Complete"
    },
    {
      id: "#123456789",
      date: "2 March 2021, 13:45 PM", 
      amount: "$ 50,036",
      status: "Pending"
    },
    {
      id: "#123456789",
      date: "2 March 2021, 13:45 PM",
      amount: "$ 50,036", 
      status: "Cancelled"
    },
    {
      id: "#123456789",
      date: "2 March 2021, 13:45 PM",
      amount: "$ 50,036",
      status: "Complete"
    }
  ]

  const getStatusClass = (status) => {
    switch(status.toLowerCase()) {
      case 'complete':
        return 'payment-status-complete'
      case 'pending':
        return 'payment-status-pending'
      case 'cancelled':
        return 'payment-status-cancelled'
      default:
        return 'payment-status-complete'
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Payment History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {paymentHistory.map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">{payment.id}</p>
                  <p className="text-xs text-muted-foreground">{payment.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-sm">{payment.amount}</span>
                <span className={getStatusClass(payment.status)}>
                  {payment.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-semibold">1-5</span> from <span className="font-semibold">100</span> data
          </p>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button variant="default" size="sm" className="w-8 h-8 p-0">
              1
            </Button>
            
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              2
            </Button>
            
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              3
            </Button>
            
            <Button variant="outline" size="sm" className="w-8 h-8 p-0">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

