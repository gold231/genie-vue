<template>
    <b-container>
        <div class="home">
            <div class="mb-5">
                <p class="text-left"><span style="color:red">Accueil > Portefeuille ></span> Historique des factures</p>
                <h2 class="text-left font-weight-bold dark">Portefeuille</h2>
                <hr>
            </div>
            <div class="overflow-auto mb-5">
                <b-link href="/"><h4 class="text-left font-weight-bold float-left ml-3 dark">Mode de paiement</h4></b-link>
                <b-link href="#/historique"><h4 class="text-left font-weight-bold float-left ml-3 mode">Historique des factures</h4></b-link>
                <b-button class="button-ajouter float-right" v-on:click="openAjouter">Ajouter une carte</b-button>
            </div>
        </div>
        <div class="hbody mt-4">
            <div class="overflow-auto dark">
                <h4 class="text-left float-left font-weight-bold mt-3">Carte par défaut</h4>
                <p class="text-left float-right font-weight-bold m-3">Date d’expiration</p>
            </div>
            <div class="collape dark overflow-auto my-3">
                <b-row class="py-3 mx-0">
                    <b-col cols="3" class="px-0">Visa Modulo</b-col>
                    <b-col cols="3" class="px-0">Finissant par 0311</b-col>
                    <b-col cols="3" class="px-0">Modifier</b-col>
                    <b-col cols="3" class="px-0">03-04-2022
                        <b-icon icon="chevron-down" block v-b-toggle.content-1 variant="info"></b-icon>
                    </b-col>
                </b-row>
                <b-collapse id="content-1" role="tabpanel" class="text-left ml-5 mt-3">
                    <p class="font-weight-bold mb-1">Nom du titulaire de la carte</p>
                    <p class="">Rodrigo Lopez</p>
                    <p class="font-weight-bold mb-1">Code postal</p>
                    <p class="">H3V 2J2</p>
                    <div class="float-right mb-3 mr-5">
                        <b-button class="button-1 mr-3 mt-1 px-4">Effacer</b-button>
                        <b-button class="button-ajouter mr-3 mt-1 px-4">Modifier</b-button>
                    </div>
                </b-collapse>
            </div>
            <div class="overflow-auto dark mt-5">
                <h4 class="text-left float-left font-weight-bold mt-3">Cartes reliés au compte</h4>
                <p class="text-left float-right font-weight-bold m-3">Date d’expiration</p>
            </div>
            <div v-for="(item, key) in hisArray" :key="key" :value="item" class="collape dark overflow-auto my-3">
                <b-row class="py-3 mx-0">
                    <b-col cols="3" class="px-0">{{ item.key1 }}</b-col>
                    <b-col cols="3" class="px-0">{{ item.key2 }}</b-col>
                    <b-col cols="3" class="px-0">{{ item.key3 }}</b-col>
                    <b-col cols="3" class="px-0">{{ item.key4 }}
                        <b-icon icon="chevron-down" block @click="opencollape(item.id)" variant="info"></b-icon>
                    </b-col>
                </b-row>
                <b-collapse :id="item.id" role="tabpanel" class="text-left ml-5 mt-3">
                    <p class="font-weight-bold mb-1">Nom du titulaire de la carte</p>
                    <p class="">{{ item.key5 }}</p>
                    <p class="font-weight-bold mb-1">Code postal</p>
                    <p class="">{{ item.key6 }}</p>
                    <div class="float-right mb-3 mr-5">
                        <b-button class="button-1 mr-3 mt-1 px-4">Effacer</b-button>
                        <b-button class="button-ajouter mr-3 mt-1 px-4">Modifier</b-button>
                    </div>
                </b-collapse>
            </div>            
        </div>
    </b-container>
</template>

<script>
export default {
    name: "Historique",
    data() {
        return {
            hisArray: [
                { id: '1', key1: 'Visa Modulo', key2: 'Finissant par 0311', key3: 'Modifier', key4: '03-04-2022', key5: 'Rodrigo Lopez', key6: "H3V 2J2" },
                { id: '2', key1: 'Visa Modulo', key2: 'Finissant par 0311', key3: 'Modifier', key4: '03-04-2022', key5: 'Rodrigo Lopez', key6: "H3V 2J2" },
                { id: '3', key1: 'Visa Modulo', key2: 'Finissant par 0311', key3: 'Modifier', key4: '03-04-2022', key5: 'Rodrigo Lopez', key6: "H3V 2J2" },
                { id: '4', key1: 'Visa Modulo', key2: 'Finissant par 0311', key3: 'Modifier', key4: '03-04-2022', key5: 'Rodrigo Lopez', key6: "H3V 2J2" },
            ]
        }
    },
    methods: {
        opencollape(key) {
            if (document.getElementById(key).style.display == "block") {
                document.getElementById(key).style.display = "none";
            } else {
                document.getElementById(key).style.display = "block";
            }
        },
        openAjouter() {
            this.$router.push("/ajouter");
        },
    }    
}
</script>

<style lang="scss" scoped>
.hbody {
    background-color: #ffffff;
    .collape {
        @media screen and (max-width: 440px) {
            font-size: 12px !important;
        }
    }
}
</style>