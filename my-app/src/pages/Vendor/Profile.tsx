import { Input } from "../../common/input/Input";

export function Profile(){
    return(
        <div className="profile containerWidth">
            <div className="container flex-col">
                <h1>Profile</h1>
                <div className="separetor d_flex">
                    <div className="l">
                        <label>Name</label>
                        <Input name="Name" type="text" plasceholder="Ex.: John" value=""/>
                        <label>Last Name</label>
                        <Input name="LastName" type="text" plasceholder="Ex.: Willians" value=""/>
                        <label>Company</label>
                        <Input name="Company" type="text" plasceholder="Ex.: Windows" value=""/>
                        <label>Phone number</label>
                        <Input name="PhoneNumber" type="tel" plasceholder="Ex.: +55DDXXXXXXXXX" value=""/>
                        <label>Country</label>
                        <Input name="Country" type="text" plasceholder="Ex.: United State" value=""/>
                        <label>State</label>
                        <Input name="State" type="text" plasceholder="Ex.: California" value=""/>
                        <label>City</label>
                        <Input name="City" type="text" plasceholder="Ex.: Sacrament" value=""/>
                        <label>Adress</label>
                        <Input name="Adress" type="text" plasceholder="Adress" value=""/>
                        <label>Postal Code</label>
                        <Input name="Postal Code" type="number" plasceholder="Ex.: XXXX-XXX" value=""/>
                    </div>
                    <div className="r">
                        <div className="circle">
                            <i className="fa-solid fa-image"></i>
                        </div>
                        <Input id="userImg" type="file" name="img" plasceholder="" value="" accept="image/*"/>
                    </div>
                </div>
            </div>
        </div>
    )
}