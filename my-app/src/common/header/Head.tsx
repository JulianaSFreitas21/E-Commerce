import enveloper from '../assets/icons/envelope.svg';
import phone from '../assets/icons/phone.svg';

export function Head() {
    return (
      <>
        <section className="head">
            <div className="container d_flex">
                <div className="left row">
                     <img src={phone}/>
                     <label>+88012 3457 7894</label>
                     <img src={enveloper}/>
                     <label>example@gmail.com</label>
                </div>
                <div className="right row RText">
                    <label>Theme FAQ's</label>
                    <label>Need Helps</label>
                    <span>🏳️‍⚧️</span>
                    <label>EN</label>
                    <span>🏳️‍⚧️</span>
                    <label>USD</label>
                </div>
            </div>
        </section>
      </>
    );
}  