import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart3, 
  Brain, 
  Lock, 
  Smartphone, 
  Zap, 
  Users,
  TrendingUp,
  Database
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "Monitor your key metrics with live, customizable dashboards that update instantly."
  },
  {
    icon: Brain,
    title: "Predictive Analytics",
    description: "Leverage AI to forecast trends, identify opportunities, and mitigate risks before they materialize."
  },
  {
    icon: Database,
    title: "Unified Data Hub",
    description: "Consolidate data from all your sources into one centralized, accessible platform."
  },
  {
    icon: Zap,
    title: "Automated Insights",
    description: "Receive intelligent alerts and recommendations without manual analysis."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Access critical business intelligence on any device, anywhere, anytime."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with international data protection standards."
  },
  {
    icon: Users,
    title: "Collaborative Tools",
    description: "Share insights, create reports, and collaborate seamlessly across your organization."
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Set goals, track progress, and measure ROI with precision and clarity."
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to transform how you understand and grow your business.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              And that's just the beginning. Discover more features tailored to your industry.
            </p>
            <a 
              href="#contact" 
              className="text-primary hover:text-accent transition-colors font-semibold inline-flex items-center gap-2"
            >
              Explore Full Feature List
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
