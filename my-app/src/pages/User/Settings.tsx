import { Input } from "../../common/input/Input";
import { Select } from "../../common/Select/Select";

export function Settings(){
    let accountType=[
        {
            name: 'user'
        },
        {
            name: 'vendor'
        }
    ]
    let delivery=[
        {
            name: 'pick up in store'
        },
        {
            name: 'deliver at home'
        }
    ]

    return(
        <div className="settings containerWidth">
            <div className="container flex-col">
                <h1>Account Settings</h1>
                <label>Account Type</label>
                <Select name="accountType" id="accountType" options={accountType} />
                <label>Delivery</label>
                <Select name="delivery" id="delivery" options={delivery} />
                <label>Language</label>
                <Input name="Language" type="text" plasceholder="Ex.: English" value=""/>
            </div>
        </div>
    )
}