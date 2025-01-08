import React from 'react';

interface SkillBadgeProps {
  text: string;
}

export function SkillBadge({ text }: SkillBadgeProps) {
  return (
    <div className="bg-gray-700 px-4 py-2 rounded-lg text-cyan-400 text-center font-medium">
      {text}
    </div>
  );
}