'use client'

import { useState } from 'react'

import Tabs from '../ui/Tabs'

interface Props {
  label: string
  options: { value: string; label: string }[]
  views: Record<string, React.ReactNode>
}

export default function ListWithTabs({ label, options, views }: Props) {
  const [activeTab, setActiveTab] = useState(options[0].value)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold">{label}</h2>

        <Tabs
          items={options}
          activeItem={activeTab}
          onSelect={(value) => setActiveTab(value)}
        />
      </div>

      <div>{views[activeTab]}</div>
    </div>
  )
}
