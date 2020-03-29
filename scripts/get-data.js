var shell = require('shelljs')

if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

shell.rm('-rf', 'scripts/data/us/nytimes-covid-19-data')

if (
  shell.exec('git clone https://github.com/nytimes/covid-19-data.git scripts/data/us/nytimes-covid-19-data').code !== 0
) {
  shell.echo('Error: Git clone failed')
  shell.exit(1)
}
