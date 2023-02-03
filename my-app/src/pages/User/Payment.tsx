import { Input } from "../../common/input/Input";
import { Select } from "../../common/Select/Select";

export function Payment(){
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
        <div className="payment containerWidth">
            <div className="container flex-col">
                <h1>Payment</h1>
                <label>Type</label>
                <Select name="paymentType" id="paymentType" options={paymentType}/>
                <label>Bank</label>
                <Select name="BankName" id="BankName" options={bankName}/>
                <label>Agency</label>
                <Input name="Email" type="email" plasceholder="XXX" value=""/>
                <label>Account number</label>
                <Input name="accountNumber" type="tel" plasceholder="XXXXXXXXX" value=""/>
                <label>Digit</label>
                <Input name="digit" type="text" plasceholder="X" value=""/>
                <label>Security Code</label>
                <Input name="digit" type="text" plasceholder="XXX" value=""/>
                <label>Valid date</label>
                <Input name="validDate" type="date" value=""/>
            </div>
        </div>
    )
}