import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
  render() {
      return (
        //when working with modules its better to write the class name this way. as it make sure it doesn't interfiert with other css files
          <div className={styles.container}>
            <Cards />
            <CountryPicker />
            <Chart />
          </div>
      )
  }
}

export default App;