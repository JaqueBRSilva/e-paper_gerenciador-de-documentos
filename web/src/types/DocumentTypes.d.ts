export type Document_Types = {
    id: string | number
    documentName: string
    issuer: string
    totalTaxAmount: number
    netAmount: number
    creationDate: Date | string 
    lastUpdate: Date | string
}

export interface IDocument_Props {
    documentProps?: Document_Types | any
    openDocument: (docData: Document_Types) => void | any
    createDocument?: (docData: Document_Types) => void
    deleteDocument: (docID: string | number) => void | any
}