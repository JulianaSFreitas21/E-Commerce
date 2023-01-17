import { Input } from "../../common/input/Input";

export function Payment(){
    return(
        <div className="payment containerWidth">
            <div className="container flex-col">
                <h1>Payment</h1>
                <label>Type</label>
                <Input name="Name" type="text" plasceholder="Ex.: John" value=""/>
                <label>Bank</label>
                <Input name="LastName" type="text" plasceholder="Ex.: Willians" value=""/>
                <label>Agency</label>
                <Input name="Email" type="email" plasceholder="example@gmail.com" value=""/>
                <label>Account number</label>
                <Input name="PhoneNumber" type="tel" plasceholder="Ex.: +55DDXXXXXXXXX" value=""/>
                <label>Digit</label>
                <Input name="Country" type="text" plasceholder="Ex.: United State" value=""/>
            </div>
        </div>
    )
}