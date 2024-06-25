"use client"
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { deleteContact, deleteLead, saveActivityLogsNotification } from '@/lib/queries';
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    subaccountId: string
    contactId: string
  }

const DeleteContact = ({ subaccountId, contactId }: Props) => {
    const handleDeleteContact  =  async () => {
        try {
          console.log("Calling from delete contact")            
          const deleteResponse = await deleteContact(contactId)
          console.log("delete response is",deleteResponse);
          await saveActivityLogsNotification({
            agencyId: undefined,
            description: `Leads deleted`,
            subaccountId,
          })
          toast({
            title: 'Success',
            description: 'Deleted lead Successfully',
          })
          router.refresh()
          
        }catch (e) {
          toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Failed to delete leads',
          })
        }
      }
    
    const router = useRouter();
  return (
   <div onClick={handleDeleteContact} className='w-full bg-red-700 rounded-lg text-center p-1'>Delete</div>
  )
}

export default DeleteContact