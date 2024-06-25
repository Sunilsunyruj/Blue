"use client";
import { Button } from '@/components/ui/button';
import { downloadInExcel } from '@/lib/xlsx';
import React from 'react'

const LeadToExcel = ({allLeads}:any) => {
  return (
    <Button onClick={()=>downloadInExcel(allLeads)} className='bg-green-500'>Export to Excel</Button>
  )
}

export default LeadToExcel