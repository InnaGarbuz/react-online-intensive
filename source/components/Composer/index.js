//Core
import React, { Component } from 'react';

//Instruments

import { Consumer } from 'components/HOC/withProfile';



import Styles from "./styles.m.css";

export default class Composer extends Component{
    render () {
        const { avatar, currentUserFirstName } = this.props;

        return (
            <Consumer>
            {(context) => (
                <section className = { Styles.composer }>
                    <img src = { context.avatar } />
                    <form>
                        <textarea 
                            placeholder = {`What's on your ming, ${
                                context.currentUserFirstName} ?`} />
                        <input type = 'submit' value = 'Post' />
                    </form>
                </section>
            )}
        </Consumer>

           
        )
    }
}