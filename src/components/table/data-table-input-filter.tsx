import React from 'react'

const DataTableInputFilter = () => {
  return (
    <div>
    <div className="flex space-x-2">
      {/* See faceted column filters example for min max values functionality */}
      <Input
        type="number"
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={value =>
          column.setFilterValue((old: [number, number]) => [value, old?.[1]])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <Input
        type="number"
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={value =>
          column.setFilterValue((old: [number, number]) => [old?.[0], value])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
    <div className="h-1" />
  </div>
  )
}

export default DataTableInputFilter