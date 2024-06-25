"use client"
import { Contact } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UpdateContactButton from "./update-contact";
import DeleteContact from "./delete-contact";

const dateFilter = (data: any, columnId: string, filterValue: string[]) => {
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


    return filterValue.some((item: string) => {
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


};
export const columns: ColumnDef<Contact>[] = [
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
        accessorKey: 'title',
        header: "Title"
    },
    {
        accessorKey: 'type',
        header: "Type"
    },
    {
        accessorKey: "deal",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Deal
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
    },
    {
        accessorKey: "priority",
        header: "Priority",
        filterFn: (row, id, value) => {
            const data = row.getValue(id);
            return (value.includes(row.getValue(id)))
        },
    },
    {
        accessorKey: "phone",
        header: "Phone"
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
        }
    },
    {
        accessorKey: "company",
        header: "Company"
    },
    {
        accessorKey: "createdAt",
        header: "Created Date",
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
        header: "Updated Date",
        cell: ({ row }) => {
            const date = new Date(row.getValue('updatedAt'));
            const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: '2-digit' };
            const formattedDate = date.toLocaleDateString('en-GB', options);
            

            return <span>{formattedDate}</span>
        },
        filterFn: dateFilter,
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const contactId = row.original // you get the row id here
            console.log(contactId)
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
                            className=" text-white"             
                        >
                            <DeleteContact subaccountId={contactId.subAccountId} contactId={contactId.id}/>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <UpdateContactButton subaccountId={contactId.subAccountId} 
                            contactId={contactId.id}/>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]