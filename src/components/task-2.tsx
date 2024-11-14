import * as React from "react"
import { ChevronRight } from 'lucide-react'

interface TreeItem {
  id: string
  label: string
  open: boolean
  children?: TreeItem[]
}

const initialTreeData: TreeItem[] = [
  {
    id: "1",
    label: "Person One",
    open: true,
    children: [
      {
        id: "1-1",
        label: "Person 1",
        open: false,
        children: [
          { id: "1-1-1", label: "Person 1", open: false },
          { id: "1-1-2", label: "Person 1", open: false },
          { id: "1-1-3", label: "Person 1", open: false },
        ],
      },
      { id: "1-2", label: "Person 1", open: false },
      { id: "1-3", label: "Person 1", open: false },
    ],
  },
  {
    id: "2",
    label: "Person Two",
    open: false,
  },
]

interface TreeNodeProps {
  item: TreeItem
  level: number
  isLast: boolean
  onToggle: (id: string) => void
}

const TreeNode: React.FC<TreeNodeProps> = ({ item, level, isLast, onToggle }) => {
  const hasChildren = item.children && item.children.length > 0

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggle(item.id)
  }

  return (
    <div className={`relative ${level > 0 ? 'ml-4' : ''}`}>
      {level > 0 && (
        <div
          className={`absolute left-0 top-0 h-6 w-4 border-l-2 border-b-2 border-dotted border-gray-300 ${
            isLast ? 'h-6' : 'h-full'
          }`}
        />
      )}
      <div className="flex items-center py-1">
        
        <div className="flex items-center cursor-pointer" onClick={handleToggle}>
        
         
          <div className="h-3 w-3 border border-gray-400 bg-white mr-1" />
          <span className="ml-2 text-sm text-gray-700">{item.label}</span>
        </div>
      </div>
      {item.open && hasChildren && (
        <div className="ml-5">
          {item?.children.map((child, index) => (
            <TreeNode
              key={child.id}
              item={child}
              level={level + 1}
              isLast={index === item.children.length - 1}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function HierarchicalTreeView() {
  const [treeData, setTreeData] = React.useState(initialTreeData)

  const toggleNode = (id: string) => {
    setTreeData(prevData => {
      const toggleItem = (items: TreeItem[]): TreeItem[] => {
        return items.map(item => {
          if (item.id === id) {
            return { ...item, open: !item.open }
          }
          if (item.children) {
            return { ...item, children: toggleItem(item.children) }
          }
          return item
        })
      }
      return toggleItem(prevData)
    })
  }

  return (
    <div className="w-full rounded-md border border-gray-300 bg-gray-100 p-4 shadow-sm">
      {treeData.map((item, index) => (
        <TreeNode
          key={item.id}
          item={item}
          level={0}
          isLast={index === treeData.length - 1}
          onToggle={toggleNode}
        />
      ))}
    </div>
  )
}