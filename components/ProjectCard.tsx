import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  color: string;
  url: string;
}

export default function ProjectCard({ name, description, color, url }: ProjectCardProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      onClick={handleClick}
      className={`group border-2 border-black p-6 ${color} rounded-2xl hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer relative`}
    >
      {/* External link icon - Only visible on hover */}
      <div className="absolute top-4 right-4  duration-200">
        <ExternalLink className="w-5 h-5 text-gray-900" />
      </div>

      {/* Content */}
      <div className="pr-8">
        <h3 className="text-lg font-bold mb-2 text-gray-900">
          {name}
        </h3>
        
        <p className="text-sm text-gray-800 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* View Project indicator - Only visible on hover */}
      <div className="mt-6 pt-4 border-t-2 border-black  duration-200">
        <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">
          View Project →
        </span>
      </div>
    </div>
  );
}