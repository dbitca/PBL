import * as React from "react";
import Menu from "../components/Menu";
import appMenu from "../components/appMenu";
import "../style/Document.css";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NewCard = () => {
  const [value, setValue] = React.useState("Personal");
  const [doc, setDoc] = React.useState("test");
  const theme = useTheme();
  const categories = ["Personal", "Health", "Vehicles", "Cadaster"];
  const documentNames = {
    Personal: ["Identity card", ""],
    Health: ["Covid card", ""],
    Vehicles: ["Veh card", ""],
    Cadaster: ["Cad card", ""],
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  return (
    <div className="home-page">
      <Menu menu={appMenu} />
      <div className="home-body">
        <div>
          <TextField id="standard-basic" label="Idnp" variant="standard" />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="day of birth"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="month of birth"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="year of birth"
            variant="standard"
          />
        </div>
        <div>
          <InputLabel id="demo-multiple-name-label">Categories</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            input={<OutlinedInput label="Categories" />}
            // MenuProps={MenuProps}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <InputLabel id="demo-multiple-name-label">Documents</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={doc}
            onChange={(e) => {
              setDoc(e.target.value);
            }}
            input={<OutlinedInput label="Documents" />}
          >
            {documentNames &&
              documentNames[value] &&
              documentNames[value].map((d) => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
