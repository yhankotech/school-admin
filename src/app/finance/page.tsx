"use client"
 
import {DashboardMetrics} from "./_components/dashboardMetrics";
import {BalanceAnalytics} from "./_components/balanceAnalitcs";
import {StudentTable} from "./_components/studentTable";
import {ExpenseTable} from "./_components/expensive";
import { Financial } from "./_components/financial";

const Finance = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          <DashboardMetrics />
          <BalanceAnalytics />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <StudentTable />
            <ExpenseTable />
          </div>
          <div>
            <Financial/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
