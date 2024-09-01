<script setup>
import '../assets/cssComponents/SideBar.css'
import '../assets/cssComponents/SideBarItem.css'
import { ref } from 'vue'

const dataVariables = ref([
  { id: 1, variableName: 'realtionNumber' },
  { id: 2, variableName: 'policyNumber' },
  { id: 3, variableName: 'objectNumber' },
  { id: 4, variableName: 'dateStart' },
  { id: 5, variableName: 'dateEnd' },
  { id: 6, variableName: 'datePolicyStart' },
  { id: 7, variableName: 'amtPremium_BC' },
  { id: 8, variableName: 'Merk' },
  { id: 9, variableName: 'Waarde' },
  { id: 10, variableName: 'Model' },
  { id: 11, variableName: 'Age' },
  { id: 12, variableName: 'VehicleAge' },
  { id: 13, variableName: 'Brandstof' },
  { id: 14, variableName: 'PostalCode' },
  { id: 15, variableName: 'NoClaimYears' },
  { id: 16, variableName: 'Power' },
  { id: 17, variableName: 'VehicleBody' },
  { id: 18, variableName: 'EconomyLabel' },
  { id: 19, variableName: 'DeductibleAmount' },
  { id: 20, variableName: 'PaymentFrequency' },
  { id: 21, variableName: 'Random' },
  { id: 22, variableName: 'Kenteken' },
  { id: 23, variableName: 'DiscountCode' },
  { id: 24, variableName: 'PremiumCompetitor' },
  { id: 25, variableName: 'Province' },
  { id: 26, variableName: 'PercLowIncome' },
  { id: 27, variableName: 'PercOnePersHH' },
  { id: 28, variableName: 'PercBenefits' },
  { id: 29, variableName: 'Urbanity' },
  { id: 30, variableName: 'WOZvalue' },
  { id: 31, variableName: 'PercHomeOwner' },
  { id: 32, variableName: 'policyNumber' },
  { id: 33, variableName: 'dateRenewal' }
])
</script>

<template>
  <div class="layout-sidebar">
    <h2>Variables</h2>
    <SideBarItem
      class="layout-sidebaritem"
      v-for="dataVariable in dataVariables"
      :key="dataVariable.id"
      :_variableName="dataVariable.variableName"
    ></SideBarItem>
  </div>
</template>

<style></style>
