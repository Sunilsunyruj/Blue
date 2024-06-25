'use client'
import UserLeadForm from '@/components/forms/user-lead-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { useModal } from '@/providers/modal-provider'
import { PlusCircleIcon } from 'lucide-react'
import React from 'react'

type Props = {
  subaccountId: string
}

const CreateLeadButton:React.FC<Props> = ({ subaccountId }: Props) => {
  const { setOpen } = useModal()

  const handleCreateLead = async () => {
    setOpen(
      <CustomModal
        title="Create Or Update Lead information"
        subheading="Contacts are like customers."
        
      >
        <UserLeadForm subaccountId={subaccountId} action='create'/>
      </CustomModal>
    )
  }

  return <Button onClick={handleCreateLead} className='text-white gap-1'><PlusCircleIcon className='text-white h-4'/> Create Lead</Button>
}

export default CreateLeadButton
