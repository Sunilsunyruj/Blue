"use client"
import { XCircle } from "lucide-react"
import { Table } from "@tanstack/react-table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DataTableFacetedFilter } from "@/components/table/data-table-filter"
import { dateFilter, priorityOptions, statusOptions } from "@/lib/constants"

interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center justify-between space-x-2">
                {table.getColumn("name") && (
                    <Input
                        placeholder="Filter name..."
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)
                        }
                        className="max-w-xl"
                    />)}
                {table.getColumn("email") && (
                    <Input
                        placeholder="Filter emails..."
                        value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("email")?.setFilterValue(event.target.value)
                        }
                        className="max-w-xl"
                    />
                )}


                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn('status')}
                        title="Status"
                        options={statusOptions}
                        type={"checkbox"}
                    />
                )}

                {table.getColumn("createdAt") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("createdAt")}
                        title="Created At"
                        options={dateFilter}
                        type={"checkbox"}
                    />
                )}
                {table.getColumn("updatedAt") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("updatedAt")}
                        title="Updaed At"
                        options={dateFilter}
                        type={"checkbox"}
                    />
                )}
                {table.getColumn("leadScore") && (
                    <DataTableFacetedFilter
                        column={table.getColumn('leadScore')}
                        title="Lead Score"
                        type={"range"}
                    />
                )}
                {table.getColumn("priority") && (
                    <DataTableFacetedFilter
                        column={table.getColumn('priority')}
                        title="Priority"
                        options={priorityOptions}
                        type={"checkbox"}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <XCircle className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
        </div>
    )
}