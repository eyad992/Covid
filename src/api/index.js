import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
   
    //try will be excuted if the fetch is secssfull , otherwise we will get it the catch block
  try {

    // we want just the data so we use distruction we add the confimed and deaths.... beside the data so we don't repeat  confirmed: data.confirmed,


      const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);
      return { confirmed, recovered, deaths, lastUpdate, };
    }
  catch (error) {

  }
}