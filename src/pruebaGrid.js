//Aqui se concentran los estilos de MUI para reducir los estilos en linea dentro del codigo

const styles = {
  tituloUno: {
    backgroundColor: { xs: "red", sm: "steelblue" },
    margin: { xs: "10px", md: "25px" },
    display: { xs: "flex", md: "none" },
  },
  tituloDos: {
    backgroundColor: { xs: "blue", md: "yellow" },
    margin: { xs: "10px", md: "20px" },
  },
  tituloTres: {
    backgroundColor: "green",
    display: "flex",
  },
  mediaQueries: { xs: 12, sm: 6, md: 4 },
};
export default styles