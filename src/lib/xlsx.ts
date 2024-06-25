import xlsx, { IJsonSheet } from 'json-as-xlsx'

export function downloadLeadToExcel(data:any){
    let column: IJsonSheet[] = [
        {
            sheet: "Lead",
            columns: [
                { label: "Name", value: "name" },
                { label: "Lead Score", value: "leadScore" },
                { label: "Status", value: "status" },
                { label: "Title", value: "title" },
                { label: "Email", value: "email" },
                { label: "Phone", value: "phone" },
                { label: "Created At", value: (row: any) => new Date(row.createdAt).toLocaleDateString() },
                { label: "Updated At", value: (row: any) => new Date(row.updatedAt).toLocaleDateString() },
                { label: "Comments", value: "comments" },
            ],
            content:data

        }
    ]
    let setting = {
        fileName:"Lead"+new Date().getTime().toString()
    }

    xlsx(column, setting)
}
export function downloadContactToExcel(data:any){
    let column: IJsonSheet[] = [
        {
            sheet: "Lead",
            columns: [
                { label: "Name", value: "name" },
                { label: "Title", value: "title" },
                { label: "Type", value: "type" },
                { label: "Deal", value: "deal" },
                { label: "Priority", value: "priority" },
                { label: "Phone", value: "phone" },
                { label: "Email", value: "email" },
                { label: "Company", value: "company" },
                { label: "Created At", value: (row: any) => new Date(row.createdAt).toLocaleDateString() },
                { label: "Updated At", value: (row: any) => new Date(row.updatedAt).toLocaleDateString() },
            ],
            content:data

        }
    ]
    let setting = {
        fileName:"Contact"+new Date().getTime().toString()
    }

    xlsx(column, setting)
}