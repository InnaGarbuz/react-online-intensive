// Core
import React, { Component } from 'react';

import Feed from 'components/Feed';

import avatar from "theme/assets/ketrin";

const options = {
    avatar,
    currentUserFirstName: 'Ketrin',
    currentUserLastName: 'Pirs',
}

export default class App extends Component {
    render() {
        return <Feed { ...options } />;
    }
}
