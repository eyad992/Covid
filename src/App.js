import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
 // set the state to start displaying the data in the component

 state = {

  // it will be an empty objenct until it is populated under
   data: {},
 }

  // await should be raped in a an async function , with componentDidMount we put it the keyword in front of it
  async componentDidMount() {
    const fetchedData = await fetchData();

    // we populate the data in here ,, then we pass it as props to the component cards,, we distruct the (( cards data={this.state.data}) by creating a const above
    this.setState({ data : fetchedData })
  }

  render() {
    const { data } = this.state;
      return (
        //when working with modules its better to write the class name this way. as it make sure it doesn't interfiert with other css files
          <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker />
            <Chart />
          </div>
      )
  }
}

export default App;