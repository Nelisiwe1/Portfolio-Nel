import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl, githubLink }) => {
  return (
    <motion.div
      className="max-w-xs rounded overflow-hidden shadow-lg m-4"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
