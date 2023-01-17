import { Input } from "../../common/input/Input";

export function Settings(){
    return(
        <div className="settings containerWidth">
            <div className="container flex-col">
                <h1>Account Settings</h1>
                <label>Account Type</label>
                <Input name="Name" type="text" plasceholder="Ex.: John" value=""/>
                <label>Delivery</label>
                <Input name="LastName" type="text" plasceholder="Ex.: Willians" value=""/>
                <label>Language</label>
                <Input name="Email" type="email" plasceholder="example@gmail.com" value=""/>
            </div>
        </div>
    )
}