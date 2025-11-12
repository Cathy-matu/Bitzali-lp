import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, TrendingDown, FileQuestion } from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    title: "Data Overload",
    description: "Businesses drown in data but lack actionable insights to drive decisions."
  },
  {
    icon: TrendingDown,
    title: "Reactive Strategy",
    description: "Companies respond to problems after they occur, missing opportunities to prevent them."
  },
  {
    icon: FileQuestion,
    title: "Fragmented Systems",
    description: "Critical information scattered across multiple platforms, making holistic analysis impossible."
  }
];

const Challenge = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              The Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Traditional Business Intelligence Falls Short
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's fast-paced market, businesses face unprecedented challenges that 
              conventional tools simply can't address.
            </p>
          </motion.div>

          {/* Challenge Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <challenge.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Call to action statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-xl font-medium text-foreground">
              It's time for a{" "}
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                smarter approach
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
