function Contact(props){

    //props is read only, 
    //if we want to change value we have to store it to other variable and make modifications in it

    // any props passed from components is considered string here 
    // if we have to maintains state , for eg if we have to receive numberas number we have to send as javascript
    // eg id={1}

    console.log(typeof props.id);
    return(
        <div>

            <label>{props.name} Email Address</label>
            <input type="text" />
            <br />

            <label> Message </label>
            <textarea></textarea>
            <button>Send</button>
            <br/>

        </div>
    )

}

export default Contact;