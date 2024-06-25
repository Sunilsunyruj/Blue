"use client";

import { ColumnDef, filterFns } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox";
import { Lead } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import DeleteLeadButton from "./delete-lead-btn";
import UpdateLeadButton from "./update-lead-btn";

const dateFilter = (data:any,columnId:string, filterValue:string[]) => {
    const now = new Date();
    const date = new Date(data.original.createdAt);
    
    // Helper functions
    const startOfToday = () => new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfYesterday = () => new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const startOfLastWeek = () => new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    const startOfLastYear = () => new Date(now.getFullYear() - 1, 0, 1);
    const endOfLastYear = () => new Date(now.getFullYear(), 0, 1);
    const startOfLastQuarter = () => {
      const quarterStartMonth = Math.floor((now.getMonth() - 3) / 3) * 3;
      return new Date(now.getFullYear(), quarterStartMonth, 1);
    };
    
  
    const response = filterValue.some((item: string) => {
      switch (item) {
        case 'today':
          console.log("Entering Today", date >= startOfToday());
          return date >= startOfToday();
        case 'yesterday':
          return date >= startOfYesterday() && date < startOfToday();
        case 'thisWeek':
          return date >= startOfLastWeek();
        case 'thisMonth':
          return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
        case 'thisYear':
          return date.getFullYear() === now.getFullYear();
        case 'lastYear':
          return date >= startOfLastYear() && date < endOfLastYear();
        case 'lastQuarter':
          return date >= startOfLastQuarter();
        default:
          return false;
      }
    });
  
    return response;
  };
  
  
export const columns: ColumnDef<Lead>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,

    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "leadScore",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Lead Score
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            if (row.getValue('status') === 'contacted') {
                return (<Badge className="bg-[#F59E0B] pointer-events-none p-2">Contacted</Badge>)
            } else if (row.getValue('status') === 'attempted') {
                return (<Badge className="bg-[#6366F1] pointer-events-none p-2">Attempted</Badge>)
            } else if (row.getValue('status') === 'badFit') {
                return (<Badge className="bg-[#EF4444] pointer-events-none p-2">Bad Fit</Badge>)
            } else if (row.getValue('status') === 'qualified') {
                return (<Badge className="bg-[#22C55E]  pointer-events-none p-2">Qualified</Badge>)
            } else if (row.getValue('status') === 'newLead') {
                return (<Badge className="bg-[#0EA5E9] pointer-events-none p-2">New Lead</Badge>)
            }
        },
        filterFn: (row, id, value) => {
            const data = row.getValue(id);
            return (value.includes(row.getValue(id)))
        },

    },
    {
        accessorKey: "company",
        header: "Company",
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "comments",
        header: "Comments",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
        cell: ({ row }) => {
            const date = new Date(row.getValue('createdAt'));
            const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
            const formattedDate = date.toLocaleDateString('en-GB', options);
            

            return <span>{formattedDate}</span>
        },
        filterFn: dateFilter,
        
    },
    {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ row }) => {
            const date = new Date(row.getValue('updatedAt'));
            const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
            const formattedDate = date.toLocaleDateString('en-GB', options);
            
            return <span>{formattedDate}</span>
        },
        filterFn: dateFilter
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const leadId = row.original // you get the row id here

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            className="bg-red-500 text-white"
                            
                        >
                            <DeleteLeadButton leadIds={leadId.id} subaccountId={leadId.subAccountId} />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><UpdateLeadButton leadId={leadId.id} /></DropdownMenuItem>
                       
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

] 