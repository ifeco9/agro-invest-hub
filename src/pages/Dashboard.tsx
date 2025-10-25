import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Calendar, DollarSign, Activity } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const mockReservations = [
    {
      id: 1,
      project: "Kaduna Rice Yield Fund",
      amount: "₦2,000,000",
      status: "Active",
      roi: "10-12%",
      startDate: "Jan 2025",
    },
    {
      id: 2,
      project: "South-South Palm Oil Investment",
      amount: "₦8,000,000",
      status: "Pending",
      roi: "12-14%",
      startDate: "Feb 2025",
    },
    {
      id: 3,
      project: "Enugu Egusi (Melon) Seed Farm",
      amount: "₦1,800,000",
      status: "Active",
      roi: "11-13%",
      startDate: "Dec 2024",
    },
  ];

  const portfolioStats = {
    totalInvested: "₦11,800,000",
    activeInvestments: 3,
    expectedReturns: "₦1,320,000",
    avgROI: "11.2%",
  };

  return (
    <motion.div
      className="min-h-screen pt-20 bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Investment Dashboard</h1>
          <p className="text-muted-foreground">
            Track your agricultural investment portfolio
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Invested
                </CardTitle>
                <DollarSign className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {portfolioStats.totalInvested}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Across {portfolioStats.activeInvestments} opportunities
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Expected Returns
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {portfolioStats.expectedReturns}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Projected annual yield
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Investments
                </CardTitle>
                <Activity className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {portfolioStats.activeInvestments}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Currently generating returns
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Average ROI
                </CardTitle>
                <Calendar className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{portfolioStats.avgROI}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Portfolio performance
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="reservations" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="reservations">My Reservations</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          </TabsList>

          <TabsContent value="reservations" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Investment Reservations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockReservations.map((reservation, index) => (
                    <motion.div
                      key={reservation.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      <div className="space-y-1 mb-3 sm:mb-0">
                        <h3 className="font-semibold">{reservation.project}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span>Amount: {reservation.amount}</span>
                          <span>•</span>
                          <span>Expected ROI: {reservation.roi}</span>
                          <span>•</span>
                          <span>Start: {reservation.startDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            reservation.status === "Active"
                              ? "bg-primary/10 text-primary"
                              : "bg-yellow-500/10 text-yellow-600"
                          }`}
                        >
                          {reservation.status}
                        </span>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-4">Investment Distribution</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Rice (Kaduna)</span>
                          <span className="font-medium">17%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "17%" }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Palm Oil (Rivers)</span>
                          <span className="font-medium">68%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "68%" }}
                            transition={{ duration: 1, delay: 0.4 }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Egusi (Enugu)</span>
                          <span className="font-medium">15%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            className="bg-primary h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "15%" }}
                            transition={{ duration: 1, delay: 0.6 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h3 className="text-sm font-medium mb-4">Recent Activity</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Reservation confirmed - Egusi Farm
                        </span>
                        <span className="text-xs">2 days ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          ROI update - Rice Fund +1.2%
                        </span>
                        <span className="text-xs">5 days ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          New opportunity available - Soybeans
                        </span>
                        <span className="text-xs">1 week ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Dashboard;
