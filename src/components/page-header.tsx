"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const FormSchema = z.object({
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
    email1: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
     email2: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
})

export default function PageHeader() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
console.log('hello');

  }

  return (
    <div className="shadow-lg p-3 bg-white rounded-md mt-4">

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex py-16  justify-between gap-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem  className="w-1/2">
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
       
          control={form.control}
          name="email1"
          render={({ field }) => (
            <FormItem  className="w-1/2">
              <FormLabel>Email</FormLabel>
              <Input placeholder="m@example.com" {...field} />
            </FormItem>
          )}
        />
         <FormField
      
          control={form.control}
          name="email2"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormLabel>Email</FormLabel>
              <Input placeholder="m@example.com" {...field} />
            </FormItem>
          )}
        />
      
      </form>
    </Form>
    </div>
  )
}
