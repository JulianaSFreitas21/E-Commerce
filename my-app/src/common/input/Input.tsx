import './style.css'

interface InputProps{
    id?: string,
    plasceholder: string,
    type: string,
    value: string | undefined,
    name: string,
    accept?: string, 
    onChange?: (e:any) => void
}

export function Input({id, plasceholder, type, accept, name, value, onChange}:InputProps){
    return(
        <input id={id} name={name} accept={accept} type={type} onChange={onChange} placeholder={plasceholder} value={value}/>
    )
}