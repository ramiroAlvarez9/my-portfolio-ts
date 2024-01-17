import { useEffect, useState } from "react";
import Menu from "./components/Menu";
import Header from "./components/Header";
import AnimationBackgroundMain from "./components/AnimationBackgroundMain";
import Inicio from "./Pages/Inicio";
import Proyectos from "./Pages/Proyectos";
import Tecnologias from "./Pages/Tecnologias";
import Contacto from "./Pages/Contacto";
import axios from "axios"; 
import { handlingWindowsAndRoutes } from "./customHooks/controlSlideComponents";
import "./App.scss";
import "./global.scss";

interface CsvDataRow { [key: string]: string }

function App() {
  const [csvData, setCsvData] = useState<CsvDataRow[]>([]);

  //fetch data from google sheets
  const fetchCSVData = (): void => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRcYrbt_Ip3Km97jqq7CDP9k8GSx5RTx4nWQwcm46ELnY9xYFZHBvNlNAyYWw7OEioVfpUwQz7hMCnf/pub?output=csv";

    axios
      .get(csvUrl)
      .then((response) => {
        const parsedCsvData: CsvDataRow[] = parseCSV(response.data);
        setCsvData(parsedCsvData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };
  const parseCSV = (csvText: string): CsvDataRow[] => {
    const rows = csvText.split(/\r?\n/);
    const headers = rows[0].split(",");
    const data: CsvDataRow[] = [];

    for (let i = 1; i < rows.length; i++) {
      const rowData = rows[i].split(",");
      const rowObject: CsvDataRow = {};

      for (let j = 0; j < headers.length; j++) {
        rowObject[headers[j]] = rowData[j];
      }

      data.push(rowObject);
    }
    return data;
  };

  useEffect(() => {
    handlingWindowsAndRoutes();
    fetchCSVData();
  }, []);

  const LinksParaHeaderNoVaciosEnPosicion_ = (posArray: number) => (csvData[posArray] === undefined) ?  '' : csvData[posArray]['2'];
  const ProyectosParaGaleria = ()    => csvData.slice (7, 13);
  const experienciaParaMostrar = ()  => csvData.slice (16);

  return (
    <>
      <Menu />

      <Header
        githubLink    = {LinksParaHeaderNoVaciosEnPosicion_(0)}
        linkedinLink  = {LinksParaHeaderNoVaciosEnPosicion_(1)}
        instagramLink = {LinksParaHeaderNoVaciosEnPosicion_(2)}
        cvLink        = {LinksParaHeaderNoVaciosEnPosicion_(3)}
      />

      <section className="main">
        <AnimationBackgroundMain />
        <Inicio />
        <Proyectos   projects={ProyectosParaGaleria()} />
        <Tecnologias experiences={experienciaParaMostrar()} />

        <Contacto />
      </section>
    </>
  );
}

export default App;
