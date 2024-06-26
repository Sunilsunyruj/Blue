'use client'
import ContactUserForm from '@/components/forms/contact-user-form'
import CustomModal from '@/components/global/custom-modal'
import { findContact } from '@/lib/queries'
import { useModal } from '@/providers/modal-provider'
import React from 'react'
import { toast } from '@/components/ui/use-toast';


type Props = {
  subaccountId: string
  contactId:string
  
}

const UpdateContactButton = ({ subaccountId,contactId}: Props) => {
  const { setOpen } = useModal()

  const handleCreateContact = async () => {
   try{

    const contactInfo = await findContact(contactId);

    setOpen(  
      <CustomModal
        title="Create Or Update Contact information"
        subheading="Contacts are like customers."
        
      >
        <ContactUserForm subaccountId={subaccountId} action='update' contactInfo={contactInfo!}/>
      </CustomModal>
    )
   }catch(error){
    toast({
      title: 'Error',
      description: 'unable to fetch contact information',
    })
   }
  }

  return <div onClick={handleCreateContact}>Update Contact</div>
}

export default UpdateContactButton
