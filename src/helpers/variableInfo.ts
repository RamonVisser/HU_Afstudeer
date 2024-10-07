export class variableInfo{
    name: string
    variableExplanation: string
    technicalExplanation: string
    ethicalExplanation: string

    constructor(_name: string, _variableExplanation: string, _techincalExplanation: string, _ethicalExplanation: string){
        this.name = _name
        this.variableExplanation = _variableExplanation
        this.technicalExplanation = _techincalExplanation
        this.ethicalExplanation = _ethicalExplanation
    }

}