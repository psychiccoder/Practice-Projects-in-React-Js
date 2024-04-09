import Button from "../Button/Button"
import { MdMessage } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { useState } from "react";


function Hero() {

    const [name, setname] = useState("abc")
    const [email, setemail] = useState("abc@abc.com")
    const [text, settext] = useState("abcjajsuiiu22bdbui2duiebfkjbf")

    const onSubmit = (event) => {
        event.preventDefault()

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };

    return (
        <>
            <section className="cont">
                <div className="form">
                    <div className="top_btn">
                        <Button text="Support Chat"
                            icon={<MdMessage
                                fontSize="24px" />}
                        />
                        <Button text="Via Call"
                            icon={<MdCall
                                fontSize="24px" />}
                        />
                    </div>
                    <Button
                        isOutline={true}
                        text="Via Email Form"
                        icon={<MdEmail
                            fontSize='24px' />}
                    />
                    <form onSubmit={onSubmit}>
                        <div className="form_control">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="form_control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="form_control">
                            <label htmlFor="text">Text</label>
                            <textarea type="text" rows="10" name="text" />
                        </div>
                    </form>
                    <div
                        style={{ display: "flex", justifyContent: "flex-end" }}>
                        <Button text="Submit Button" />
                    </div>

                    <div className="show">
                        {name + " " + email + " " + text}
                    </div>

                </div>

                <div className="image">
                    <img src="/images/service.svg" alt="" />
                </div>
            </section>
        </>
    )
}

export default Hero
