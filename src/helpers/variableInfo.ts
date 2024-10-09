export class variableInfo {
  id: number
  name: string
  variableExplanation: string
  technicalExplanation: string
  ethicalExplanation: string

  constructor(
    _id: number,
    _name: string,
    _variableExplanation: string,
    _techincalExplanation: string,
    _ethicalExplanation: string
  ) {
    this.id = _id
    this.name = _name
    this.variableExplanation = _variableExplanation
    this.technicalExplanation = _techincalExplanation
    this.ethicalExplanation = _ethicalExplanation
  }
}
