import React, { useEffect } from "react";
import "./App.css";
import {
  Checkbox,
  Grid,
  Paper,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import classnames from "classnames";
import logo from "./images/logo.png";
import team_human from "./images/humans.PNG";
import team_dwarf from "./images/dwarf.PNG";
import team_highElves from "./images/highelves.PNG";
import team_orcs from "./images/orcs.PNG";
import team_chaos from "./images/chaos.PNG";
import team_amazons from "./images/amazons.PNG";
import team_brets from "./images/brets.PNG";
import team_chaosdwarf from "./images/chaosdwarf.PNG";
import team_darkelves from "./images/darkelves.PNG";
import team_goblins from "./images/goblins.PNG";
import team_halflings from "./images/halflings.PNG";
import team_khemri from "./images/khemri.PNG";
import team_lizardmen from "./images/lizardmen.PNG";
import team_necromantic from "./images/necromantic.PNG";
import team_norse from "./images/norse.PNG";
import team_nurgle from "./images/nurgle.PNG";
import team_ogre from "./images/ogre.PNG";
import team_proElves from "./images/proelves.PNG";
import team_skaven from "./images/skaven.PNG";
import team_undead from "./images/undead.PNG";
import team_vampire from "./images/vampire.PNG";
import team_underworld from "./images/underworld.PNG";
import team_woodelves from "./images/woodelves.PNG";

const teamPictures = [team_human, team_dwarf, team_highElves, team_orcs];

const teams = [
  { name: "Amazons", selected: true, pic: team_amazons },
  { name: "Chaos", selected: true, pic: team_chaos },
  { name: "Chaos Dwarfs", selected: true, pic: team_chaosdwarf },
  { name: "Dwarfs", selected: true, pic: team_dwarf },
  { name: "Dark Elves", selected: true, pic: team_darkelves },
  { name: "Elven Union ('Pro elf')", selected: true, pic: team_proElves },
  { name: "Goblins", selected: true, pic: team_goblins },
  { name: "Halflings", selected: true, pic: team_halflings },
  { name: "High Elves", selected: true, pic: team_highElves },
  { name: "Humans", selected: true, pic: team_human },
  { name: "Khemri", selected: true, pic: team_khemri },
  { name: "Lizardmen", selected: true, pic: team_lizardmen },
  { name: "Necromantic", selected: true, pic: team_necromantic },
  { name: "Norse", selected: true, pic: team_norse },
  { name: "Nurgle", selected: true, pic: team_nurgle },
  { name: "Ogre", selected: true, pic: team_ogre },
  { name: "Orc", selected: true, pic: team_orcs },
  { name: "Skaven", selected: true, pic: team_skaven },
  { name: "Undead", selected: true, pic: team_undead },
  { name: "Underworld", selected: true, pic: team_underworld },
  { name: "Vampire", selected: true, pic: team_vampire },
  { name: "Wood Elves", selected: true, pic: team_woodelves },
];

function App() {
  const [randomizedTeams, setRandomizedTeams] = React.useState([]);
  const [checked, setChecked] = React.useState(teams);
  const [spinning, setSpinning] = React.useState(false);
  const [randomPicture, setRandomPicture] = React.useState(team_human);
  const [intervalPhase, setIntervalPhase] = React.useState(0);
  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (spinning) {
        let randomNumber = Math.floor(Math.random() * 22);
        /* if (intervalPhase % 2 === 0) {
          setRandomPicture(teamPictures[randomNumber]);
        } */

        setRandomPicture(teams[randomNumber].pic);
        setIntervalPhase(intervalPhase + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [spinning, intervalPhase]);

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

  const startRoulette = () => {
    // start spinner
    setSpinning(true);

    // after 5 seconds, stop the spinner and get the random team
    setTimeout(function () {
      randomizeNewTeam();
      setSpinning(false);
    }, 3000);
  };

  const imageClick = (index) => {
    if (index === selectedImage) {
      setSelectedImage(null);
    } else {
      console.log("Setting selected image:", index);
      setSelectedImage(index);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Paper className="App-container" elevation={3}>
          <img className="App-logo" src={logo} alt="" />
          <h3>Randomizer</h3>
          <Grid container diretion="column" spacing={4}>
            <Grid item>
              <Grid
                container
                direction="row"
                wrap="wrap"
                justify="space-between"
              >
                {checked.map((team) => {
                  return (
                    <Grid
                      item
                      key={`checkbox_${team.name}`}
                      className="team-checkbox"
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={team.selected}
                            onChange={handleCheckboxChange}
                            color="secondary"
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
            <Grid
              className="Buttons"
              container
              direction="row"
              justify="center"
            >
              <Grid item className="Randomize-button-container">
                <Button
                  onClick={startRoulette}
                  color="secondary"
                  variant="contained"
                  className="Randomize-button"
                >
                  Randomize new team
                </Button>
                <Button
                  onClick={resetTeams}
                  color="secondary"
                  variant="contained"
                  className="Reset-button"
                >
                  Reset
                </Button>
              </Grid>
            </Grid>
            <Grid item className="Teams">
              <Grid container direction="row" spacing={2} justify="center">
                {randomizedTeams.map((rando, index) => {
                  const isSelected = index === selectedImage;
                  return (
                    <Grid item key={`random_${index}`}>
                      <Grid container direction="column">
                        <Grid
                          item
                          className={classnames(
                            "Team-picture-container",
                            isSelected ? "selected" : ""
                          )}
                          onClick={() => imageClick(index)}
                        >
                          <img
                            src={rando.pic}
                            alt="alt"
                            className="Team-picture"
                          />
                        </Grid>
                        <span className="Team-name">{rando.name}</span>
                      </Grid>
                    </Grid>
                  );
                })}
                {spinning && (
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item className="Team-picture-container">
                        <img
                          src={randomPicture}
                          alt="alt"
                          className={
                            intervalPhase % 2 !== 0
                              ? "Spinning-picture"
                              : "Spinning-picture out"
                          }
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </header>
    </div>
  );
}

export default App;
