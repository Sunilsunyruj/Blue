import BlurPage from '@/components/global/blur-page'
import { db } from '@/lib/db'
import { Contact, SubAccount, Ticket } from '@prisma/client'
import React from 'react'
import { DataTable } from '@/components/table/data-table'
import { columns } from './_components/columns'
import CraeteContactButton from './_components/create-contact-btn'

type Props = {
  params: { subaccountId: string }
}

const ContactPage = async ({ params }: Props) => {
  

  type SubAccountWithContacts = SubAccount & {
    Contact: (Contact & { Ticket: Ticket[] })[]
  }

  const contacts = (
    await db.subAccount.findUnique({
      where: {
        id: params.subaccountId,
      },

      include: {
        Contact: {
          include: {
            Ticket: {
              select: {
                value: true,
              },
            },
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    })) as SubAccountWithContacts


  const allContacts = contacts.Contact
  return (
    <BlurPage>
      <h1 className="text-4xl p-4">Contacts</h1>
      <DataTable columns={columns} data={allContacts} dataType='contact' childElement={<CraeteContactButton subaccountId={params.subaccountId}/>} subaccountId={params.subaccountId}/>
      
    </BlurPage>
  )
}

export default ContactPage
