import React from "react";
import "./App.css";
import {
  Checkbox,
  Grid,
  Paper,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import teampicture from "./images/humans.PNG";

const teams = [
  { name: "Amazons", selected: true },
  { name: "Chaos", selected: true },
  { name: "Chaos Dwarfs", selected: true },
  { name: "Dwarfs", selected: true },
  { name: "Dark Elves", selected: true },
  { name: "Elven Union ('Pro elf')", selected: true },
  { name: "Goblins", selected: true },
  { name: "Halfings", selected: true },
  { name: "High Elves", selected: true },
  { name: "Humans", selected: true },
  { name: "Khemri", selected: true },
  { name: "Lizardmen", selected: true },
  { name: "Necromantic", selected: true },
  { name: "Norse", selected: true },
  { name: "Nurgle", selected: true },
  { name: "Ogre", selected: true },
  { name: "Orc", selected: true },
  { name: "Skaven", selected: true },
  { name: "Undead", selected: true },
  { name: "Underworld", selected: true },
  { name: "Vampire", selected: true },
  { name: "Wood Elves", selected: true },
];

function App() {
  const [randomizedTeams, setRandomizedTeams] = React.useState([]);
  const [checked, setChecked] = React.useState(teams);

  const handleCheckboxChange = (e) => {
    let newChecked = [...checked];
    let team = newChecked.find((checked) => {
      return checked.name === e.target.name;
    });
    team.selected = !team.selected;
    setChecked(newChecked);
  };

  const randomizeNewTeam = () => {
    const randomNumber = Math.floor(Math.random() * 22);
    let newRandomTeams = [...randomizedTeams];
    const newRandomTeam = teams[randomNumber];
    if (newRandomTeam.selected) {
      newRandomTeams.push(teams[randomNumber]);
      setRandomizedTeams(newRandomTeams);
    } else {
      randomizeNewTeam();
    }
  };

  const resetTeams = () => {
    setRandomizedTeams([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Paper className="App-container" elevation={3}>
          <h3>Draw random teams</h3>
          <Grid container diretion="column" spacing={4}>
            <Grid item>
              <Grid container direction="row" wrap="wrap" justify="flex-start">
                {checked.map((team) => {
                  return (
                    <Grid item key={`checkbox_${team.name}`}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={team.selected}
                            onChange={handleCheckboxChange}
                            color="primary"
                            name={team.name}
                          />
                        }
                        label={team.name}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item className="Teams">
              <Grid container direction="row" spacing={2} justify="center">
                {randomizedTeams.map((rando, index) => {
                  return (
                    <Grid item key={`random_${index}`}>
                      <Grid container direction="column">
                        <Grid item>{rando.name}</Grid>
                        <Grid item>
                          <img
                            src={teampicture}
                            alt="alt"
                            className="Team-picture"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
                <Grid item className="Randomize-button-container">
                  <Button
                    onClick={randomizeNewTeam}
                    color="primary"
                    variant="contained"
                    className="Randomize-button"
                  >
                    Randomize new team
                  </Button>
                  <Button
                    onClick={resetTeams}
                    color="primary"
                    variant="contained"
                    className="Reset-button"
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
