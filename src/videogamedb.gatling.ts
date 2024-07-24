import {
  atOnceUsers,
  csv,
  feed,
  jmesPath,
  pause,
  rampUsers,
  scenario,
  simulation
} from '@gatling.io/core';
import { http, status } from '@gatling.io/http';

export default simulation((setUp) => {
  //HTTP protocol
  const httpProtocol = http
    .baseUrl('https://videogamedb.uk:443')
    .acceptHeader('application/json')
    .contentTypeHeader('application/json');

  //Feeder of the test data
  const feeder = csv('videogames.csv').random();

  //Scenario
  const myScenario = scenario('My scenario').exec(
    http('Get all video games')
      .get('/api/videogame')
      .check(status().is(200))
      .check(jmesPath('[0].id').saveAs('firstGameId')),

    pause(5),

    http('Get a single video game')
      .get('/api/videogame/#{firstGameId}')
      .check(status().is(200))
      .check(jmesPath('name').is('Resident Evil 4')),

    pause(2),

    feed(feeder),
    http('Get video game: #{gameName}')
      .get('/api/videogame/#{gameId}')
      .check(status().is(200))
      .check(jmesPath('name').isEL('#{gameName}'))
  );

  //Simulation
  //setUp(myScenario.injectOpen(atOnceUsers(1))).protocols(httpProtocol); //one user

  setUp(myScenario.injectOpen(atOnceUsers(20))).protocols(httpProtocol);
});
