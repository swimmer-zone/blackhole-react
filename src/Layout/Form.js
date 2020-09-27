import React, {useState} from "react";
import axios from "axios";
import Messages from './Messages';

const Form = () => {
  	const [mailSent, setmailSent] = useState(false);
  	const [error, setError] = useState(null);
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
	    	if (result.data.sent) {
	      		setmailSent(result.data.sent)
	      		setError(false)
	    	} else {
	      		setError(true)
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
			<input type="hidden" name="project" value="blackhole" onChange={e => handleChange(e, 'project')} />
			<input type="hidden" name="fill_this" onChange={e => handleChange(e, 'fill_this')} />

			<textarea name="note" onChange={e => handleChange(e, 'note')}></textarea><br />

            <input type="submit" onClick={e => handleFormSubmit(e)} value="Feed the black hole" />
          	{mailSent && <Messages type="success" message="Note sent!"/>}
          	{error && <Messages type="error" message="Please fill the complete form" />}
		</form>
	);
}

export default Form;