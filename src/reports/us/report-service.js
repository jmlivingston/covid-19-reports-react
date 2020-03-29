import summary from './us-summary.json'

function getTitle({ title }) {
  return `<span style="font-size:24px;">COVID-19: ${title}</span><br /><span style="font-size:12px;">Cases: ${summary.cases.toLocaleString(
    'en-US'
  )} | Deaths: ${summary.deaths.toLocaleString(
    'en-US'
  )} | Last Updated: ${new Date(
    summary.lastUpdated
  ).toLocaleDateString()} ${new Date(
    summary.lastUpdated
  ).toLocaleTimeString()}</span><br />
  <span style="font-size:12px; color: gray">
    Data from 
    <a style="font-size:12px; text-decoration:underline; color: gray" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">         The New York Times</a><span style="font-size:12px; color: gray">, based on reports from state and local health agencies.</span>
  </span>
  <br />
  <a style="font-size:12px; text-decoration:underline; color: gray" target="_blank" href="mailto:jmlivingston@gmail.com?subject=I saw your Covid-19 map and want to hire you!">Hire Me!</a>
  <span style="font-size:12px"> | </span>
  <a style="font-size:12px; text-decoration:underline; color: gray" target="_blank" href="https://www.johnlivingston.io/">johnlivingston.io</a>`
}

export { getTitle }
