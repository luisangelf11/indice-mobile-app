import { create } from 'zustand'

interface Imateria {
    title: string
    value: number
    points: number
}

type Store = {
  materias: Imateria[] | [],
  add: (materia: Imateria) => void,
  clear: ()=> void
}

export const useStore = create<Store>()((set) => ({
  materias: [],
  add: (materia) => set((state) => ({materias: [...state.materias, materia]})),
  clear: ()=> set({materias: []})
}))

