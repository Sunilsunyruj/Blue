'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Loading from '../global/loading'
import { ContactUserFormSchema } from '@/lib/types'
import { saveActivityLogsNotification, upsertContact } from '@/lib/queries'
import { toast } from '../ui/use-toast'
import { useRouter } from 'next/navigation'
import { useModal } from '@/providers/modal-provider'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { priorityOptions,contactTypeOptions } from '@/lib/constants'
import { Contact } from '@prisma/client'


interface ContactUserFormProps {
  subaccountId: string
  action: "create" | "update"
  contactInfo?: Contact
}

const ContactUserForm: React.FC<ContactUserFormProps> = ({ subaccountId,action,contactInfo }) => {
  const { setClose, data } = useModal()
  const router = useRouter()
  const form = useForm<z.infer<typeof ContactUserFormSchema>>({
    mode: 'onChange',
    resolver: zodResolver(ContactUserFormSchema),
    defaultValues: {
      name: contactInfo ? contactInfo.name : '',
      title: contactInfo ? contactInfo.title : '',
      deal: contactInfo ? Number(contactInfo.deal) : undefined,
      type: contactInfo ? contactInfo.type :'',
      priority: contactInfo ? contactInfo.priority :'',
      phone: contactInfo? contactInfo.phone :'',
      email: contactInfo ? contactInfo.email :'',
      company: contactInfo ? contactInfo.company :'',
    },
  })

  useEffect(() => {
    if (data.contact) {
      form.reset(data.contact)
    }
  }, [data, form.reset])

  const isLoading = form.formState.isLoading

  const handleSubmit = async (
    values: z.infer<typeof ContactUserFormSchema>
  ) => {
    try {
      const response = await upsertContact({
        name: values.name,
        title: values.title,
        type: values.type,
        deal: values.deal,
        priority: values.priority,
        phone: values.phone,
        email: values.email,
        company: values.company,
        subAccountId: subaccountId,
      })
      await saveActivityLogsNotification({
        agencyId: undefined,
        description: `Updated a contact | ${response?.name}`,
        subaccountId: subaccountId,
      })
      toast({
        title: 'Success',
        description: 'Saved funnel details',
      })
      setClose()
      router.refresh()
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Oppse!',
        description: 'Could not save funnel details',
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        contactTypeOptions.map((option) => {
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
              name="deal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deal</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Deal"
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
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {
                        priorityOptions.map((option) => {
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
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Company"
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
    </Card>
  )
}

export default ContactUserForm