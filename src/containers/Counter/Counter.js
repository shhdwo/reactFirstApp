// @flow

import React, { Component } from 'react';
import { Container, Row, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';

import './Counter.css';
import Button from '../../components/Button';
import { counter_add, counter_subtract } from "../../actions/actions";

type Props = {
    counter: number,
    add: (number) => void,
    subtract: (number) => void
}

class Counter extends Component<Props, {}> {

    render() {
        return (
            <Container className="counter-container">
                <Button content="Add 5" clickButtonHandler={this.props.add.bind(this, 5)} />
                <Button content="Add 10" clickButtonHandler={this.props.add.bind(this, 10)} />
                <Button content="Subtract 5" clickButtonHandler={this.props.subtract.bind(this, 5)} />
                <Button content="Subtract 10" clickButtonHandler={this.props.subtract.bind(this, 10)} />
                <Row>
                    <Jumbotron>Counter: {this.props.counter}</Jumbotron>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counterReducer.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (value: number) => {
            dispatch(counter_add(value))
        },
        subtract: (value: number) => {
            dispatch(counter_subtract(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);