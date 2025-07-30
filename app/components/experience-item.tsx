interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  projects?: string[];
}

export function ExperienceItem({
  title,
  company,
  duration,
  location,
  description,
  projects,
}: ExperienceItemProps) {
  return (
    <div className="print-item">
      <div className="flex justify-between items-start mb-2 print:mb-1">
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="text-black font-medium text-sm">
            {company} • {location}
          </p>
        </div>
        <p className="text-gray-500 text-sm italic">
          {duration}
        </p>
      </div>

      {/* Main responsibilities */}
      <ul className="text-xs ml-5 space-y-1 text-gray-700 mb-3">
        {description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* Projects section */}
      {projects && (
        <div className="mt-3">
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">
            Key Projects:
          </h4>
          <ul className="list-disc ml-5 space-y-1 text-black projects-list text-xs">
            {projects.map((project, idx) => (
              <li key={idx}>{project}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

