import { ref } from 'vue'
import { defineStore } from 'pinia'
import { variableInfo } from '../helpers/variableInfo'

const dataVariables = ref([
  {
    id: 1,
    name: 'relationNumber',
    variableExplanation: 'Relatie nummer van de klant',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 2,
    name: 'policyNumber',
    variableExplanation: 'Polis nummer van de klant',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 3,
    name: 'objectNumber',
    variableExplanation: 'Object nummer van de klant',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 4,
    name: 'dateStart',
    variableExplanation: 'Startdatum van verzekeringsperiode',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 5,
    name: 'dateEnd',
    variableExplanation: 'Einddatum van de verzekeringsperiode',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 6,
    name: 'datePolicyStart',
    variableExplanation: 'Startdatum van de polis',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 7,
    name: 'amtPremium_BC',
    variableExplanation: 'amtPremium_BC',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 8,
    name: 'Merk',
    variableExplanation: 'Merk van de auto',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 9,
    name: 'Waarde',
    variableExplanation: 'Waarde van de auto',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 10,
    name: 'Model',
    variableExplanation: 'Model van de auto',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 11,
    name: 'Age',
    variableExplanation: 'Leeftijd van de bestuurder',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 12,
    name: 'VehicleAge',
    variableExplanation: 'Leeftijd van de auto',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 13,
    name: 'Brandstof',
    variableExplanation: 'Type brandstof van de auto',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 14,
    name: 'PostalCode',
    variableExplanation: 'Postcode van de klant',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 15,
    name: 'NoClaimYears',
    variableExplanation: 'Aantal no claim jaren van de klant',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 16,
    name: 'Power',
    variableExplanation: 'Nummer om de kracht van de auto te bepalen ',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 17,
    name: 'VehicleBody',
    variableExplanation: 'Type Carrosserie ',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 18,
    name: 'EconomyLabel',
    variableExplanation: 'Energie Label van de auto',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 19,
    name: 'DeductibleAmount',
    variableExplanation: 'Aftrekbaar bedrag',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 20,
    name: 'PaymentFrequency',
    variableExplanation: 'Betaal frequentie van de klant',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 21,
    name: 'Random',
    variableExplanation: 'Willekeurig nummer voor de voorspelling',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 22,
    name: 'Kenteken',
    variableExplanation: ' Kenteken van de auto',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 23,
    name: 'DiscountCode',
    variableExplanation: 'Kortingscode gebruikt',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 24,
    name: 'PremiumCompetitor',
    variableExplanation: 'Premie concurrentie',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 25,
    name: 'Province',
    variableExplanation: 'Provincie',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 26,
    name: 'PercLowIncome',
    variableExplanation: 'Percentage kans dat klant laag inkomen is',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 27,
    name: 'PercOnePersHH',
    variableExplanation: 'Percentage kans dat de klant een 1-persoons huishouden is',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 28,
    name: 'PercBenefits',
    variableExplanation: 'Percentage kans dat de klant een uitkering heeft',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 29,
    name: 'Urbanity',
    variableExplanation: 'Stedelijkheid',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 30,
    name: 'WOZvalue',
    variableExplanation: 'WOZ waarde van de klant',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 31,
    name: 'PercHomeOwner',
    variableExplanation: 'Percentage kans dat de klant een koophuis',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  },
  {
    id: 33,
    name: 'dateRenewal',
    variableExplanation: 'Datum vernieuw polis',
    technicalExplanation: 'TBD',
    ethicalExplanation: 'TBD'
  }
])

const variableList: variableInfo[] = []
dataVariables.value.forEach((variable) =>
  variableList.push(
    new variableInfo(
      variable.id,
      variable.name,
      variable.variableExplanation,
      variable.technicalExplanation,
      variable.ethicalExplanation
    )
  )
)

export const useVariableStore = defineStore('variables', {
  state: () => ({
    activeVariable: variableList[0],
    variables: variableList
  }),

  getters: {
    amountOfVariables: (state) => state.variables.length
  },

  actions: {
    setActiveVariableBasedOnName(_variableToFind: string): void {
      this.$state.activeVariable = this.$state.variables.filter(
        (variable) => variable.name === _variableToFind
      )[0]
    },

    setActiveVariable(variable: variableInfo): void {
      this.$state.activeVariable = variable
    }
  }
})
