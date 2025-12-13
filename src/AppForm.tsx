import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
}

function AppForm() {

    const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" value={formData.name} onChange={ handleChange }/>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={ handleChange }/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AppForm;