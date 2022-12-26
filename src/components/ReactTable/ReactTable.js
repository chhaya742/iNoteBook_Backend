import React  from "react";
import DataTable from "react-data-table-component";
import { Data } from "./Data";



const ReactTable=()=>{
const column=[
    {
        name:"Invoice ID",
        selector:row=>row.invoice,
        sortable:true
    },
    {
        name:"Invoice_Amount",
        selector:row=>row.invoice_Amount,
        sortable:true
    },
    {
        name:"billing_Period",
        selector:row=>row.billing_Period,
        sortable:true
    },
    {
        name:"credits_Used",
        selector:row=>row.credits_Used,
        sortable:true
    },
    {
        name:"credit_Limit",
        selector:row=>row.credit_Limit,
        sortable:true
    },
    {
        name:"invoice_payment_status",
        selector:row=>row.invoice_payment_status,
        sortable:true
    }
]
    return(
        <div>
            <DataTable 
            columns={column}
            data={Data}
            pagination
            />
        </div>
    )
}
export default ReactTable;