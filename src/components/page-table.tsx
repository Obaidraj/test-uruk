import React, {useState} from 'react'
import {Eye,DockIcon,Trash } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Drawer,  Placeholder } from 'rsuite';
import TaskTwo from './task-2';

const PageTable = () => {
    const [view,setView]=useState(false)
    const openView=()=>{
      setView(true)
    }
  return (
    <div className="flex flex-1 shadow-lg p-3 bg-white rounded-md mt-4 ">
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Action</TableHead>
          <TableHead>Document Type</TableHead>
          <TableHead>Document Name</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead>Updated By</TableHead>
          <TableHead>Updated Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="flex items-center gap-1">
            <div className="text-yellow-700 cursor-pointer" onClick={openView}><Eye size={20}/></div>
            <div><DockIcon size={20}/></div>
            <div className="text-yellow-700 cursor-pointer"><Trash size={20}/></div>
          </TableCell>
          <TableCell>Bank Statement</TableCell>
          <TableCell>Capture/ Png</TableCell>
          <TableCell>Abcdef</TableCell>
          <TableCell>Obaid Tariq</TableCell>
          <TableCell>11/14/2024 3:48 PM</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center gap-1">
            <div className="text-yellow-700 cursor-pointer" onClick={openView}><Eye size={20}/></div>
            <div><DockIcon size={20}/></div>
            <div className="text-yellow-700 cursor-pointer"><Trash size={20}/></div>
          </TableCell>
          <TableCell>Bank Statement</TableCell>
          <TableCell>Capture/ Png</TableCell>
          <TableCell>Abcdef</TableCell>
          <TableCell>Obaid Tariq</TableCell>
          <TableCell>11/14/2024 3:48 PM</TableCell>
        </TableRow><TableRow>
          <TableCell className="flex items-center gap-1">
            <div className="text-yellow-700 cursor-pointer" onClick={openView}><Eye size={20}/></div>
            <div><DockIcon size={20}/></div>
            <div className="text-yellow-700 cursor-pointer"><Trash size={20}/></div>
          </TableCell>
          <TableCell>Bank Statement</TableCell>
          <TableCell>Capture/ Png</TableCell>
          <TableCell>Abcdef</TableCell>
          <TableCell>Obaid Tariq</TableCell>
          <TableCell>11/14/2024 3:48 PM</TableCell>
        </TableRow><TableRow>
          <TableCell className="flex items-center gap-1">
            <div className="text-yellow-700 cursor-pointer" onClick={openView}><Eye size={20}/></div>
            <div><DockIcon size={20}/></div>
            <div className="text-yellow-700 cursor-pointer"><Trash size={20}/></div>
          </TableCell>
          <TableCell>Bank Statement</TableCell>
          <TableCell>Capture/ Png</TableCell>
          <TableCell>Abcdef</TableCell>
          <TableCell>Obaid Tariq</TableCell>
          <TableCell>11/14/2024 3:48 PM</TableCell>
        </TableRow><TableRow>
          <TableCell className="flex items-center gap-1">
            <div className="text-yellow-700 cursor-pointer" onClick={openView}><Eye size={20}/></div>
            <div><DockIcon size={20}/></div>
            <div className="text-yellow-700 cursor-pointer"><Trash size={20}/></div>
          </TableCell>
          <TableCell>Bank Statement</TableCell>
          <TableCell>Capture/ Png</TableCell>
          <TableCell>Abcdef</TableCell>
          <TableCell>Obaid Tariq</TableCell>
          <TableCell>11/14/2024 3:48 PM</TableCell>
        </TableRow><TableRow>
          <TableCell className="flex items-center gap-1">
            <div className="text-yellow-700 cursor-pointer" onClick={openView}><Eye size={20}/></div>
            <div><DockIcon size={20}/></div>
            <div className="text-yellow-700 cursor-pointer"><Trash size={20}/></div>
          </TableCell>
          <TableCell>Bank Statement</TableCell>
          <TableCell>Capture/ Png</TableCell>
          <TableCell>Abcdef</TableCell>
          <TableCell>Obaid Tariq</TableCell>
          <TableCell>11/14/2024 3:48 PM</TableCell>
        </TableRow>
      </TableBody>
    </Table>
<Drawer size={'lg'} open={view} onClose={() => setView(false)}>
  <Drawer.Body>
  
  <TaskTwo/>
  </Drawer.Body>
</Drawer>
  </div>
  )
}

export default PageTable