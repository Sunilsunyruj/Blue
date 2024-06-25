'use client'
import UserLeadForm from '@/components/forms/user-lead-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { findLeadInfo } from '@/lib/queries'
import { useModal } from '@/providers/modal-provider'
import { PlusCircleIcon } from 'lucide-react'
import React from 'react'

type Props = {
  leadId: string
}

const UpdateLeadButton:React.FC<Props> = ({ leadId }: Props) => {
  const { setOpen } = useModal()

  const handleUpdateLead = async () => {
    const leadData = await findLeadInfo(leadId)
    console.log("Lead data is",leadData);
    
    setOpen(
      <CustomModal
        title="Create Or Update Lead information"
        subheading="Contacts are like customers."
        
      >
        <UserLeadForm  action='update' leadInfo={leadData!}/>
      </CustomModal>
    )
  }

  return <div onClick={handleUpdateLead} className='text-white gap-1'> Update Lead</div>
}

export default UpdateLeadButton
