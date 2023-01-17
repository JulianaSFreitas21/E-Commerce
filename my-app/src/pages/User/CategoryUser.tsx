interface CategoryUserProps{
  setCase: (newState: string) => void
}

export function CategoryUser({setCase}: CategoryUserProps){
  return(
    <div className="category">
      <div onClick={() => setCase('1')} className="box">
        <span>Profile</span>
      </div>
      <div onClick={() => setCase('2')} className="box">
        <span>Account Settings</span>
      </div>
      <div onClick={() => setCase('3')} className="box">
        <span>Payment</span>
      </div>
      <div onClick={() => setCase('4')} className="box">
        <span>Password and Security</span>
      </div>
    </div>
  )
}