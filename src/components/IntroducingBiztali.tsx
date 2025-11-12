import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Zap, Shield } from "lucide-react";

const IntroducingBiztali = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      text: "AI-powered predictive analytics"
    },
    {
      icon: Zap,
      text: "Real-time business intelligence"
    },
    {
      icon: Shield,
      text: "Enterprise-grade security"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gradient-bg-start via-background to-gradient-bg-end relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                Introducing Biztali
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Your All-in-One{" "}
                <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                  Business Intelligence Platform
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Biztali transforms raw data into strategic advantages. Built specifically for 
                the Kenyan market, we understand your unique challenges and opportunities.
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
                <p className="text-foreground font-medium mb-2">Built for Kenya, Designed for Growth</p>
                <p className="text-muted-foreground text-sm">
                  We leverage local market knowledge combined with world-class technology to 
                  deliver insights that matter to your business.
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
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-border backdrop-blur-sm">
                {/* Dashboard mockup placeholder */}
                <div className="bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                  <div className="bg-gradient-to-r from-gradient-start to-gradient-end p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-white/80 rounded-full" />
                      <div className="w-3 h-3 bg-white/60 rounded-full" />
                      <div className="w-3 h-3 bg-white/40 rounded-full" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    {/* Simulated dashboard elements */}
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-secondary rounded-lg p-4 space-y-2">
                          <div className="h-2 bg-primary/20 rounded w-2/3" />
                          <div className="h-6 bg-primary/30 rounded w-full" />
                        </div>
                      ))}
                    </div>
                    <div className="h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-secondary rounded-lg" />
                      <div className="h-20 bg-secondary rounded-lg" />
                    </div>
                  </div>
                </div>

                {/* Floating stat cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-lg"
                >
                  <p className="text-xs text-muted-foreground mb-1">Revenue Growth</p>
                  <p className="text-2xl font-bold text-accent">+34%</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-lg"
                >
                  <p className="text-xs text-muted-foreground mb-1">Cost Reduction</p>
                  <p className="text-2xl font-bold text-primary">-28%</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingBiztali;
