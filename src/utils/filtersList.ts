type OptionType = {
  [key: string]: {label: string; value: string}[]
}

export const OPTIONS: OptionType = {
  orden:[
    {
      label:"predeterminado",
      value:"sinfiltro",
    },
  ],
  vencimiento: [
    {
      label:"Ascendente",
      value:"ascendente",
    },
    {
      label:"Descendente",
      value:"descendente",
    }
  ],
  descripcion: [
    {
      label:"Ascendente",
      value:"ascendente",
    },
    {
      label:"Descendente",
      value:"descendente",
    }
  ],
}

export const STATUSOPTIONS:OptionType ={
  estado: [
    {
      label:"Todos",
      value:"todos",
    },
    {
      label:"Completado",
      value:"completado",
    },
    {
      label:"Incompleto",
      value:"incompleto",
    }
  ],
}