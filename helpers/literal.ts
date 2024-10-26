export const convertToLiteral = (value: number):string=>{
    if(value >= 90 && value <=100) return 'A'
    else if(value >= 80 && value <=89) return 'B'
    else if(value >= 70 && value <=79) return 'C'
    else if(value >= 60 && value <=69) return 'D'
    else return 'F'
}

export const convertToPoints = (value: number):number=>{
    if(value >= 90 && value <=100) return 4
    else if(value >= 80 && value <=89) return 3
    else if(value >= 70 && value <=79) return 2
    else if(value >= 60 && value <=69) return 1
    else return 0
}