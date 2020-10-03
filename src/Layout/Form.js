import React, {useState} from "react";
import axios from "axios";
import Messages from './Messages';

const Form = () => {
  	const [mailSent, setmailSent] = useState(false);
  	const [error, setError] = useState({});
  	const [formData, setFormData] = useState({});

	const handleFormSubmit = e => {
		e.preventDefault();
		axios({
	  		method: "post",
	  		url: "https://sww.tf/post/",
	  		headers: { "content-type": "application/json" },
	  		data: formData
		})
	  	.then(result => {
	      	setmailSent(true);
	    	if (result.data.sent) {
	      		setError({'sent': true});
	    	} else {
	      		setError({'sent': false, 'message': result.data.message});

	      		result.data.errors.map((error) => {
	      			document.getElementById(error).style.borderColor = 'red';
	      		});
	    	}
	  	})
	  	.catch(error => setError( error.message ));
	};

	const handleChange = (e, field) => {
		let value = e.target.value;
		setFormData({
			...formData,
			[field]: value,
		});
	};
  
  	return(
	  	<form action="#">
			<textarea name="note" id="note" onChange={e => handleChange(e, 'note')}></textarea><br />
            <input type="submit" onClick={e => handleFormSubmit(e)} value="Feed the black hole" />

          	{mailSent && error.sent && <Messages type="success" message="Note sent!"/>}
          	{mailSent && !error.sent && <Messages type="error" message={error.message} />}
		</form>
	);
}

export default Form;