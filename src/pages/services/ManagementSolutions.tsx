import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import ServiceCard from '../../components/services/ServiceCard';
import Button from '../../components/ui/Button';
import { motion } from 'framer-motion';
import managementSolutionsImage from '../../assets/images/Digital Branding/management-solutions.avif';

// To manually add images, use this pattern:
// import imageName from '../../assets/images/your-folder/image-name.extension';
// Supported formats: .jpg, .jpeg, .png, .webp, .gif
// Example: import myImage from '../../assets/images/services/my-image.jpg';

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

const managementServices: ServiceDetail[] = [
  {
    title: 'Business Strategy',
    description: 'Develop and implement effective business strategies to drive growth and achieve your organizational goals.',
    benefits: [
      'Strategic planning',
      'Business transformation',
      'Growth strategy',
      'Market positioning',
      'Performance optimization'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop'
  },
  {
    title: 'Project Management',
    description: 'Professional project management services to ensure successful delivery of your business initiatives.',
    benefits: [
      'Project planning',
      'Resource management',
      'Risk management',
      'Quality control',
      'Stakeholder management'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop'
  }
];

const ManagementSolutions: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className={`relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#0E2A61]'} pt-32 md:pt-40 pb-16 overflow-hidden`}>
        {/* Animated gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 bg-gradient-to-br ${
            theme === 'dark' 
              ? 'from-primary-500/20 via-transparent to-secondary-500/20' 
              : 'from-[#8BD7BB]/30 via-transparent to-primary-500/20'
          } pointer-events-none z-0`}
        />
        {/* Decorative blurred circles with shadow */}
        <div className={`absolute -top-10 -left-10 w-48 h-48 ${
          theme === 'dark' ? 'bg-primary-500' : 'bg-[#8BD7BB]'
        } opacity-30 rounded-full blur-3xl shadow-2xl`}></div>
        <div className={`absolute -bottom-10 -right-10 w-64 h-64 ${
          theme === 'dark' ? 'bg-secondary-500' : 'bg-primary-500'
        } opacity-20 rounded-full blur-3xl shadow-2xl`}></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Glassy Card with Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.025, boxShadow: theme === 'dark' ? '0 8px 32px 0 rgba(34, 197, 94, 0.15)' : '0 8px 32px 0 rgba(0, 0, 0, 0.1)' }}
              className={`${
                theme === 'dark' 
                  ? 'bg-gray-800/90 backdrop-blur-md text-gray-100' 
                  : 'bg-white/95 backdrop-blur-md text-gray-900'
              } rounded-3xl shadow-2xl p-10 md:p-14 transition-transform duration-300`}
            >
              {/* Floating badge/icon */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-block mb-4"
              >
                <span className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${
                  theme === 'dark' 
                    ? 'bg-[#8BD7BB]/90 shadow-lg ring-4 ring-gray-800' 
                    : 'bg-primary-600/90 shadow-lg ring-4 ring-white'
                }`}>
                  <svg className={`w-8 h-8 ${
                    theme === 'dark' ? 'text-[#8BD7BB]' : 'text-white'
                  }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Strategic Management Solutions for Business Excellence
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-xl mb-6 font-medium ${
                  theme === 'dark' ? 'text-[#8BD7BB]' : 'text-gray-700'
                }`}
              >
                Drive organizational excellence and sustainable growth with our strategic management solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`space-y-5 text-base md:text-lg mb-8 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                <p>
                  Our management solutions are designed to help businesses optimize their operations, improve efficiency, and achieve sustainable growth. We combine industry expertise with innovative approaches to deliver results that matter.
                </p>
                <p>
                  From strategic planning to process optimization, our comprehensive suite of management services addresses the unique challenges faced by modern businesses. We work closely with you to understand your goals and develop tailored solutions that drive success.
                </p>
                <p>
                  With TechMatrick's management solutions, you gain access to proven methodologies, cutting-edge tools, and expert guidance to transform your business operations and achieve operational excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button 
                  variant={theme === 'dark' ? 'primary' : 'primary'} 
                  size="lg" 
                  to="/contact"
                  className={theme === 'dark' ? 'bg-[#8BD7BB] hover:bg-[#8BD7BB]/90' : 'bg-[#0E2A61] hover:bg-[#0E2A61]/90'}
                >
                  Get Free Analysis
                </Button>
              </motion.div>
            </motion.div>
            {/* Right: Illustration with floating animation */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
              className="flex justify-center items-center w-full"
            >
              <img
                src={managementSolutionsImage}
                alt="Management Solutions Services"
                className={`w-full max-w-2xl rounded-2xl shadow-xl border ${
                  theme === 'dark' 
                    ? 'border-gray-700 bg-gray-800/90' 
                    : 'border-gray-200 bg-white/95'
                }`}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {managementServices.map((service, idx) => (
            <ServiceCard
              key={idx} 
              title={service.title}
              description={service.description}
              benefits={service.benefits}
              image={service.image}
            />
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-secondary-500 dark:to-secondary-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our graphic design services can help you create a memorable brand identity.
          </p>
          <button
            className="bg-white text-primary-600 dark:text-secondary-600 hover:bg-gray-100 font-semibold py-4 px-10 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementSolutions; 