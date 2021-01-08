import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './NewColor.css';
import getColor from './helpers';

const NewColor = ({ submitColor }) => {
    const [alreadyExists, setAlreadyExists] = useState(false);
    const history = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        color: '#000000'
    });

    function handleChange(evt) {
        const newVal = evt.target.value;
        const field = evt.target.name;
        const newFormData = { ...formData };
        newFormData[field] = newVal;
        setFormData(newFormData);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (getColor(formData.name)) {
            setAlreadyExists(true);
            const newFormData = { ...formData };
            newFormData.name = '';
            setFormData(newFormData);
        }
        else {
            submitColor(formData);
            history.push('/colors');
        }
    }
    
    function handleBack() {
        history.push('/colors');
    }

    return (
        <div className="NewColor">
            <form className="NewColor-form" onSubmit={handleSubmit}>
                <h3>Create a new color:</h3>
                {alreadyExists ? <h5>Color already exists!</h5> : null}
                <p>
                    <label htmlFor="name">Name:</label>&nbsp;
                    <input type="text" name="name" value={formData.name} placeholder="Give your color a name" onChange={handleChange} required />
                </p>
                <p>
                    <label htmlFor="color">Color:</label>&nbsp;
                    <input type="color" name="color" value={formData.color} onChange={handleChange} />
                </p>
                <button type="submit">Submit</button>&nbsp;
                <button type="button" onClick={handleBack}>Go back</button>
            </form>
        </div>
    )
}

export default NewColor;