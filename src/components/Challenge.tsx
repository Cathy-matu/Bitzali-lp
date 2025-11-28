import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Book, TrendingUp, Users, Shield } from "lucide-react";

interface ChallengeItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const challenges: ChallengeItem[] = [
  {
    icon: Book,
    title: "Manual Tracking",
    description: "Small businesses struggle with inefficient notebook-based sales tracking that's prone to errors and lost opportunities."
  },
  {
    icon: TrendingUp,
    title: "Limited Insights",
    description: "No real-time performance data or customer behavior analysis to make informed business decisions."
  },
  {
    icon: Users,
    title: "Customer Retention",
    description: "Difficulty understanding purchasing patterns to attract and retain customers effectively."
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Navigating evolving government regulations like the Data Protection Act while managing business operations."
  }
];

const Challenge = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionHeaderAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
  };

  return (
    <section id="challenges" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={sectionHeaderAnimation}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              The Problem We Solve
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Challenges Facing Kenyan Small Businesses
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MSMEs in Kenya face significant operational hurdles that limit their growth 
              in today's digital economy. Inveca addresses these pain points directly.
            </p>
          </motion.div>

          {/* Challenge Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <challenge.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {challenge.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center bg-primary/5 rounded-2xl p-8 border border-primary/10"
          >
            <p className="text-lg font-medium text-foreground mb-2">
              Already empowering small businesses across Kenya
            </p>
            <div className="flex justify-center items-center gap-8 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Successfully onboarded agro-vet businesses
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Targeting 1,000+ businesses in Nairobi CBD
              </span>
            </div>
          </motion.div>

          {/* Call to action statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-xl font-medium text-foreground">
              Join the digital transformation with{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent font-bold">
                Biztali's smart inventory solution
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;