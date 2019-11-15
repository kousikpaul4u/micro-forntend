
const axios = require('axios')

module.exports.getLayout = () => {
  return axios.post('http://0.0.0.0:3031/batch', {
    header: {
      name: 'Header',
      data: {
        title: 'Micro-UI',
        links: [
          {
            url: '',
            text: 'Home'
          },
          {
            url: 'https://github.com/airbnb/hypernova',
            text: 'Hypernova'
          }
        ]
      }
    }
  })
    .then(({ data }) => {
      return data.results
    })
}
