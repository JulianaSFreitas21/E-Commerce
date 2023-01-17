import { Input } from "../../common/input/Input";

export function Banks(){
    return(
        <div className="banks containerWidth">
            <div className="container flex-col">
                <h1>Bank</h1>
                <label>Bank Name</label>
                <Input name="BankName" type="text" plasceholder="Ex.: John" value=""/>
                <label>Account Type</label>
                <Input name="AccountType" type="text" plasceholder="Ex.: Willians" value=""/>
                <label>Agency</label>
                <Input name="Agency" type="text" plasceholder="Ex.: Windows" value=""/>
                <label>Account Number</label>
                <Input name="AccountNumber" type="tel" plasceholder="Ex.: +55DDXXXXXXXXX" value=""/>
            </div>
        </div>
    )
}