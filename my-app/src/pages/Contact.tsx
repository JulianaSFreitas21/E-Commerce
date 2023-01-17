import './contact.css'

export function Contact() {
    return (
      <>
        <section className="contact">
          <div className="container">
            <h1>Contact us</h1>
            <p>Below are the main means of communication with us:</p>
            <div className="icons-content d_flex">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-solid fa-envelope"></i>
            </div>
          </div>
        </section>
      </>
    );
}  