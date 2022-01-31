import React from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';

const fields = {
    sections: [
        [
            {name:'name', elementName: 'input', type: 'text', placeholder: 'Your Name*'},
            {name:'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
            {name:'phone', elementName: 'input', type: 'tel', placeholder: 'Your Phone Number*'},
        ],
        [
            {name:'message', elementName: 'textarea', type: 'textarea', placeholder: 'Your Messaega*'},
        ]
    ]
}







class Contact extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: '',
    //         email: '',
    //         phone: '',
    //         message: '',
    //     }

    // }
    // submitForm = (e) =>{
    //     alert('Form submitted. Thank You very Much.');

    // }

    render(){
    
        return (
            <div>
                <section className="page-section" id="contact">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Contact Us</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN" onSubmit={this.props.handleSubmit}>
                            <div className="row align-items-stretch mb-5">
                                <div className="col-md-6">
                                    
                                    {fields.sections.map((section, sectionIndex)=>{
                                        console.log("Rendering section",  sectionIndex, "with", section) ;                          
                                        return (
                                            <div  key={sectionIndex}>
                                                    {section.map((field, i)=>{
                                                        return <Field
                                                                    {...field} 
                                                                    key={i}
                                                                    // value = {this.state[field.name]}
                                                                    // onChange={e=> this.setState({
                                                                    //     [field.name]: e.target.value
                                                                    // })}
                                                                    value = {this.props.values[field.name]}
                                                                    name = {field.name}
                                                                    onChange={this.props.handleChange}
                                                                    onBlur={this.props.handleBlur}
                                                                    touched={(this.props.touched[field.name])}
                                                                    errors={(this.props.errors[field.name])}
                                                        />
                                                    })}
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className="col-md-6">
                                    <div className="form-group form-group-textarea mb-md-0">
                                        
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="d-none" id="submitSuccessMessage">
                                <div className="text-center text-white mb-3">
                                    <div className="fw-bolder">Form submission successful!</div>
                                    
                                    <br />
                                </div>
                            </div>
                            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div> */}
                            <div className="text-center">
                                <button 
                                    className="btn btn-primary btn-xl text-uppercase " 
                                    id="submitButton" 
                                    type="submit"
                                    
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            
        )
    }

}

export default withFormik({
    mapPropsToValues: ()=>({
        name: '',
        email: '',
        phone: '',
        message: '', 

    }),
    validate: values =>{
        const errors ={};

        Object.keys(values).map(v =>{
            if (values[v]){
                errors[v] = 'required';
            }
        })
    },
    handleSubmit: (values, {setSubmitting})=>{
        console.log("values", values)
        alert("You Submitted the form", JSON.stringify(values));
    }
})(Contact);