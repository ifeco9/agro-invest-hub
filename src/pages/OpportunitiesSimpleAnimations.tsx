import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users, Zap, Award, Shield, Leaf, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Opportunities = () => {
  const REGISTRATION_FORM_URL = "https://forms.gle/B44hiwmokEsWfKqx6";

  return (
    <div className="min-h-screen pt-16 sm:pt-20">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-teal-800 text-white animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Drecan Membership Plans
          </h1>
          <p className="text-base sm:text-xl max-w-md sm:max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Strategic membership opportunities with flexible durations, transparent expected surplus structures, and credible shared surplus backed by real agricultural ventures
          </p>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-center">
            Comprehensive agricultural and cooperative services designed to support your success
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-teal-100 rounded-lg flex-shrink-0">
                  <Users className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">AgroLink Community Supply Program</h3>
                  <p className="text-sm text-muted-foreground">Connecting farmers with markets and ensuring reliable supply chains</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">AgroFarm Cooperative Program</h3>
                  <p className="text-sm text-muted-foreground">Collaborative farming initiatives for shared growth and prosperity</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">AgroTrade Operations</h3>
                  <p className="text-sm text-muted-foreground">Strategic trading and market access for agricultural commodities</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">AgroReserve Storage Program</h3>
                  <p className="text-sm text-muted-foreground">Secure storage solutions to maximize value and reduce post-harvest losses</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Supply Chain Management</h3>
                  <p className="text-sm text-muted-foreground">End-to-end logistics and distribution optimization</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-rose-100 rounded-lg flex-shrink-0">
                  <Award className="h-5 w-5 text-rose-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Farmer Support Management</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive support services including training, resources, and technical assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Partnership Plans */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Membership Plans
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
            Choose from multiple membership durations designed to provide high and credible shared surplus while keeping capital deployment transparent and diversified
          </p>

          <div className="space-y-12 sm:space-y-16">
            {/* 3-Month Plan */}
            <div id="three-month" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">3-Month Membership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Short-term engagement for quick shared surplus</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Membership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦500,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Maximum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦1,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Profit Share:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">30%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">3 months</span>
                      </li>

                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        Shared surplus is paid either <strong>monthly</strong> throughout the 3-month period, or as a <strong>lump sum at maturity</strong> (end of 3 months). The principal is returned in full at the end of the plan period.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    asChild
                  >
                    <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Apply Now - Register
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* 6-Month Plan */}
            <div id="six-month" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">6-Month Membership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Balanced duration with strong shared surplus</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Membership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦500,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Maximum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦5,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Profit Share:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">65%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">6 months</span>
                      </li>

                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        Shared surplus is paid either <strong>monthly</strong> throughout the 6-month period, or as a <strong>lump sum at maturity</strong> (end of 6 months). The principal is returned in full at the end of the plan period.
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Capital is deployed in high-value crops and small-scale livestock operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    asChild
                  >
                    <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Apply Now - Register
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* 1-Year Plan */}
            <div id="one-year" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">1-Year Membership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">High-yield annual membership</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Membership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦1,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Maximum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦10,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Profit Share:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">126%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">12 months</span>
                      </li>

                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms & Deployment
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        Shared surplus is paid either <strong>monthly</strong> throughout the 1-year period, or as a <strong>lump sum at maturity</strong> (end of 12 months). The principal is returned in full at the end of the plan period.
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Capital is used for palm oil, grains, cocoa, cashew, poultry, and small livestock operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    asChild
                  >
                    <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Apply Now - Register
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* 2-Year Plan */}
            <div id="two-year" className="bg-card rounded-lg shadow-lg border border-border overflow-hidden hover-lift transition-all duration-300">
              <div className="bg-teal-800 text-white p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                  <h2 className="text-2xl sm:text-3xl font-bold">2 Years & Above Membership Plan</h2>
                </div>
                <p className="text-teal-100 text-sm sm:text-base">Long-term growth with premium profit share</p>
              </div>
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Membership Details
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Minimum Amount:</span>
                        <span className="font-semibold text-sm sm:text-base">₦1,000,000</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Profit Share:</span>
                        <span className="font-semibold text-sm sm:text-base text-primary">220%</span>
                      </li>
                      <li className="flex justify-between border-b pb-2">
                        <span className="text-sm sm:text-base">Duration:</span>
                        <span className="font-semibold text-sm sm:text-base">24 months</span>
                      </li>

                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      Payment Terms & Deployment
                    </h3>
                    <div className="bg-secondary rounded-lg p-3 sm:p-4 mb-4">
                      <p className="text-muted-foreground text-sm sm:text-base mb-3">
                        Shared surplus is paid either <strong>monthly</strong> throughout the plan period, or as a <strong>lump sum at maturity</strong> (end of 2+ years). The principal is returned in full at the end of the plan period.
                      </p>
                      <p className="text-muted-foreground text-sm sm:text-base">
                        Capital is used in high-value crop plantations, large-scale livestock, aquaculture, and agro-processing. Members are encouraged to take advantage of the longer term to maximize shared surplus.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 text-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-hover text-primary-foreground shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
                    asChild
                  >
                    <a href={REGISTRATION_FORM_URL} target="_blank" rel="noopener noreferrer">
                      Apply Now - Register
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agricultural Portfolio */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Drecan Agricultural Membership Portfolio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto text-center">
            Drecan actively uses membership funds in high-value agricultural and agro-industrial projects to ensure sustainable and profitable growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* High-Value Crops */}
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">High-Value Crop Production</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Palm Oil & Products:</strong> Large-scale plantations with mechanized processing. Projected Returns: 80%-120% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Grains (Maize, Rice, Wheat, Sorghum):</strong> Mechanized and export-focused farms. Projected Returns: 110%-200% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Cash Crops (Cocoa, Cashew, Soybeans, Vegetables):</strong> High-demand export crops. Projected Returns: 110%-200% annually.
                  </div>
                </li>
              </ul>
            </div>

            {/* Livestock & Animal Farming */}
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Livestock & Animal Farming</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Cattle, Goats, Sheep:</strong> Rearing for meat, breeding, and hides. Projected Returns: 40%-70% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Poultry:</strong> Broilers and layers for meat and eggs. Projected Returns: 35%-60% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Aquaculture:</strong> Tilapia and catfish farms for local and export markets. Projected Returns: 40%-70% annually.
                  </div>
                </li>
              </ul>
            </div>

            {/* Agro-Industrial Operations */}
            <div className="bg-card p-6 rounded-lg shadow-md border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Agro-Industrial & Export</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Cowhide Exportation & Leather Processing:</strong> High-quality cowhide exported internationally. Projected Returns: 80%-125% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Agro-Processing:</strong> Palm oil, grains, and livestock products processed to add value. Projected Returns: 100%-150% annually.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-2">•</span>
                  <div>
                    <strong>Integrated Farming Systems:</strong> Combines crops, livestock, and aquaculture for diversified revenue streams and reduced risk.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Impact & Security */}
      <section className="py-12 sm:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
            Membership Impact & Security
          </h2>
          <p className="text-base sm:text-lg mb-12 max-w-3xl mx-auto text-center">
            Partnering with Drecan ensures that membership funds are actively deployed in real, tangible, and revenue-generating projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Shield className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Actively Deployed</h3>
              <p className="text-teal-100">Funds are invested in real, tangible, and revenue-generating agricultural projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <TrendingUp className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Diversified</h3>
              <p className="text-teal-100">Capital spread across crops, livestock, aquaculture, and agro-processing to reduce risk</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Clock className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Transparent</h3>
              <p className="text-teal-100">Regular performance updates for all members throughout the membership period</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <Leaf className="h-12 w-12 text-teal-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
              <p className="text-teal-100">Contributing to agricultural development and economic progress in Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-teal-50 to-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
            Ready to Become a Member?
          </h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 max-w-md sm:max-w-2xl mx-auto text-muted-foreground">
            Join our community of members and start earning credible shared surplus from Nigerian agriculture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-700 hover:bg-teal-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-teal-700 text-teal-700 hover:bg-teal-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-lg"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Opportunities;