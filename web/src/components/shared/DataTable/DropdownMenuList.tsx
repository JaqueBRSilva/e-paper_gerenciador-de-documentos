'use client'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Document_Types, IDocument_Props } from "@/types/DocumentTypes"
import { MoreHorizontal, Trash, View } from "lucide-react"

export default function DropdownMenuList({ ...docProps }: IDocument_Props) {
    const SIZE_ICON = 18

    const removeSelectedDocument = (id: string | number) => {
        console.warn('REMOVE DOCUMENT', id)
    }

    const openSelectedDocument = (data: Document_Types) => {
        console.info('OPEN DOC:', data)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                <DropdownMenuItem
                    onClick={() => openSelectedDocument(docProps.openDocument(docProps.documentProps))}
                >
                    <View size={SIZE_ICON} />
                    Visualizar
                </DropdownMenuItem>

                <DropdownMenuItem
                    onClick={() => removeSelectedDocument(docProps.deleteDocument(docProps.documentProps.id))}
                >
                    <Trash size={SIZE_ICON} />
                    Excluir documento
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}