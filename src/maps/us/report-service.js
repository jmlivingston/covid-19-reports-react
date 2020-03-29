import summary from './us-summary.json'

function getTitle({ title }) {
  return `<span style="font-size:24px;">COVID-19: ${title}</span><br /><span style="font-size:16px;">Deaths: ${summary.deaths.toLocaleString(
    'en-US'
  )} | Cases: ${summary.cases.toLocaleString('en-US')}</span><br />
  <span style="font-size:12px; color: #333333">
    Source: </span>
    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ${new Date(
      summary.lastUpdated
    ).toLocaleDateString()} ${new Date(summary.lastUpdated).toLocaleTimeString()}</span>`
}

export { getTitle }
