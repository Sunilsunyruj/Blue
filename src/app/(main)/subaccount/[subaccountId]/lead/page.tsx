import BlurPage from '@/components/global/blur-page'
import React from 'react'
import { db } from '@/lib/db'
import { Lead, SubAccount } from '@prisma/client'
import { columns } from './_components/columns'
import { DataTable } from '@/components/table/data-table'
import CreateLeadButton from './_components/create-lead-btn'

type Props = {
    params: { subaccountId: string },
    
}
const LeadPage:React.FC<Props> = async ({ params }: Props) => {

    type SubAccountWithLead = SubAccount & {
        Lead:Lead[]
    }

    const leads = (
        await db.subAccount.findUnique({
            where: {
                id: params.subaccountId,
            },
            include: {
                Lead: {
                    orderBy: {
                        createdAt: 'asc',
                    },
                },
            },
           
        })
    )as SubAccountWithLead
    const allLeads = leads.Lead
    return (
        <BlurPage>
            <h2 className='text-4xl p-4 mb-2'>Lead</h2>

           <DataTable columns={columns} data={allLeads} dataType='lead' childElement={<CreateLeadButton subaccountId={params.subaccountId}/>} subaccountId={params.subaccountId}/>
        </BlurPage>
    )
}

export default LeadPage