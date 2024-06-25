import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { deleteLead, deleteLeads, saveActivityLogsNotification } from '@/lib/queries'
import { useRouter } from 'next/navigation'
import React from 'react'


type Props = {
  subaccountId: string
  leadIds: string[] | string
}
const DeleteLeadButton = ({ subaccountId, leadIds }: Props) => {
  const router = useRouter();

  return (
    <div className='text-white '
      onClick={
        async () => {
          try {
            if (Array.isArray(leadIds)) {
              const deleteResponse = await deleteLeads(leadIds)
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
            }else{
              const deleteResponse = await deleteLead(leadIds)
              console.log(deleteResponse);
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
            }
            
          }catch (e) {
            toast({
              variant: 'destructive',
              title: 'Error',
              description: 'Failed to delete leads',
            })
          }
        }
      }
    >

      {Array.isArray(leadIds) ? <Button variant={"destructive"}>Delete Leads</Button> : 'Delete'}
    </div>
  )
}

export default DeleteLeadButton