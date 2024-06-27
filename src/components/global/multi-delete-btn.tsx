'use client'
import { Button } from '@/components/ui/button'
import { deleteContacts, deleteLeads, saveActivityLogsNotification } from '@/lib/queries'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from '@/components/ui/use-toast'
import { Table } from "@tanstack/react-table"

interface MultiDeleteProps<TData> {
    subaccountId: string
    Ids: string[]
    type: string
    table: Table<TData>
}
export default function MultiDeleteButton<TData>({ subaccountId, Ids, type, table }: MultiDeleteProps<TData>) {
    const router = useRouter()
    return (
        <div className='text-white'
            onClick={
                async () => {

                    try {
                        if (type === 'contact') {
                            const deleteResponse = await deleteContacts(Ids)
                            console.log(deleteResponse);
                            await saveActivityLogsNotification({
                                agencyId: undefined,
                                description: `${deleteResponse.count} contacts deleted`,
                                subaccountId,
                            })
                            toast({
                                title: 'Success',
                                description: 'Deleted Contacts Successfully',
                            })
                            router.refresh()
                            table.setRowSelection({})
                        }
                        if (type === 'lead') {
                            const deleteResponse = await deleteLeads(Ids)
                            console.log(deleteResponse);
                            await saveActivityLogsNotification({
                                agencyId: undefined,
                                description: `${deleteResponse.count} Leads deleted`,
                                subaccountId,
                            })
                            toast({
                                title: 'Success',
                                description: 'Deleted Leads Successfully',
                            })
                            router.refresh()
                            table.setRowSelection({})
                        }
                    } catch (error) {
                        toast({
                            title: 'Error',
                            description: 'Failed to delete contacts',
                            variant: "destructive"
                        })

                    }
                }
            }
        >

            <Button variant={'destructive'}>Delete Contacts</Button>
        </div>
    );
}