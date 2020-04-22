import React, { Component } from 'react'

import Cards from './components/Cards/Index';
import Chart from './components/Chart/index';
import CountryPicker from './components/CountryPicker/Index';

import styles from './Global.module.css'

import { fetchData } from './api/index';

class App extends React.Component {
    state = {
        data: {},
    }

    // Buscando dados da API
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    render() {
        const { data } = this.state;

        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;
