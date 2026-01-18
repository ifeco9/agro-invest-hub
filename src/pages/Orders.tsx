import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Calendar, DollarSign, Package, CheckCircle, Clock, XCircle } from "lucide-react";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Mock data for orders
  const orders = [
    {
      id: "ORD-001",
      date: "2023-06-15",
      amount: 2500000,
      status: "completed",
      type: "AgroTrade Investment",
      returns: 150000,
      duration: "6 months"
    },
    {
      id: "ORD-002",
      date: "2023-07-22",
      amount: 5000000,
      status: "processing",
      type: "AgroFarm Membership",
      returns: 750000,
      duration: "12 months"
    },
    {
      id: "ORD-003",
      date: "2023-08-10",
      amount: 10000000,
      status: "pending",
      type: "AgroReserve Premium",
      returns: 2500000,
      duration: "24 months"
    },
    {
      id: "ORD-004",
      date: "2023-05-30",
      amount: 3000000,
      status: "completed",
      type: "AgroTrade Investment",
      returns: 180000,
      duration: "6 months"
    }
  ];

  const filteredOrders = activeTab === "all"
    ? orders
    : orders.filter(order => order.status === activeTab);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "processing":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "pending":
        return <Clock className="h-5 w-5 text-blue-500" />;
      default:
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "processing":
        return "Processing";
      case "pending":
        return "Pending";
      default:
        return "Cancelled";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-yellow-100 text-yellow-800";
      case "pending":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-red-100 text-red-800";
    }
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 bg-teal-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 mb-3 sm:mb-4">
            Contribution Dashboard
          </h1>
          <p className="text-base sm:text-lg text-teal-700 max-w-md sm:max-w-2xl mx-auto">
            Track your agricultural contributions and monitor shared surplus
          </p>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <Card className="bg-white border-teal-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-teal-700">
                Total Contributions
              </CardTitle>
              <DollarSign className="h-4 w-4 text-teal-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-900">₦20,500,000</div>
              <p className="text-xs text-teal-600">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-teal-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-teal-700">
                Active Contributions
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-teal-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-900">8</div>
              <p className="text-xs text-teal-600">4 new this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-teal-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-teal-700">
                Shared Surplus Earned
              </CardTitle>
              <Calendar className="h-4 w-4 text-teal-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-900">₦2,160,000</div>
              <p className="text-xs text-teal-600">This financial year</p>
            </CardContent>
          </Card>

          <Card className="bg-white border-teal-200 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-teal-700">
                Upcoming Maturities
              </CardTitle>
              <Package className="h-4 w-4 text-teal-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-teal-900">3</div>
              <p className="text-xs text-teal-600">Within next 30 days</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Orders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white border-teal-200 shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-bold text-teal-900">Contribution Orders</CardTitle>
                  <CardDescription className="text-teal-700">
                    Manage and track all your agricultural contributions
                  </CardDescription>
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  New Contribution
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex space-x-4 mt-4 border-b border-teal-200">
                {[
                  { id: "all", label: "All Orders" },
                  { id: "completed", label: "Completed" },
                  { id: "processing", label: "Processing" },
                  { id: "pending", label: "Pending" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`pb-2 px-1 text-sm font-medium ${activeTab === tab.id
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-teal-500 hover:text-teal-700"
                      }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                {filteredOrders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="border border-teal-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-teal-900">{order.id}</span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                            {getStatusIcon(order.status)}
                            <span className="ml-1">{getStatusText(order.status)}</span>
                          </span>
                        </div>
                        <p className="text-sm text-teal-700">{order.type}</p>
                        <p className="text-xs text-teal-500 mt-1">{order.date} • {order.duration}</p>
                      </div>

                      <div className="text-right">
                        <p className="font-medium text-teal-900">₦{order.amount.toLocaleString()}</p>
                        <p className="text-sm text-teal-700">Shared Surplus: ₦{order.returns.toLocaleString()}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-teal-300 text-teal-700 hover:bg-teal-50"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredOrders.length === 0 && (
                <div className="text-center py-8">
                  <Package className="mx-auto h-12 w-12 text-teal-400" />
                  <h3 className="mt-2 text-sm font-medium text-teal-900">No orders found</h3>
                  <p className="mt-1 text-sm text-teal-500">
                    {activeTab === "all"
                      ? "Get started by creating a new contribution."
                      : `No ${activeTab} orders at this time.`}
                  </p>
                  <div className="mt-6">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      Create New Contribution
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Orders;