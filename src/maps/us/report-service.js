function getTitle({ name, cases, deaths, lastUpdated, reportType }) {
  return `<span style="font-size:24px;">COVID-19: ${name} ${
    reportType.charAt(0).toUpperCase() + reportType.slice(1)
  }</span><br /><span style="font-size:16px;">Deaths: ${deaths.toLocaleString('en-US')} | Cases: ${cases.toLocaleString(
    'en-US'
  )}</span><br />
  <span style="font-size:12px; color: #333333">
    Source: </span>
    <a style="font-size:12px; text-decoration:underline; color: #333333" href="https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html" target="_blank">The New York Times</a><span style="font-size:12px; color: #333333"> | Last Updated: ${new Date(
      lastUpdated
    ).toLocaleDateString()} ${new Date(lastUpdated).toLocaleTimeString()}</span>`
}

export { getTitle }
