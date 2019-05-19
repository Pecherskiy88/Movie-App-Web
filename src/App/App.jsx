import React, { Component } from 'react';
import {testAction} from '../redux/action/testAction';
import {connect} from 'react-redux';
import styles from './App.module.css'
import test from '../redux/reducer/testReduce';

class App extends Component {
    render() {
        const {addTest} = this.props;
        return (
            <div>
                <input onChange = {addTest} type="text"/>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        value: state.test,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        addTest: function() {
            dispatch(testAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (App);