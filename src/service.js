import request from 'superagent';
import { countries, lookup } from 'country-data';

const getMedalsByCountry = (medals) => {
  let medalsByCountry = {};
  medals.forEach((item) => {
    if(undefined == medalsByCountry[item.country]) {
      let countryMetaData = countries[item.country];
      if(typeof countryMetaData === 'undefined') {
        countryMetaData = lookup.countries({ioc: item.country})[0];
      }
      let country = {
        medals: [], 
        goldCount: 0, 
        silverCount: 0, 
        bronzeCount: 0, 
        totalCount: 0, 
        code: item.country
      };
      if(typeof countryMetaData !== 'undefined') {
        country.name = countryMetaData.name;
        country.emoji = countryMetaData.emoji;
      }
      medalsByCountry[item.country] = country;
    }
    medalsByCountry[item.country].medals.push(item);
    medalsByCountry[item.country][`${item.medal.toLowerCase()}Count`]++;
    medalsByCountry[item.country].totalCount++;
  });
  return Object.values(medalsByCountry);
}

const dataService = store => next => action => {
  next(action)
  switch (action.type) {
    case 'GET_OLYMPICS_DATA':
    request
    .get('/data/olympics_2008_medalists.json')
    .end((err, res) => {
      if (err) {
        return next({
          type: 'GET_OLYMPICS_DATA_ERROR',
          err
        })
      }
      const data = getMedalsByCountry(
        JSON.parse(res.text).map((obj, i) => {
          obj.id = i;
          return obj;
        })
        );
      next({
        type: 'GET_OLYMPICS_DATA_RECEIVED',
        data
      })
    })
    break
    default:
    break
  }

};

export default dataService