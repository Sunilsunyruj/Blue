import React, { useMemo, useState } from "react"
import { CheckIcon, PlusCircleIcon } from "lucide-react"
import { Column } from "@tanstack/react-table"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Badge } from "../ui/badge"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../ui/command"
import { cn } from "@/lib/utils"
import { Input } from "../ui/input"

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>
  title?: string
  options?: {
    label: string
    value: string
    icon?: React.ComponentType<{ className?: string }>
  }[]
  type: string
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
  type
}: DataTableFacetedFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues()
  const [selectedValues, setSelectedValues] = useState<Set<string>>(new Set(column?.getFilterValue() as string[]))
  const [searchValue, setSearchValue] = useState<string>("")
  const columnFilterValue = column?.getFilterValue()

  console.log('column', column)
  console.log('columnFilterValue', columnFilterValue)
  console.log('columnFilterValue as [number, number]', columnFilterValue as [number, number])

  const handleSelect = (value: string) => {
    const newSelectedValues = new Set(selectedValues)
    if (newSelectedValues.has(value)) {
      newSelectedValues.delete(value)
    } else {
      newSelectedValues.add(value)
    }
    setSelectedValues(newSelectedValues)
    const filterValues = Array.from(newSelectedValues)
    console.log("Filter values", filterValues)
    column?.setFilterValue(filterValues.length ? filterValues : undefined)
  }

  if(type === 'range'){
    return ( 
      <div>
        <div className="flex space-x-2">
          <Input
            type="number"
            min={Number(column!.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column!.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={e => {
              const value = Number(e.target.value)
              column!.setFilterValue((old: [number, number]) => [value, old?.[1]])
            }}
            placeholder={`Min ${
              column!.getFacetedMinMaxValues()?.[0] !== undefined
                ? `(${column!.getFacetedMinMaxValues()?.[0]})`
                : ''
            }`}
          />
          <Input
            type="number"
            min={Number(column!.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column!.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(column!.getFilterValue() as [number, number])?.[1] ?? ''}
            onChange={e => {
              const value = Number(e.target.value)
              column!.setFilterValue((old: [number, number]) => [old?.[0], value])
            }}
            placeholder={`Max ${
              column!.getFacetedMinMaxValues()?.[1]
                ? `(${column!.getFacetedMinMaxValues()?.[1]})`
                : ''
            }`}
            className="w-24 border shadow rounded"
          />
        </div>
        <div className="h-1" />
      </div>
    )
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircleIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options!
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge
                        variant="secondary"
                        key={option.value}
                        className="rounded-sm px-1 font-normal"
                      >
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput
            placeholder={title}
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options!
                .filter((option) => 
                  option.label.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((option) => {
                  const isSelected = selectedValues.has(option.value)
                  return (
                    <CommandItem
                      key={option.value}
                      onSelect={() => handleSelect(option.value)}
                    >
                      <div
                        className={cn(
                          "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary text-primary-foreground"
                            : "opacity-50 [&_svg]:invisible"
                        )}
                      >
                        <CheckIcon className={cn("h-4 w-4")} />
                      </div>
                      {option.icon && (
                        <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                      )}
                      <span>{option.label}</span>
                      {facets?.get(option.value) && (
                        <span className="ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs">
                          {facets.get(option.value)}
                        </span>
                      )}
                    </CommandItem>
                  )
                })}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={() => {
                      setSelectedValues(new Set())
                      column?.setFilterValue(undefined)
                    }}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
