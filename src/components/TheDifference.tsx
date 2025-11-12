import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, X } from "lucide-react";

const comparisons = [
  {
    feature: "Real-time data processing",
    biztali: true,
    traditional: false
  },
  {
    feature: "AI-powered predictions",
    biztali: true,
    traditional: false
  },
  {
    feature: "Local market expertise",
    biztali: true,
    traditional: false
  },
  {
    feature: "Mobile-first design",
    biztali: true,
    traditional: true
  },
  {
    feature: "Automated insights",
    biztali: true,
    traditional: false
  },
  {
    feature: "Cost-effective pricing",
    biztali: true,
    traditional: false
  }
];

const TheDifference = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="difference" ref={ref} className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              The Biztali Difference
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                Biztali
              </span>
              ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how we stack up against traditional business intelligence solutions.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gradient-start to-gradient-end">
              <div></div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">Biztali</p>
              </div>
              <div className="text-center">
                <p className="text-white/80 font-semibold">Traditional BI</p>
              </div>
            </div>

            {/* Comparison Rows */}
            <div className="divide-y divide-border">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-6 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex items-center">
                    <p className="text-foreground font-medium">{comparison.feature}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    {comparison.biztali ? (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    ) : (
                      <X className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex items-center justify-center">
                    {comparison.traditional ? (
                      <CheckCircle2 className="h-6 w-6 text-muted-foreground" />
                    ) : (
                      <X className="h-6 w-6 text-muted-foreground" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 text-center border border-primary/20"
          >
            <p className="text-xl font-semibold text-foreground mb-4">
              Built for the future, available today
            </p>
            <p className="text-muted-foreground">
              Biztali combines cutting-edge technology with local market understanding to 
              deliver unmatched value for Kenyan businesses.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheDifference;
