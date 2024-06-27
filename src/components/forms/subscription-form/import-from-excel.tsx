import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { uploadMultipleContacts, uploadMultipleLeads } from '@/lib/queries';
import React, { useState } from 'react';
import * as xlsx from 'xlsx';
import { v4 } from 'uuid';
import { useRouter } from 'next/navigation';
import { Contact, Lead } from '@prisma/client';
import { useModal } from '@/providers/modal-provider';
import { Loader2 } from 'lucide-react';

type Props = {
    subAccountId: string;
    dataType: string;
}

const ImportFromExcel = ({ subAccountId, dataType }: Props) => {
    const { setClose} = useModal()
    const [loading, setLoading] = useState(false)

    const [selectedFile, setSelectedFile] = useState(null);
    const router = useRouter();
    const handleFileSelect = (e: any) => {
        setSelectedFile(e.target.files[0]);
    };
    function transformKeysContact(obj: Contact): { [key: string]: any } {
        const newObj: { [key: string]: any } = {};
        for (let key in obj) {
            const newKey = key.replace(/\s+/g, '').toLowerCase();
            newObj[newKey] = obj[key as keyof Contact];
        }
        return newObj;
    }
    function transformKeysLead(obj: Lead): { [key: string]: any } {
        const newObj: { [key: string]: any } = {};
        for (let key in obj) {
            const newKey = key.replace(/\s+/g, '').toLowerCase();
            newObj[newKey] = obj[key as keyof Lead];
        }
        return newObj;
    }
    const handleUploadData = () => {
        setLoading(true);
        if (!selectedFile) {
            toast({
                title: "Error",
                description: "Please select a file to upload",
                variant: "destructive"
            })
            return;
        }

        const reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = async (e) => {
            const data = e.target?.result;
            const workBook = xlsx.read(data, { type: 'binary' });
            const sheetName = workBook.SheetNames[0];
            const sheet = workBook.Sheets[sheetName];
            const parsedData = xlsx.utils.sheet_to_json(sheet);

            console.log('Parsed Data as Array:', parsedData);
            if (parsedData) {
                try {
                    if (dataType === "contact") {
                        const items: Contact[] = parsedData.map((item:any) => {
                            const transformedItem = transformKeysContact(item);
                            return {
                                id: v4(),
                                name: transformedItem.name,
                                email: transformedItem.email,
                                phone: transformedItem.phone,
                                company: transformedItem.company,
                                title: transformedItem.title,
                                priority: transformedItem.priority,
                                type: transformedItem.type,
                                deal: Number(transformedItem.deal),
                                createdAt: new Date(transformedItem.createdat),
                                updatedAt: new Date(transformedItem.updatedat),
                                subAccountId: subAccountId,
                            };
                        });
                        const response = await uploadMultipleContacts(items);
                        toast({
                            title: "Success",
                            description: `Uploaded ${response.count} contacts Successfully`,
                        })

                    }
                    if (dataType === "lead") {
                        const items: Lead[] = parsedData.map((item: any) => {

                            const transformedItem = transformKeysLead(item);
                            console.log("Transformed Item", transformedItem)
                            return {
                                id: v4(),
                                name: transformedItem.name,
                                leadScore: transformedItem.leadscore,
                                status: transformedItem.status,
                                company: transformedItem.company,
                                email: transformedItem.email,
                                comments: transformedItem.comments,
                                phone: transformedItem.phone,
                                title: transformedItem.title,
                                createdAt: new Date(transformedItem.createdat),
                                updatedAt: new Date(transformedItem.updatedat),
                                subAccountId: subAccountId,
                            };
                        });
                        const response = await uploadMultipleLeads(items);
                        toast({
                            title: "Success",
                            description: `Uploaded ${response.count} leads Successfully`,

                        })
                    }
                    setLoading(false);
                    router.refresh();
                    setClose();
                } catch (error) {
                    toast({
                        title: "Error",
                        description: "Error in uploading Data",
                        variant: "destructive"
                    })
                }
            }

        };

    };

    return (
        <div>
            <div className='p-3 flex flex-col gap-3'>
                <input type="file" onChange={handleFileSelect} accept=".xlsx" />
                <Button className="bg-green-500" onClick={handleUploadData}>
                   {loading?<Loader2 className="h-6 w-6 animate-spin text-white" />: "Upload"}
                </Button>
            </div>
        </div>
    );
};

export default ImportFromExcel;
