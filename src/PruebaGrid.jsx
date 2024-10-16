import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import styles from "./pruebaGrid.js"; //archivo de estilos de MUI
import Button from "@mui/material/Button";

//El responsive en MUI trabaja con mobile first, toma de la medida mas chica hacia la mas grande.

const PruebaGrid = () => {
  return (
    <div>
      {/* Grid container divide la pantalla en 12 columnas */}
      <Grid container={true}>
        {/* Estas grids pueden contener tarjetas */}
        <Grid size={styles.mediaQueries}>
          <Typography sx={styles.tituloUno}>Caja-1</Typography>
        </Grid>
        <Grid size={styles.mediaQueries}>
          <Typography sx={styles.tituloDos}>Caja-2</Typography>
        </Grid>
        <Grid size={styles.mediaQueries}>
          <Typography sx={styles.tituloTres}>Caja-3</Typography>
        </Grid>
        <Button
          variant="outlined"
          fullWidth={true}
          color={"error"}
          size={"large"}
        >
          Outlined
        </Button>
        <Grid />
      </Grid>
    </div>
  );
};

export default PruebaGrid;

//Typography es la etiqueta por defecto para texto en MUI. NO usa h1, h2, parrafo,... recibe props para saber como debe comportarse
//Los componentes de MUI trabajan comunmente con estilos en linea pero podemos manejar un objeto de estilos e importarlo desee un archivo PruebaGrid.js
//sx equivale a style={}
