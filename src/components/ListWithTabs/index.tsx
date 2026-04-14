'use client'

import { useState } from 'react'

interface Props {
  options: { value: string; label: string }[]
  views: Record<string, React.ReactNode>
}

export default function ListWithTabs({ options, views }: Props) {
  const [activeTab, setActiveTab] = useState(options[0].value)

  return (
    <div>
      <div className="space-x-4">
        {options.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveTab(item.value)}
            className={`rounded-lg border p-2 ${activeTab === item.value ? 'bg-amber-300' : ''} `}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-8">{views[activeTab]}</div>
    </div>
  )
}
