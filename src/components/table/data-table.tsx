"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ColumnDef, ColumnFiltersState, SortingState, VisibilityState, flexRender, getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { DataTablePagination } from "@/components/table/data-table-pagination";
import DataToExcel from "../global/exportToExcel";
import MultiDeleteButton from "@/components/global/multi-delete-btn"
import { DataTableToolbar } from "./table-toolbar";
import ImportFromExcel from "../forms/subscription-form/import-from-excel";
import CustomModal from "../global/custom-modal";
import { useModal } from "@/providers/modal-provider";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    subaccountId: string
    childElement?: React.ReactNode
    dataType: string
}
export interface WithId {
    id: string;
}

export function DataTable<TData extends WithId, TValue>({
    columns,
    data,
    subaccountId,
    childElement,
    dataType,
}: DataTableProps<TData, TValue>) {
    const { setOpen } = useModal()

    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = useState({})



    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        enableColumnFilters: true,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    const handleImport = () => {
        setOpen(
            <CustomModal title='Upload File' subheading='column name must same as in table'>
                <div>
                <ImportFromExcel subAccountId={subaccountId} dataType={dataType} />
                </div>
            </CustomModal>
        )
    }
    return (
        <div>
            <div className="w-full flex justify-end gap-2">
                {table.getSelectedRowModel().flatRows.length > 1 ?
                    <>
                        <MultiDeleteButton subaccountId={subaccountId} type={dataType} Ids={table.getSelectedRowModel().flatRows.map((row) => row.original.id)} table={table} />
                        <DataToExcel type={dataType} data={table.getSelectedRowModel().flatRows.map(row => row.original)} />
                    </>

                    :
                    <>
                        {childElement}
                        <DataToExcel type={dataType} data={data} />
                        <Button onClick={handleImport} className="text-white bg-purple-600">Import from Excel</Button>
                    </>}


            </div>

            <div className="flex items-center justify-evenly py-4">
                <DataTableToolbar table={table} dataType={dataType} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Toggle Columns
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter(
                                (column) => column.getCanHide()
                            )
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) =>
                                            column.toggleVisibility(!!value)
                                        }
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                )
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {
                                                header.isPlaceholder ? null : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )
                                            }
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <DataTablePagination table={table} />
        </div>
    );
}
