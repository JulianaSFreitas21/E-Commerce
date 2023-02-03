import './style.css'

interface SelectProps{
    id: string,
    name: string,
    options: Array<any>
}

export function Select({id, name, options}:SelectProps){
    return(
        <select name={name} id={id}>
            {   
                options.map((option, index) =>{
                    return(
                        <option value={index}>{option.name}</option>
                    )
                })
            }
        </select>
    )
}