import { useState } from "react";

export default function () {


    // console.log(value);

    function formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez',
        avatarUrl: "https://content.cylindo.com/api/v2/5090/products/DEMI-3R%2BCCL/frames/1/DEMI-3R+CCL.JPG?background=FFFFFF&feature=UPHOLSTERY:HIGBRA"
    };
    var handleChange = (e) => {
        console.log("You Have Clicked On onChange");
        setText(e.target.value)
        // console.log(value);
    }

    var handleSubmit = (e) => {
        console.log(e.target.value);
        alert('A name was submitted: ' + text);
        localStorage.setItem("userData", JSON.stringify({ text }))
        e.preventDefault();
    }
    const [text, setText] = useState([]);
    return (<>

        <h1>
            Hello, {formatName(user)}!

        </h1>
        <a href="https://www.reactjs.org"> link </a>
        <br></br>
        <img src={user.avatarUrl} height="150px" width="150px"></img>
        <form onSubmit={handleSubmit}>
            <label>
                firstName:
                <input type="text" value={text} onChange={handleChange} />

            </label>

            <input type="submit" value="Submit" />
        </form>
        <br></br>
        <h4>Description:</h4>
        <form onSubmit={handleSubmit}>
            <label>
                <textarea value={text} onSubmit={handleSubmit} >
                    write something
                </textarea>
            </label>

            <input type="submit" value="Submit" />
        </form>
        <br></br>
        <form onSubmit={handleSubmit}>
            <label>
                <select  value={text} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
  

    </>);
}

