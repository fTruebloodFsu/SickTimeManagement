import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import './index.css';
import "react-datepicker/dist/react-datepicker.css";
import MyNavBar from './navBar.js';

const formStyle = {
    backgroundColor: '#212529', 
    color: 'white',
    display: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fluid',
    hieght: '100vh'
}

function validate(firstName, lastName, storeNum) {
    // true means invalid, so our conditions got reversed
    return {
      FirstName: firstName.length === 0,
      LastName: lastName.length === 0,
      StoreNumber: !Number(storeNum),
    };
  }

  class MyFormCheck extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        FirstName: '',
        LastName: '',
        StoreNumber: '',
      };
    }

    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;

      this.setState({[nam]: val});
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        const errorsSub = validate(this.state.FirstName, this.state.LastName, this.state.StoreNumber);
        
        if(errorsSub){alert("no errors")}
      }

    render() {
    const errors = validate(this.state.FirstName, this.state.LastName, this.state.StoreNumber);
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
                <br/>
                <Row>
                    <Col xs = {2}>
                        <p>First name:</p>
                    </Col>
                    <Col xs col = {6}>
                        <input
                        className={errors.FirstName ? "error" : ""}
                        type='text'
                        name='FirstName'
                        placeholder='Quenten'
                        value={this.state.FirstName}
                        onChange={this.myChangeHandler}
                    />
                    <div>
                        {errors.FirstName ? <p className="errorMessage">*Please Enter A Name</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {2}>
                        <p>Last name:</p>
                    </Col>
                    <Col xs col = {6}>
                        <input
                        className={errors.LastName ? "error" : ""}
                        type='text'
                        name='LastName'
                        placeholder='Hicks'
                        value={this.state.LastName}
                        onChange={this.myChangeHandler}
                        />
                        <div>
                        {errors.LastName ? <p className="errorMessage">*Please Enter A Name</p> : <p></p>}
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs = {2}>
                        <p>Store number:</p>
                    </Col>
                    <Col xs = {6}> 
                        <input
                        className={errors.StoreNumber ? "error" : ""}
                        type='text'
                        name='StoreNumber'
                        placeholder='3'
                        value={this.state.StoreNumber}
                        onChange={this.myChangeHandler}
                        />
                        <div>
                        {errors.StoreNumber ? <p className="errorMessage">*Please Enter A Name</p> : <p></p>}
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

  function displayFormCheck(target){
    ReactDOM.render(<MyFormCheck />, document.getElementById('root'));
  }

  export default displayFormCheck;