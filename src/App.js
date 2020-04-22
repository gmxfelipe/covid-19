import React from 'react'
import Cards from './components/Cards/Index';
import Chart from './components/Chart/index';
import CountryPicker from './components/CountryPicker/Index';
import styles from './Global.module.css'
import coronaImage from '../src/img/image.png';
import { fetchData } from './api/index';

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    // Buscando dados da API
    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData });
    }

    // Busca de dados 
    // Setar o state 
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({ data: fetchedData, country: country })

    } 

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
