import emailjs from 'emailjs-com';
import image from "../../images/contact.png"
import "./contact.css"

export default function ContactMe() {

    const submitHandler = (e) => {
        e.preventDefault();


        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY, 
            process.env.REACT_APP_SERVICE_TEMPLATE, 
            e.target, 
            process.env.REACT_APP_SERVICE_USER)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
            e.target.reset();
            alert("Information sent!");
    }

    return (
        <div className="contactMe">
            <div className="contactMeContainer">
                <div className="left">
                <img src={image} alt="" className="leftImage" />
                </div>
                <div className="right">
                    <form onSubmit={submitHandler}>
                        <input type="text"
                        placeholder="Name..."
                        id="name"
                        name="name"
                        required
                        />
                        <input type="text"
                        placeholder="Subject..."
                        id="subject"
                        name="subject"
                        required
                        />
                        <input type="email"
                        placeholder="Email..."
                        id="email"
                        name="email"
                        required
                        />
                        <textarea
                        placeholder="What would you like to say...?"
                        id="info"
                        name="message"
                        style={{width: "100%", height: "250px"}}
                        required
                        />
                        <button type="submit">Submit</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
