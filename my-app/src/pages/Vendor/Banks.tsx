import { Input } from "../../common/input/Input";
import { Select } from "../../common/Select/Select";

export function Banks(){
    let paymentType = [
        {
            name: 'Credit'
        },
        {
            name: 'Debit'
        },
        {
            name: 'pix'
        }
    ]

    let bankName = [
        {
            name: 'ABC'
        },
        {
            name: 'Banco do Brasil'
        },
        {
            name: 'Banco do Nordeste'
        },
        {
            name: 'Banrisul'
        },
        {
            name: 'Bradesco'
        },
        {
            name: 'BTG Pactual'
        },
        {
            name: 'C6'
        },
        {
            name: 'Caixa'
        },
        {
            name: 'Citibank'
        },
        {
            name: 'Inter'
        },
        {
            name: 'Itaú'
        },
        {
            name: 'Original'
        },
        {
            name: 'Safra'
        },
        {
            name: 'Santander'
        },
        {
            name: 'Sicredi'
        },
        {
            name: 'Sicoob'
        },
        {
            name: 'Votorantim'
        },
        {
            name: 'Cielo'
        },
        {
            name: 'Crefisa'
        },
        {
            name: 'Getnet'
        },
        {
            name: 'Hipercard'
        },
        {
            name: 'Mercado Pago'
        },
        {
            name: 'Modal'
        },
        {
            name: 'Neon'
        },
        {
            name: 'Next'
        },
        {
            name: 'NuBank'
        },
        {
            name: 'PagBank PagSeguro'
        },
        {
            name: 'PicPay'
        },
        {
            name: 'XP'
        }
    ]
    return(
        <div className="banks containerWidth">
            <div className="container flex-col">
                <h1>Bank</h1>
                <label>Bank Name</label>
                <Select name="paymentType" id="paymentType" options={paymentType}/>
                <label>Account Type</label>
                <Select name="BankName" id="BankName" options={bankName}/>
                <label>Agency</label>
                <Input name="Agency" type="text" plasceholder="XXX" value=""/>
                <label>Account Number</label>
                <Input name="AccountNumber" type="number" plasceholder="XXXXXXXXX" value=""/>
            </div>
        </div>
    )
}