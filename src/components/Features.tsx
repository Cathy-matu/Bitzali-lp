import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Package, 
  TrendingUp, 
  Users, 
  Smartphone, 
  Zap, 
  BarChart3,
  Shield,
  CreditCard
} from "lucide-react";

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: Package,
    title: "Stock Tracking",
    description: "Monitor stock levels in real-time to ensure you never run out of essential products."
  },
  {
    icon: Users,
    title: "Customer Behavior Tracking",
    description: "Analyze purchasing patterns to identify popular products and tailor offerings to customer preferences."
  },
  {
    icon: BarChart3,
    title: "Instant Reports",
    description: "Generate real-time sales performance data to aid in informed decision-making for your business."
  },
  {
    icon: TrendingUp,
    title: "Easy Data Management",
    description: "Consolidate customer details, transaction notes, and purchase histories all in one place."
  },
  {
    icon: Smartphone,
    title: "User-Friendly App",
    description: "Simple, straightforward digital tool designed specifically for small business owners in Kenya."
  },
  {
    icon: Shield,
    title: "Data Protection Compliant",
    description: "Built to navigate evolving government regulations including the Data Protection Act."
  },
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description: "Leverage data science to predict demand and provide accurate business insights."
  },
  {
    icon: CreditCard,
    title: "Credit Facilitation",
    description: "Future integration with financial institutions to help small businesses access growth financing."
  }
];

const Features = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 bg-background">
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
              Our Solution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              How Inveca{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Transforms Your Business
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A straightforward, easy-to-use digital platform that simplifies inventory management 
              and helps Kenyan businesses attract and retain customers.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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

          {/* Early Success Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 border border-primary/20 text-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Already Making an Impact
            </h3>
            <p className="text-muted-foreground mb-4">
              Successfully onboarded agro-vet businesses during testing phase, with plans to reach 
              over 1,000 businesses across Nairobi's CBD.
            </p>
            <div className="flex justify-center items-center gap-6 text-sm text-primary font-medium">
              <span>✓ Streamlined Operations</span>
              <span>✓ Actionable Insights</span>
              <span>✓ Customer Retention</span>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Join the growing number of Kenyan small businesses transforming their operations.
            </p>
            <a 
              href="https://inveca.co" 
              className="text-primary hover:text-blue-600 transition-colors font-semibold inline-flex items-center gap-2"
            >
              Visit Inveca.co to Get Started
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;