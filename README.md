# Gatling- TypeScript demo projects

## Prerequisites

You need [Node.js](https://nodejs.org/en/download) v18 or later (LTS versions only) and npm v8 or later (included with Node.js).

## Use demo project

Run the typeScript sample:

```shell
cd gatling-ts-demo
npm install
npm run test # automatically download Gatling runtime, build the project, and run the videogame simulation
```

You can also launch the [Gatling Recorder](https://docs.gatling.io/tutorials/recorder/) and use it to capture browser-based actions and help create a realistic user scenario:

```shell
npx gatling recorder
```

The `gatling` command-line tool has a built-in help function:

```shell
npx gatling --help # List all available commands
npx gatling run --help # List options for the "run" command (--help also works for all other available commands)
```

## Included helper scripts

Note that both sample projects include a few aliases in the `package.json`'s `scripts` section, which you can use for convenience or refer to as examples:

```shell
npm run clean # Delete Gatling bundled code and generated reports
npm run format # Format code with prettier
npm run check # TypeScript project only, type check but don't build or run
npm run build # Build project but don't run
npm run test # Run the included videogame simulation
npm run recorder # Starts the Gatling Recorder
```
