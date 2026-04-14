import { cva } from 'class-variance-authority'

interface Props {
  items: {
    value: string
    label: string
  }[]
  activeItem: string
  onSelect: (value: string) => void
}

export default function Tabs({ items, activeItem, onSelect }: Props) {
  return (
    <div className="flex items-center rounded-xl border border-stone-200 bg-stone-100 p-1">
      {items.map((item) => (
        <button
          key={item.value}
          onClick={() => onSelect(item.value)}
          className={tabStyles({
            status: activeItem === item.value ? 'active' : 'inactive'
          })}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

const tabStyles = cva(
  'rounded-lg px-4 py-1 text-sm font-medium transition-all duration-200',
  {
    variants: {
      status: {
        active: 'bg-white text-stone-900 shadow-sm',
        inactive: 'text-stone-500 hover:text-stone-700'
      }
    }
  }
)
