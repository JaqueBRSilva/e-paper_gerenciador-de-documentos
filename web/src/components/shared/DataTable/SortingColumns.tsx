'use client'

import { Button } from "@/components/ui/button";
import { Document_Types } from "@/types/DocumentTypes";
import { SortingColumn } from "@tanstack/react-table";
import { ChevronsUpDown } from "lucide-react";

interface ISortingProps {
  columnName: string
  orderDataBy: SortingColumn<Document_Types>
}

export default function SortingColumns({ ...props }: ISortingProps) {
  return (
    <Button
      variant="ghost"
      onClick={() => props.orderDataBy.toggleSorting(props.orderDataBy.getIsSorted() === "asc")}
      className="text-gray500 text-left"
    >
      {props.columnName}
      <ChevronsUpDown
        className="ml-1 h-4 w-4"
      />
    </Button>
  )
}