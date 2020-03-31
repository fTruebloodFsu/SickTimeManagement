import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button, Spinner } from 'reactstrap';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import MyNavBar from './navBar.js';
import { BrowserRouter } from 'react-router-dom';

const formStyle = {
    backgroundColor: '#212529', 
    color: 'white',
    display: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fluid',
    hieght: '100vh'
}

// function FormEntry(props){
//     return(
//         <Row>
//             <Col xs = {2}>
//                 <p>{props.entryText}:</p>
//             </Col>
//             <Col xs = {6}> 
//                 <input
//                 type='text'
//                 name={props.entryName}
//                 onChange={this.myChangeHandler}
//             />
//             </Col>
//         </Row>
//     );
// }

const GrowingSpinner = (props) => {
    return (
      <div>
        <Spinner type="grow" color="danger" />
      </div>
    );
  }


function validate(firstName, lastName, storeNum, date, shift, hours) {
    // true means invalid, so our conditions got reversed
    return {
      FirstName: firstName.length === 0,
      LastName: lastName.length === 0,
      StoreNumber: !Number(storeNum),
      selectedDate: date.length === 0,
      Shift: shift.length === 0,
      HoursUsed: !Number(hours),
    };
  }

class MyForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        FirstName: '',
        LastName: '',
        StoreNumber: '',
        selectedDate: '',
        Shift: '',
        HoursUsed: null
      };
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;

      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const errorsSub = validate(this.state.FirstName, this.state.LastName, 
            this.state.StoreNumber, this.state.selectedDate,
            this.state.Shift, this.state.HoursUsed);
        
        if(errorsSub){alert("no errors")}
      }

    render() {
    const errors = validate(this.state.FirstName, this.state.LastName, 
        this.state.StoreNumber, this.state.selectedDate,
        this.state.Shift, this.state.HoursUsed);
      return (
        <div>
            <MyNavBar />
            <form style={formStyle}>
            <Container>
                <Row>
                    <Col xs = {12}>
                        <h2>Employee: {this.state.FirstName} {this.state.LastName}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12}>
                        <h2>Store number: {this.state.StoreNumber}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12}>
                        <h2>Date: {this.state.selectedDate}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12}>
                        <h2>Shift: {this.state.Shift}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {12}>
                        <h2>Hours used: {this.state.HoursUsed}</h2>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs = {2}>
                        <p>First name:</p>
                    </Col>
                    <Col xs col = {3}>
                        <input
                        className={errors.FirstName ? "error" : "success"}
                        type='text'
                        name='FirstName'
                        placeholder='Quenten'
                        value={this.state.FirstName}
                        onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.FirstName ? <p className="errorMessage">*Please Enter A First Name</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {2}>
                        <p>Last name:</p>
                    </Col>
                    <Col xs col = {6}>
                        <input
                        className={errors.LastName ? "error" : "success"}
                        type='text'
                        name='LastName'
                        placeholder='Hicks'
                        value={this.state.LastName}
                        onChange={this.myChangeHandler}
                        />
                        <div>
                            {errors.LastName ? <p className="errorMessage">*Please Enter A Last Name</p> : <p></p>}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {2}>
                        <p>Store number:</p>
                    </Col>
                    <Col xs = {6}> 
                        <input
                        className={errors.StoreNumber ? "error" : "success"}
                        type='text'
                        name='StoreNumber'
                        placeholder='3'
                        value={this.state.StoreNumber}
                        onChange={this.myChangeHandler}
                        />
                        <div>
                        {errors.StoreNumber ? <p className="errorMessage">*Please Enter A Store Number</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {2}>
                        <p>Date:</p>
                    </Col>
                    <Col xs = {6}> 
                    <input
                    className={errors.selectedDate ? "error" : "success"}
                    type='text'
                    name='selectedDate'
                    placeholder='mm/dd/yyyy'
                    value={this.state.selectedDate}
                    onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.selectedDate ? <p className="errorMessage">*Please Enter A Date</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {2}>
                        <p>Shift:</p>
                    </Col>
                    <Col xs = {6}> 
                    <input
                    className={errors.Shift ? "error" : "success"}
                    type='text'
                    name='Shift'
                    placeholder='12-8'
                    value={this.state.Shift}
                    onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.Shift ? <p className="errorMessage">*Please Enter A Shift</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {2}>
                        <p>Hours requested:</p>
                    </Col>
                    <Col xs = {6}> 
                    <input
                    className={errors.HoursUsed ? "error" : "success"}
                    type='text'
                    name='HoursUsed'
                    placeholder='8'
                    value={this.state.HoursUsed}
                    onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.HoursUsed ? <p className="errorMessage">*Please Enter The Number Of Hours</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col xs = {2}>
                    </Col>
                    <Col xs = {6}>
                        <Button color='primary' onClick={this.mySubmitHandler}>Submit</Button>
                    </Col>
                </Row>
            </Container>
            </form>
        </div>
      );
    }
  }
  
  function displayForm(target){
    ReactDOM.render(<MyForm />, document.getElementById('root'));
  }

  export default displayForm;