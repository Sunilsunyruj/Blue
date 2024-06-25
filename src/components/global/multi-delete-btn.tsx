'use client'
import { Button } from '@/components/ui/button'
import { deleteContacts, deleteLeads, saveActivityLogsNotification } from '@/lib/queries'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from '@/components/ui/use-toast'

type Props = {
    subaccountId: string
    Ids: string[]
    type: string

}
const MultiDeleteButton = ({ subaccountId, Ids, type }: Props) => {
    const router = useRouter();
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
                        }
                        if(type === 'lead'){
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
    )
}

export default MultiDeleteButton