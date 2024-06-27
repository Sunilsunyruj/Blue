"use client"
import { saveActivityLogsNotification, upsertLead } from '@/lib/queries'
import { UserLeadFormSchema } from '@/lib/types'
import { useModal } from '@/providers/modal-provider'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from '../ui/use-toast'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { statusOptions } from '@/lib/constants'
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent } from '../ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '../ui/input'
import Loading from '../global/loading'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../ui/form'
import { Lead } from '@prisma/client'



interface UserLeadFormProps {
  subaccountId: string
  action: "create" | "update"
  leadInfo?: Lead

}
const UserLeadForm: React.FC<UserLeadFormProps> = ({ subaccountId, action, leadInfo }) => {
  const { setClose, data } = useModal()
  console.log("Action is ", action)
  console.log("leadinfo is ", leadInfo)
  console.log("Subacount id from form", subaccountId);
  const router = useRouter();
  const form = useForm<z.infer<typeof UserLeadFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(UserLeadFormSchema),
    defaultValues: {
      name: leadInfo ? leadInfo.name : '',
      leadScore: leadInfo ? leadInfo.leadScore : undefined,
      status: leadInfo ? leadInfo.status : '',
      company: leadInfo ? leadInfo.company : '',
      title: leadInfo ? leadInfo.title : '',
      email: leadInfo ? leadInfo.email : '',
      phone: leadInfo ? leadInfo.phone : '',
      comments: leadInfo ? leadInfo.comments : '',
    },
  })
  useEffect(() => {
    if (data.contact) {
      form.reset(data.contact)
    }
  }, [data, form.reset])

  const isLoading = form.formState.isLoading

  const handleSubmit = async (values: z.infer<typeof UserLeadFormSchema>) => {
    try {
      if (action === "create") {
        const data = {
          name: values.name,
          leadScore: values.leadScore,
          status: values.status,
          company: values.company,
          title: values.title,
          email: values.email,
          phone: values.phone,
          comments: values.comments,
          subAccountId: subaccountId
        }
        console.log("the data is", data);

        const response = await upsertLead(data)

        await saveActivityLogsNotification({
          agencyId: undefined,
          description: `Updated a Lead | ${response?.name}`,
          subaccountId: subaccountId,
        })
        toast({
          title: 'Contact Updated',
          description: 'Lead has been updated successfully',
        })
      }
      if (action === "update") {
        const data = {
          id:leadInfo?.id,
          name: values.name,
          leadScore: values.leadScore,
          status: values.status,
          company: values.company,
          title: values.title,
          email: values.email,
          phone: values.phone,
          comments: values.comments,
          updatedAt: new Date(),
          subAccountId: subaccountId
        }
        console.log("the data is", data);

        const response = await upsertLead(data)

        await saveActivityLogsNotification({
          agencyId: undefined,
          description: `Updated a Lead | ${response?.name}`,
          subaccountId: subaccountId,
        })
        toast({
          title: 'Contact Updated',
          description: 'Lead has been updated successfully',
        })
      }
      setClose();
      router.refresh()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'could not save lead details',
      })
    }
  }
  return (
    <Card className=" w-full">
      <CardHeader>
        <CardTitle>Contact Info</CardTitle>
        <CardDescription>
          You can assign tickets to contacts and set a value for each contact in
          the ticket.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              disabled={isLoading}
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="leadScore"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lead Score</FormLabel>
                  <FormControl>
                    <Input
                      type='number'
                      placeholder="Lead Score"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isLoading}
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        statusOptions.map((option) => {
                          return (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          )
                        })
                      }
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Comapny"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Title"
                      {...field}
                    />
                  </FormControl>


                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              disabled={isLoading}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Phone"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comments</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Comments"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="mt-4"
              disabled={isLoading}
              type="submit"
            >
              {form.formState.isSubmitting ? (
                <Loading />
              ) : (
                'Save Contact Details!'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card >
  )
}

export default UserLeadForm