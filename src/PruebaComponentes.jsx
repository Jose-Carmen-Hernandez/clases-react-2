//import { Button} from "@mui/material/Button";
import * as React from "react";
import "./pruebaComponentes.css";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

//las props booleanas se pueden usar sin especificar el "true"
//cambiarVisibilidad actua sobre el input password
const PruebaComponentes = () => {
  const [visible, setVisible] = useState(false);
  const cambiarVisibilidad = () => {
    setVisible(!visible);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="buttons">
      <div className="inputs">
        <TextField
          id="outlined-basic"
          label="Escribe algo..."
          variant="outlined"
        />
        <TextField
          id="standard-basic"
          variant="standard"
          label="Contraseña"
          type={visible ? "text" : "password"}
        />
        {/* Los iconos no ejecutan funciones. Para eso se usa el <iconButton> */}
        <IconButton onClick={cambiarVisibilidad}>
          {visible ? (
            <RemoveRedEyeRoundedIcon color={"primary"} />
          ) : (
            <VisibilityOffRoundedIcon color={"secondary"} />
          )}
        </IconButton>
        <Button
          variant="contained"
          color="info"
          size="small"
          onClick={cambiarVisibilidad}
        >
          mostrar/ocultar contraseña
        </Button>
      </div>

      {/* <Button variant="text" disabled={true} size={"large"}> */}
      <Button variant="text" disabled size={"large"}>
        Text
      </Button>
      <Button variant="contained" color={"secondary"}>
        Contained
      </Button>
      <Button
        variant="outlined"
        fullWidth={true}
        color={"error"}
        size={"large"}
      >
        Outlined
      </Button>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                /* onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword} */
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  );
};

export default PruebaComponentes;
