interface IMaterias  {
    title: string,
    value: number,
    points: number
}

import { convertToPoints } from "./literal"

export const calculateIndice =(materias: IMaterias[])=>{
    let totalPoints = 0
    let totalCreditos = 0
    for(const el of materias){
        totalPoints += el.value * convertToPoints(el.points)
        totalCreditos += el.value
    }
    return totalPoints / totalCreditos
}