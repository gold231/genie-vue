<template>
    <div class="consutler">
        <header class="py-3">
            <div class="col-md-6 float-left px-0">
                <h5 class="float-left my-2 font-weight-bold ml-3 contitle">Consutler vos factures</h5>
                <b-form-select class="float-left ml-3 coninput" v-model="selected" :options="options"></b-form-select>
            </div>
            <div class="col-md-6 float-left">
                <ul class="float-right my-2">
                    <li class="float-left ml-2 font-weight-bold">Envoyer par courriel</li>
                    <li class="float-left ml-2 font-weight-bold">Télécharger</li>
                    <li class="float-left ml-2 font-weight-bold">Imprimer</li>
                </ul>
            </div>
        </header>
        <body class="mt-5">
            <b-container>
                <b-row>
                    <div class="col-md-6">
                        <div>
                            <h4 class="font-weight-bold">Génie-inc</h4>
                            <p class="mb-1">1470, rue Peel Suite 316</p>
                            <p class="mb-1">Montreal</p>
                            <p class="mb-1">QC H3A 1T1</p>
                        </div>
                        <div class="mt-5">
                           <h4 class="font-weight-bold">Facture à l’intention de</h4>
                           <b-row class="mt-4">
                                <b-col cols="3">
                                    <p class="font-weight-bold">Nom</p>
                                    <p class="font-weight-bold col3">Adresse</p>
                                    <p class="font-weight-bold">Téléphone</p>
                                    <p class="font-weight-bold">Courriel</p>
                                </b-col>
                                <b-col cols="9">
                                    <p class="">Jean Laliberté</p>
                                    <p class="">2134 rue Barbeau, H1W 2L4 Montréal, QC</p>
                                    <p class="">514 302 5442</p>
                                    <p class="">Jean.laliberte@desjardins.com</p>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="overflow-auto">
                            <img class="float-right mr-5" src="../assets/logo.png" width="200" />
                        </div>
                        <div class="overflow-auto">
                            <b-row class="mt-3 mx-0">
                                <div class="col-sm-5 float-left">
                                </div>
                                <div class="col-sm-7">
                                    <b-row class="mx-0">
                                        <b-col cols="6" class="px-0">
                                            <p class="font-weight-bold mb-1"># de facture </p>
                                            <p class="font-weight-bold mb-1">Date</p>
                                        </b-col>
                                        <b-col cols="6" class="px-0">
                                            <p class="mb-1"># 43209484 </p>
                                            <p class="mb-1">09-10-2020</p>
                                        </b-col>
                                    </b-row>
                                </div>
                            </b-row>
                        </div>
                        <div class="overflow-auto mt-5 montant">
                            <b-row class="mx-0">
                                <b-col cols="8" class="font-weight-bold float-left text-center py-3 px-0">
                                    Montant payable
                                </b-col>
                                <b-col cols="4" class="font-weight-bold float-left text-center py-3 px-0">
                                    286,29$
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </b-row>
                <div class="mt-3 px-3 contable">
                    <b-row class="bg-secondary text-white text-center font-weight-bold py-3">
                        <b-col cols="2" class="px-0">Article</b-col>
                        <b-col cols="4" class="px-0">Description</b-col>
                        <b-col cols="2" class="px-0">Prix Unitaire</b-col>
                        <b-col cols="2" class="px-0">Quantité</b-col>
                        <b-col cols="2" class="px-0">Montant</b-col>
                    </b-row>
                    <b-row class="text-center py-3">
                        <b-col cols="2" class="px-0">1 offre d'emploi</b-col>
                        <b-col cols="4" class="px-0">Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)</b-col>
                        <b-col cols="2" class="px-0">249,00$</b-col>
                        <b-col cols="2" class="px-0">1</b-col>
                        <b-col cols="2" class="px-0">249,00$</b-col>
                    </b-row>
                </div>
                <hr>
                <div class="did"></div>
                <div class="mt-5">
                    <b-row>
                        <div class="col-md-6">
                            &nbsp;
                        </div>
                        <div class="col-md-6">
                            <p class="text-left float-left font-weight-bold pl-5">Sous total</p>
                            <p class="text-right font-weight-bold pr-3">249,00$</p>
                            <p class="text-left float-left mb-1 pl-5">TPS</p>
                            <p class="text-right mb-1 pr-3">12,45$</p>
                            <p class="text-left float-left pl-5">TVQ</p>
                            <p class="text-right pr-3">24,84$</p>
                            <hr>
                            <p class="text-left float-left font-weight-bold pl-5">Total</p>
                            <p class="text-right font-weight-bold pr-3">286,29$</p>
                            <div class="montant">
                                <p class="text-left float-left font-weight-bold pl-5 p-3">Montant payable</p>
                                <p class="text-right font-weight-bold p-3">286,29$</p>
                            </div>
                        </div>
                    </b-row>
                    <b-row>
                        <div class="col-md-6">
                            <p class="text-left font-weight-bold pl-3 mb-1">Condition</p>
                            <p class="text-left pl-3 ">Payable sur réception</p>
                            <p class="text-left pl-3 mb-1">TPS : 815 432 0001</p>
                            <p class="text-left pl-3 mb-1">TVQ : 815 432 0001</p>
                        </div>
                    </b-row>
                </div>
            </b-container>
        </body>
    </div>
</template>

<script>
export default {
  name: "Consutler",
  data() {
    return {
        selected: null,
        options: [
            { value: null, text: 'Facture #4324' },
        ],
        fields: [
            'Article', 'Description', 'Prix unitaire', 'Quantité', 'Montant'
        ],
        items: [
            { Article: "1 offre d'emploi", Description: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)', 'Prix unitaire': '249,00$', Quantité: '1', Montant: '249,00$'},
        ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
header {
    background-color: #EFF1FC;
    height: 70px;
    ul > li {
        width: auto;
        list-style-type: none;
    }
    .coninput {
        width: 40%;
    }    
    @media screen and (max-width: 840px) {
        height: 110px;
    }
    @media screen and (max-width: 420px) {
        height: 150px;
        ul > li {
            font-size: 14px;
        } 
    }
}
body {
    p {
        font-size: 16px;
    }
    .col3 {
        @media screen and (min-width: 768px) and (max-width: 991px) {
            height: 48px;
        }
        @media screen and (max-width: 432px) {
            height: 48px;
        }
    }
    .montant {
        background-color: #F4F4F4;
    }
    .did {
        height: 20px;
        background-color: #F4F4F4;
    }
    .contable {
        @media screen and (max-width: 520px) {
            font-size: 14px;
        }
        @media screen and (max-width: 400px) {
            font-size: 10px;
        }
    }
}
</style>