import React, { Component } from 'react'

import Cards from './components/Cards/Index';
import Chart from './components/Chart/Index';
import CountryPicker from './components/CountryPicker/Index';

import styles from './global.css'

class App extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;
