import {StudentProfileCard} from './_components/StudentProfileCard'
import {ScheduleCard} from './_components/ScheduleCard.tsx'
import {PaymentHistoryCard} from './_components/PaymentHistoryCard.tsx'

function StudentsDetails() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <StudentProfileCard />
          </div>
          
          {/* Schedule Section */}
          <div className="lg:col-span-1">
            <ScheduleCard />
          </div>
          
          {/* Payment History Section */}
          <div className="lg:col-span-1">
            <PaymentHistoryCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentsDetails