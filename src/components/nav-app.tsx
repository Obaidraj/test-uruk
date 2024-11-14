import React from 'react'
import {ArrowBigLeft} from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
const items=['Home','About','Contect']
const NavApp = () => {
  return (
    <div className='w-full flex items-center justify-between '>
        <div className=' flex flex-col  '>
            <div className=' flex items-center font-semibold text-[30px]'>
            <ArrowBigLeft />Obaid Document
            </div>
            <div className='text-[24px]'>
                Voucher No: 1234
            </div>
       </div>
        <div> <Breadcrumb>
      <BreadcrumbList>
       {items?.map((item,id)=><>
       <BreadcrumbItem>
          <BreadcrumbLink href="/">{item}</BreadcrumbLink>
        </BreadcrumbItem>
        {id!==items.length-1&&<BreadcrumbSeparator />}
       </>)}
       
       
      </BreadcrumbList>
    </Breadcrumb></div>
    </div>
  )
}

export default NavApp