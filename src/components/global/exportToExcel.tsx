"use client";
import { Button } from '@/components/ui/button';
import { downloadContactToExcel, downloadLeadToExcel } from '@/lib/xlsx';
import React from 'react'

type Props = {
    data: any
    type: string
}
const DataToExcel = ({data,type}:Props) => {
  return (
   <div>{
    type === 'lead' ? <Button onClick={() => downloadLeadToExcel(data)} className='bg-green-600 text-white'>Export To Excel</Button> : <Button onClick={() => downloadContactToExcel(data)} className='bg-green-600 text-white'>Export To Excel</Button>
   }</div>
  )
}

export default DataToExcel