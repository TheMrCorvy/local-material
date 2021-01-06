import React, { Fragment, useState } from 'react';
import AppNavBar from '../components/layout/AppNavBar';

export default function Landing() {
    const [userName, setUserName] = useState('gonzalo');

    const [taskItems, setTaskItems] = useState([{}]);

    return (
        <Fragment>
            <AppNavBar />
        </Fragment>
    );
}
