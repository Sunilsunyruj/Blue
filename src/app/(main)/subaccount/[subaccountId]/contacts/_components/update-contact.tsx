'use client'
import ContactUserForm from '@/components/forms/contact-user-form'
import CustomModal from '@/components/global/custom-modal'
import { Button } from '@/components/ui/button'
import { findContact } from '@/lib/queries'
import { useModal } from '@/providers/modal-provider'
import { Contact } from '@prisma/client'
import React from 'react'

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
    console.log("Error in fetching contact",error)
   }
  }

  return <div onClick={handleCreateContact}>Update Contact</div>
}

export default UpdateContactButton
