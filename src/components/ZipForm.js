import React  from 'react';
import ReactDOM from 'react-dom';

class ZipForm extends React.Component {
    
    render() {
        return (<div className="Zip-form">
                        <form>
                        <label htmlFor= "zipode">Zip Code</label> 
                            <input type="input" className="form-control" name="zipcode"  />
                            <button type="submit" onClick={(event) => console.log(event)} className="btn btn-primary">Get The ForeCast</button>
                        </form>
               </div>
               );
    }

 onSubmit(event) {
     console.log("===",event);
 }   
}
export default ZipForm;