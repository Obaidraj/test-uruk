"use client";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

import PageTable from "@/components/page-table";


export default function Home() {
  return (
    <div className="flex flex-col w-full gap-3">
      <PageHeader />

      <div className="flex w-full flex-col">
        <div className="flex justify-end">
          <Button className="rounded-full">
            <UploadCloud /> Upload
          </Button>
        </div>
        <PageTable />
      </div>
      

    </div>
  );
}
