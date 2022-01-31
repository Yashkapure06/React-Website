import React from 'react';

class Field extends React.Component {

    render(){
        
        
        return (
            <div>
                <div className="form-group">
                    {this.props.elementName === 'input' ?
                        <input 
                            className="form-control" 
                            id={this.props.name} 
                            type={this.props.type} 
                            placeholder={this.props.placeholder} 
                            data-sb-validations="required" 
                            // value ={this.props.value}
                            // onChange={e => this.props.onChange(e)}
                            name={this.props.name} 
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        />

                        :
                        <textarea 
                            className="form-control" 
                            id={this.props.name} 
                            type={this.props.type} 
                            placeholder={this.props.placeholder} 
                            data-sb-validations="required"
                            // value ={this.props.value}
                            // onChange={e => this.props.onChange(e)}
                            name={this.props.name} 
                            onChange={this.props.onChange}
                            onBlur={this.props.onBlur}
                        
                        />
                    }
                    <div className="invalid-feedback text-danger" data-sb-feedback="name:required">
                        {(this.props.touched && this.props.errors) && 
                            <span>This field is required</span>
                        }
                    </div>
                </div>
            </div>

        )
    

    }
}
export default Field;