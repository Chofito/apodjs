import axios from 'axios';

const DEFAULT_API_KEY = 'DEMO_KEY';

const formatDate = (date: Date): string => {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

export const apod = (key: string = DEFAULT_API_KEY) => (
  hd: boolean = false,
  date: Date = new Date()
) => {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${formatDate(date)}&hd=${hd}`
  );
};

apod()().then(r => console.log(r)).catch(e => console.log(e));
