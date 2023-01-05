import { createGlobalState } from "react-hooks-global-state";

const { setGlobalState, useGlobalState } = createGlobalState({
  transformMenuValue: 0,
  transformInicioValue: 100,
  transformProyectosValue: 100,
  transformTecnologiasValue: 100,
  transformBlogValue: 100,
  transformContactoValue: 100,

  //desktop mode

  transformMenuValueDesktop: 0,
});

export { useGlobalState, setGlobalState };
