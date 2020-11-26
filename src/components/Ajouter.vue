<template>
    <div class="ajouter">
        <b-container class="dark">
            <div>
                <h4 class="text-left font-weight-bold">Ajouter une carte de crédit ou de débit</h4>
                <p class="text-left font-weight-bold my-4">Numéro de la carte</p>
                <div class="px-5 py-3 text-left my-4 collape">Numéro de la carte</div>
                <p class="text-left font-weight-bold my-4">Numéro de la carte</p>
                <div class="px-5 py-3 text-left my-4 collape">Numéro de la carte</div>
            </div>
            <b-row class="">
                <div class="col-md-6 float-left">
                    <p class="text-left font-weight-bold">Date d’expiration</p>
                    <div class="text-left">
                        <b-form-select class="w-25" v-model="selected" :options="items1"></b-form-select>
                        <b-form-select class="w-25 ml-5" v-model="selected" :options="items2"></b-form-select>
                    </div>
                </div>
                <div class="col-md-6">
                    <p class="text-left font-weight-bold">Code de sécurité</p>
                    <b-input-group
                        id="fieldset-1"
                        label-for="input-1"
                        class="float-left w-25"
                    >
                        <b-form-input id="input-1" class="text-center" :placeholder="'123'" trim></b-form-input>
                    </b-input-group>
                </div>
            </b-row>
            <div class="my-3">
                <p class="text-left font-weight-bold">Code postal</p>
                <b-input-group
                    id="fieldset-1"
                    label-for="input-1"
                    class="w-25"
                >
                    <b-form-input id="input-1" class="text-center" :placeholder="'H3K 8L2'" trim></b-form-input>
                </b-input-group>
            </div>            
            <div class="float-right mb-3 mr-5">
                <b-button class="button-1 mr-3 mt-1 px-4">Annuler</b-button>
                <b-button class="button-ajouter mr-3 mt-1 px-4">Ajouter une carte</b-button>
            </div>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "Ajouter",
  data() {
    return {
      selected: null,
      items1: [
        { text: 1 },     
        { text: 2 },
        { text: 3 },
        { text: 4 },
        { text: 5 },
        { text: 6 },
        { text: 7 },
        { text: 8 },        
        { text: 9 },        
        { text: 10 },        
        { text: 11 },        
        { text: 12 },
      ],
      items2: [
        { text: 2022 },     
        { text: 2023 },
        { text: 2024 },
        { text: 2025 },
        { text: 2026 },
        { text: 2027 },
        { text: 2028 },
        { text: 2029 },        
        { text: 2030 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>