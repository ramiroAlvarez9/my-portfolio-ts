import { useEffect, useState } from "react";
import "./App.scss";
import "./reset.min.css";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Index from "./components/Index";
import { setGlobalState } from "./global-state";
import axios from "axios"; // Import Axios

interface CsvDataRow {
  [key: string]: string;
}

function App() {
  type GlobalTransformType =
    | "transformInicioValue"
    | "transformProyectosValue"
    | "transformTecnologiasValue"
    | "transformContactoValue";

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
    //handling windows and routes

    function mostrarPagina(transformPagina: GlobalTransformType): void {
      if (window.screen.width > 1200) {
        setGlobalState("transformMenuValueDesktop", 100);
        setGlobalState(transformPagina, 0);
      } else {
        setGlobalState("transformMenuValue", -100);
        setGlobalState(transformPagina, 0);
      }
    }

    if (window.location.href.includes("/inicio")) {
      mostrarPagina("transformInicioValue");
    } else if (window.location.href.includes("/proyectos")) {
      mostrarPagina("transformProyectosValue");
    } else if (window.location.href.includes("/tecnologias")) {
      mostrarPagina("transformTecnologiasValue");
    } else if (window.location.href.includes("/contacto")) {
      mostrarPagina("transformContactoValue");
    }
    // fetch data from google sheets
    fetchCSVData();
  }, []);

  const setCsvLinkNotEmpty = (posArray: number) => {
    if (csvData[posArray] == undefined) {
      return "";
    } else {
      return csvData[posArray][""];
    }
  };

  return (
    <>
      <Menu />
      
      <Header 
        githubLink    =  {setCsvLinkNotEmpty(0)}
        linkedinLink  =  {setCsvLinkNotEmpty(1)}
        instagramLink =  {setCsvLinkNotEmpty(2)}  
        cvLink        =  {setCsvLinkNotEmpty(3)} 
      />
      
      <Index /> {/* <-- All pages from ./Pages are  in this component*/}
    </>
  );
}

export default App;
