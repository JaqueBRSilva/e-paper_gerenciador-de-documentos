"use client"

import { Document_Types } from "@/types/DocumentTypes"
import formatCurrency from "@/utils/formatCurrency"
import { ColumnDef } from "@tanstack/react-table"
import DropdownMenuList from "./DropdownMenuList"
import SortingColumns from "./SortingColumns"


export const columns: ColumnDef<Document_Types>[] = [
  {
    accessorKey: "documentName",
    header: ({ column }) => {
      return (
        <SortingColumns
          columnName="Nome do documento"
          orderDataBy={column}
        />
      )
    },
  },

  {
    accessorKey: "issuer",
    header: ({ column }) => {
      return (
        <SortingColumns
          columnName="Emitente"
          orderDataBy={column}
        />
      )
    },
  },

  {
    accessorKey: "totalTaxAmount",
    header: ({ column }) => {
      return (
        <SortingColumns
          columnName="Valor total dos tributos"
          orderDataBy={column}
        />
      )
    },
    cell: ({ row }) => {
      return <div className="text-left font-normal">
        {formatCurrency(row.getValue("totalTaxAmount"))}
      </div>
    },
  },

  {
    accessorKey: "netAmount",
    header: ({ column }) => {
      return (
        <SortingColumns
          columnName="Valor líquido"
          orderDataBy={column}
        />
      )
    },
    cell: ({ row }) => {
      return <div className="text-center font-normal">
        {formatCurrency(row.getValue("netAmount"))}
      </div>
    },
  },

  {
    accessorKey: "creationDate",
    header: ({ column }) => {
      return (
        <SortingColumns
          columnName="Data de criação"
          orderDataBy={column}
        />
      )
    },
  },

  {
    accessorKey: "lastUpdate",
    header: ({ column }) => {
      return (
        <SortingColumns
          columnName="Última atualização"
          orderDataBy={column}
        />
      )
    },
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
