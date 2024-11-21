"use client"

import { Document_Types } from "@/types/DocumentTypes"
import formatCurrency from "@/utils/formatCurrency"
import { ColumnDef } from "@tanstack/react-table"
import DropdownMenuList from "./DropdownMenuList"


export const columns: ColumnDef<Document_Types>[] = [
  {
    accessorKey: "documentName",
    header: "Nome do documento",
  },
  {
    accessorKey: "issuer",
    header: "Emitente",
  },
  {
    accessorKey: "totalTaxAmount",
    header: () => <div className="text-left">Valor total dos tributos</div>,
    cell: ({ row }) => {
      return <div className="text-left font-normal">
        {formatCurrency(row.getValue("totalTaxAmount"))}
      </div>
    },
  },
  {
    accessorKey: "netAmount",
    header: () => <div className="text-center">Valor líquido</div>,
    cell: ({ row }) => {
      return <div className="text-center font-normal">
        {formatCurrency(row.getValue("netAmount"))}
      </div>
    },
  },
  {
    accessorKey: "creationDate",
    header: "Data de criação",
  },
  {
    accessorKey: "lastUpdate",
    header: "Última atualização",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const docSelected = row.original
      return (
        <DropdownMenuList
          deleteDocument={() => docSelected.id}
          openDocument={() => docSelected.id}
        />
      )
    },
  },
]
