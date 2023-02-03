import { Input } from "../../common/input/Input";

export function Securty(){
    return(
        <div className="security containerWidth">
            <div className="container flex-col">
                <h1>Security</h1>
                <label>Email</label>
                <Input name="Email" type="email" plasceholder="example@gmail.com" value=""/>
                <label>Password</label>
                <Input name="LastName" type="password" plasceholder="*********" value=""/>
                <label>Confirm New Password</label>
                <Input name="Name" type="password" plasceholder="*********"  value=""/>
            </div>
        </div>
    )
}