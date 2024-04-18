import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-700 text-white flex flex-col items-center justify-center p-8"
    >
      <motion.div 
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-bold mb-4">About Codele</h1>
        <p className="text-xl font-light">The story behind the daily coding challenge</p>
      </motion.div>

      <div className="w-full max-w-4xl space-y-6">
        {/* Inspiration Card */}
        <InfoCard 
          title="Inspiration"
          content="Codele was conceived as a simple classroom exercise in coding basics. It quickly evolved into a full-fledged platform dedicated to making learning to code accessible, fun, and habit-forming."
        />

        {/* Technology Card */}
        <InfoCard 
          title="Technology Stack"
          content="Built with the latest in web technology, Codele uses React, TailwindCSS, and Firebase to deliver a smooth and scalable user experience."
        />

        {/* Learning Outcomes Card */}
        <InfoCard 
          title="Learning Outcomes"
          content="Each Codele puzzle is designed to introduce and reinforce software development concepts, promoting active recall and spaced repetition—key techniques in effective learning."
        />

        {/* Creator's Note Card */}
        <InfoCard 
          title="Creator's Note"
          content="As a developer and lifelong learner, I created Codele to blend my passion for teaching with my love for coding. It's been a rewarding journey to see others learn and grow with Codele."
        />
      </div>
    </motion.div>
  );
}

const InfoCard = ({ title, content }) => {
  return (
    <motion.div
      className="bg-slate-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      <h2 className="text-3xl font-semibold mb-3">{title}</h2>
      <p className="text-lg leading-relaxed">{content}</p>
    </motion.div>
  );
};

export default About;
