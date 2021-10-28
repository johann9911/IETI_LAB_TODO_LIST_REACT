import React, { useState } from "react";

export const tasks = [
  {
    id: "1",
    name: "Tarea 1",
    assignedTo:"johan",
    dueDate:"13/07/2000",
    status:"DONE",
    description: "Arreglar el checklist del edit",
  },
  {
    id: "2",
    name: "Tarea 2",
    assignedTo:"johan",
    dueDate:"13/07/2000",
    status:"TODO",
    description: "Limpiar el campo del create task cuando se crea tarea",
  },
  {
    id: "3",
    name: "Tarea 3",
    assignedTo:"johan",
    dueDate:"13/07/2000",
    status:"TODO",
    description: "Mejorar el UI usando CSS",
  },
  {
    id: "4",
    name: "Tarea 4",
    assignedTo:"johan",
    dueDate:"13/07/2000",
    status:"REVIEW",
    description: "Modificar la estructura del proyecto(UI y lógica) para que el Task tenga los siguientes campos: [name, description,assignedTo, dueDate, [status(TODO, IN_PROGRESS,REVIEW, DONE)]",
  }
];

const initialData = { tasks };

const DataContext = React.createContext(initialData);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const value = { data, setData };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = React.useContext(DataContext);

  return context;
};
