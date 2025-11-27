import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Package, TrendingUp, Users, Smartphone } from "lucide-react";

const IntroducingInveca = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Package,
      text: "Streamline inventory management effortlessly"
    },
    {
      icon: TrendingUp,
      text: "Track sales and customer behavior in real-time"
    },
    {
      icon: Users,
      text: "Make informed decisions with actionable insights"
    },
    {
      icon: Smartphone,
      text: "User-friendly app designed for Kenyan small businesses"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-50 via-background to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Meet Inveca
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Empowering Small Businesses in{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Kenya's Digital Economy
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded by Peter Sande and Ian Muthomi, Inveca transforms how micro, small, and medium 
                enterprises manage operations. Say goodbye to manual notebooks and hello to digital efficiency.
              </p>

              {/* Feature list */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <p className="text-foreground font-medium mb-2">Built by Innovators, For Kenyan Businesses</p>
                <p className="text-muted-foreground text-sm">
                  Peter Sande (Data Scientist) and Ian Muthomi (CTO of Visiondrill) combined their expertise 
                  to create a solution that addresses real challenges faced by local businesses.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-3xl p-8 border border-border backdrop-blur-sm">
                {/* Inveca app mockup placeholder */}
                <div className="bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                  <div className="bg-gradient-to-r from-primary to-blue-600 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-white/80 rounded-full" />
                        <div className="w-3 h-3 bg-white/60 rounded-full" />
                        <div className="w-3 h-3 bg-white/40 rounded-full" />
                      </div>
                      <span className="text-white text-sm font-medium">Inveca App</span>
                      <div className="w-6"></div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {/* Simulated inventory dashboard elements */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3 space-y-2">
                        <div className="h-2 bg-primary/30 rounded w-3/4" />
                        <div className="h-4 bg-primary/40 rounded w-full" />
                        <div className="text-xs text-primary font-medium">Stock Level</div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 space-y-2">
                        <div className="h-2 bg-green-500/30 rounded w-1/2" />
                        <div className="h-4 bg-green-500/40 rounded w-full" />
                        <div className="text-xs text-green-600 font-medium">Sales Today</div>
                      </div>
                    </div>
                    
                    <div className="h-24 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-foreground">Top Products</span>
                        <span className="text-xs text-muted-foreground">View All</span>
                      </div>
                      <div className="space-y-1">
                        {['Maize Seeds', 'Fertilizer', 'Animal Feed'].map((product, i) => (
                          <div key={i} className="flex justify-between text-xs">
                            <span className="text-muted-foreground">{product}</span>
                            <span className="font-medium">24 sold</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-secondary rounded-lg p-2 text-center">
                        <div className="h-6 bg-primary/20 rounded w-full mb-1" />
                        <div className="text-xs text-muted-foreground">Customers</div>
                      </div>
                      <div className="bg-secondary rounded-lg p-2 text-center">
                        <div className="h-6 bg-green-500/20 rounded w-full mb-1" />
                        <div className="text-xs text-muted-foreground">Transactions</div>
                      </div>
                      <div className="bg-secondary rounded-lg p-2 text-center">
                        <div className="h-6 bg-blue-500/20 rounded w-full mb-1" />
                        <div className="text-xs text-muted-foreground">Reports</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating success metrics */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg"
                >
                  <p className="text-xs text-muted-foreground mb-1">Businesses Onboarded</p>
                  <p className="text-xl font-bold text-primary">3+</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg"
                >
                  <p className="text-xs text-muted-foreground mb-1">Target Reach</p>
                  <p className="text-xl font-bold text-green-600">1,000+</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingInveca;