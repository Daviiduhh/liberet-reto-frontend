import { defineStore } from "pinia";

export const usePerfilStore = defineStore("perfil", {
  state: () => {
    return {
      diaSeleccionado: new Date().getDate(),
      periodoSeleccionado: {
        id: 1,
        horario: "11:00 am - 12:00 am",
      },
      categoriaSeleccionada: {
        idCategory: "1",
        strCategory: "Beef",
      },
    };
  },
  getters: {
    getDiaSeleccionado: (state) => state.diaSeleccionado,
    getPeriodoSeleccionado: (state) => state.periodoSeleccionado,
    getCategoriaSeleccionada: (state) => state.categoriaSeleccionada,
  },
  actions: {
    setDiaSeleccionado(diaSeleccionado) {
      this.diaSeleccionado = diaSeleccionado;
    },
    setPeriodoSeleccionado(periodoSeleccionado) {
      this.periodoSeleccionado = periodoSeleccionado;
    },
    setCategoriaSeleccionada(categoriaSeleccionada) {
      this.categoriaSeleccionada = categoriaSeleccionada;
    },
  },
});
