'use client'

import React, { useState } from 'react'
import { ChevronRight, Plus, Minus } from 'lucide-react'

interface TreeItem {
  id: string
  title: string
  details?: {
    one?: string
    two?: string
    three?: string
  }
  children?: TreeItem[]
}

interface TreeNodeProps {
  item: TreeItem
  level: number
  isLast: boolean
  onToggle: (id: string) => void
  expanded: { [key: string]: boolean }
}

const TreeNode: React.FC<TreeNodeProps> = ({ item, level, isLast, onToggle, expanded }) => {
  const hasChildren = item.children && item.children.length > 0
  const isExpanded = expanded[item.id] || false
  const details = item.details ? [item.details.one, item.details.two, item.details.three].filter(Boolean) : []

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
      <div
        className={`flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer ${
          hasChildren ? 'border-l-2 border-blue-600 bg-gray-50' : ''
        }`}
        onClick={handleToggle}
      >
        {hasChildren ? (
          <span className="mr-2">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded border-2 border-blue-600 ${
                isExpanded ? 'bg-blue-600' : ''
              }`}
            >
              {isExpanded ? (
                <Minus className="w-4 h-4 text-white" />
              ) : (
                <Plus className="w-4 h-4 text-blue-600" />
              )}
            </div>
          </span>
        ) : (
          <div className="w-8" />
        )}
        {/* <div className="h-3 w-3 border border-gray-400 bg-white mr-2" /> */}
        <span className="text-blue-600 font-medium">{item.title}</span>
      </div>

      {isExpanded && details.length > 0 && (
        <div className="grid grid-cols-3 gap-4 px-4 py-2 bg-gray-100 ml-8">
          {details.map((detail, index) => (
            <div key={index} className="text-gray-600 text-sm">
              {detail}
            </div>
          ))}
        </div>
      )}

      {isExpanded && hasChildren && (
        <div className="ml-5">
          {item.children!.map((child, index) => (
            <TreeNode
              key={child.id}
              item={child}
              level={level + 1}
              isLast={index === item.children!.length - 1}
              onToggle={onToggle}
              expanded={expanded}
            />
          ))}
        </div>
      )}
    </div>
  )
}

interface HierarchicalTreeViewProps {
  data: TreeItem[]
}

function HierarchicalTreeView({ data }: HierarchicalTreeViewProps) {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({})

  const toggleNode = (id: string) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="w-full max-w-2xl border border-gray-200 rounded-lg shadow-sm bg-white">
      {data.map((item, index) => (
        <TreeNode
          key={item.id}
          item={item}
          level={0}
          isLast={index === data.length - 1}
          onToggle={toggleNode}
          expanded={expanded}
        />
      ))}
    </div>
  )
}

// Example usage
const ExampleDropdown: React.FC = () => {
  const sampleData: TreeItem[] = [
    {
      id: '1',
      title: 'Person One',
      children: [
        {
          id: '1-1',
          title: 'Person 1',
          children: [
            {
              id: '1-1-1',
              title: 'Person 1',
              children: [
                {
                  id: '1-1-1-1',
                  title: 'Person 1',
                  details: {
                    one: 'Detail One',
                    two: 'Detail Two',
                    three: 'Detail Three',
                  },
                },
                { id: '1-1-1-2', title: 'Person 1' },
              ],
            },
            { id: '1-1-2', title: 'Person 1' },
            { id: '1-1-3', title: 'Person 1' },
          ],
        },
        { id: '1-2', title: 'Person 1' },
      ],
    },
    {
      id: '2',
      title: 'Person Two',
    },
  ]

  return <HierarchicalTreeView data={sampleData} />
}

export default ExampleDropdown