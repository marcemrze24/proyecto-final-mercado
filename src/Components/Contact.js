import { useState } from "react";

const Contact = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
    });
    const handleFormInput = (e) => {
        console.log(value);
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", value);
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control my-5"
                    placeholder="Name"
                    value={value.name}
                    name="name"
                    onChange={handleFormInput}
                />
                <input
                    type="email"
                    className="form-control my-5"
                    placeholder="Email"
                    value={value.email}
                    name="email"
                    onChange={handleFormInput}
                />
                {/* <input
                    type="phone"
                    className="form-control my-5"
                    placeholder="Phone number"
                /> */}
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
