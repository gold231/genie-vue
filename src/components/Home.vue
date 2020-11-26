<template>
  <b-container>
    <div class="home">
      <div class="mb-5">
        <p class="text-left"><span style="color:red">Accueil > Portefeuille ></span> Mode de paiement</p>
        <h2 class="text-left font-weight-bold dark">Portefeuille</h2>
        <hr>
      </div>
      <div class="overflow-auto mb-5">
        <b-link href="/"><h4 class="text-left font-weight-bold float-left ml-3 mode">Mode de paiement</h4></b-link>
        <b-link href="#/historique"><h4 class="text-left font-weight-bold float-left ml-3 dark">Historique des factures</h4></b-link>
        <b-button class="button-ajouter float-right" v-on:click="openAjouter">Ajouter une carte</b-button>
      </div>
      <div class="ml-3">
        <div class="overflow-auto">
          <div class="col-md-6 float-left text-left">
            <p class="feature">10 factures passées dans</p>
            <b-form-select class="w-50" v-model="selected" :options="dropText"></b-form-select>
          </div>
          <div class="col-md-6 float-left mt-3 pr-0">
            <p class="feature">&nbsp;</p>
            <b-input-group
              id="fieldset-1"
              label-for="input-1"
              class="float-left w-75"
            >
              <b-input-group-prepend is-text>
                <b-icon icon="search"></b-icon>
              </b-input-group-prepend>
              <b-form-input id="input-1" :placeholder="'Chercher dans vos commandes'" trim></b-form-input>
            </b-input-group> 
            <b-button class="button-1 aller float-right mr-0">Aller</b-button>
          </div>
        </div>        
      </div>  
    </div>
    <div class="tablehome">
      <div class="mt-5 bg-dark text-white py-3">
        <b-row class="mx-0">
          <b-col cols="2" class="px-0"># de facture
            <b-icon icon="chevron-expand" class="ml-1" v-on:click="sortArray('key1')"/>
          </b-col>
          <b-col cols="2" class="px-0">Entreprise
            <b-icon icon="chevron-expand" class="ml-1" v-on:click="sortArray('key2')"/>
          </b-col>
          <b-col cols="3" class="px-0">Mode de paiement              
            <b-icon icon="chevron-expand" class="ml-1" v-on:click="sortArray('key3')"/>
          </b-col>
          <b-col cols="3" class="px-0">03-04-2022
            <b-icon icon="chevron-expand" class="ml-1" v-on:click="sortArray('key4')"/>
          </b-col>
          <b-col cols="2" class="px-0">2 345$
            <b-icon icon="chevron-expand" class="ml-1" v-on:click="sortArray('key5')"/>
            <b-icon icon="chevron-down"></b-icon>
          </b-col>
        </b-row>
      </div>
      <div v-for="(item, key) in array" :key="key" :value="item" class="my-3 overflow-auto dark collape">
        <b-row class="mx-0 py-3">
          <b-col cols="2" class="px-0">{{ item.key1 }}</b-col>
          <b-col cols="2" class="px-0">{{ item.key2 }}</b-col>
          <b-col cols="3" class="px-0">{{ item.key3 }}</b-col>
          <b-col cols="3" class="px-0">{{ item.key4 }}</b-col>
          <b-col cols="2" class="px-0">{{ item.key5 }}
            <b-icon icon="chevron-down" block @click="opencollape(item.key1.substr(1, item.key1.length))" variant="info"></b-icon>
          </b-col>
        </b-row>
        <b-collapse :id="item.key1.substr(1, item.key1.length)" role="tabpanel" class="text-left ml-5 mt-3">
          <b-container>
            <p class="font-weight-bold mb-1 pbody">Liste des produits</p>
            <b-row class="mt-4">
              <b-col cols="3">{{ item.key11 }}</b-col>
              <b-col cols="4">{{ item.key12 }}</b-col>
              <b-col cols="3">{{ item.key13 }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
            <hr class="mr-5">
            <b-row class="">
              <b-col cols="3">{{ item.key21 }}</b-col>
              <b-col cols="4">{{ item.key22 }}</b-col>
              <b-col cols="3">{{ item.key23 }}</b-col>
              <b-col cols="2"></b-col>
            </b-row>
          </b-container>
          <div class="float-right m-3 mr-5">
            <b-button class="button-1 mr-3 mt-1 px-4">Archiver</b-button>
            <b-button class="button-ajouter mr-3 mt-1 px-4">Visualiser la facture</b-button>
          </div>
        </b-collapse>
      </div>
    </div>    
  </b-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      selected: null,
      collapse1: "",
      dropText: [
        { value: null, text: 'Les 30 derniers jours' },     
        { value: 'a', text: '3 derniers mois' },
        { value: 'b', text: 'En 2020' },
        { value: 'c', text: 'En 2019' },
        { value: 'd', text: 'En 2018' },
        { value: 'e', text: 'En 2017' },
        { value: 'f', text: 'En 2016' },
        { value: 'g', text: 'En 2015' },        
        { value: 'h', text: 'Commande archivées' },
      ],
      array: [
        { 
          key1: '#4521', key2: 'Desjardins', key3: 'Visa **** 431', key4: '03-04-2022', key5: '2 345$',
          key11: "1 offre d'emploi",
          key12: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key13: '249,00$',
          key21: "1 offre d'emploi",
          key22: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key23: '249,00$',
        },
        { 
          key1: '#4531', key2: 'Desjardins', key3: 'Visa **** 431', key4: '03-04-2022', key5: '2 345$',
          key11: "1 offre d'emploi",
          key12: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key13: '249,00$',
          key21: "1 offre d'emploi",
          key22: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key23: '249,00$',
        },
        { 
          key1: '#4511', key2: 'Desjardins', key3: 'Visa **** 431', key4: '03-04-2022', key5: '2 345$',
          key11: "1 offre d'emploi",
          key12: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key13: '249,00$',
          key21: "1 offre d'emploi",
          key22: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key23: '249,00$',
          },
        { 
          key1: '#4561', key2: 'Desjardins', key3: 'Visa **** 431', key4: '03-04-2022', key5: '2 345$', 
          key11: "1 offre d'emploi",
          key12: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key13: '249,00$',
          key21: "1 offre d'emploi",
          key22: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key23: '249,00$',
        },
        { 
          key1: '#4541', key2: 'Desjardins', key3: 'Visa **** 431', key4: '03-04-2022', key5: '2 345$',
          key11: "1 offre d'emploi",
          key12: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key13: '249,00$',
          key21: "1 offre d'emploi",
          key22: 'Forfait 1 annonce d’une offre d’emploi (Ingénieur industriel)',
          key23: '249,00$', 
        },
      ],
    };
  },
  components: {},
  mounted() {},
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
    compareKey1(a, b) {
      if (a.key1 > b.key1) {
        return -1;
      }
      if (a.key1 < b.key1) {
        return 1;
      }
      return 0;
    },
    compareKey2(a, b) {
      if (a.key2 > b.key2) {
        return -1;
      }
      if (a.key2 < b.key2) {
        return 1;
      }
      return 0;
    },
    compareKey3(a, b) {
      if (a.key3 > b.key3) {
        return -1;
      }
      if (a.key3 < b.key3) {
        return 1;
      }
      return 0;
    },
    compareKey4(a, b) {
      if (a.key4 > b.key4) {
        return -1;
      }
      if (a.key4 < b.key4) {
        return 1;
      }
      return 0;
    },
    compareKey5(a, b) {
      if (a.key5 > b.key5) {
        return -1;
      }
      if (a.key5 < b.key5) {
        return 1;
      }
      return 0;
    },
    sortArray(index) {
      switch(index) {
        case 'key1':
          this.array.sort(this.compareKey1);
          break;
        case 'key2':
          this.array.sort(this.compareKey2);
          break;
        case 'key3':
          this.array.sort(this.compareKey3);
          break;
        case 'key4':
          this.array.sort(this.compareKey4);
          break;
        case 'key5':
          this.array.sort(this.compareKey5);
          break;
        default:
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.feature {
  font: normal normal bold 15px/20px Open Sans;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.inputbox {
  width: 40%;
  margin-left: 25%;
}
.aller {
  width: 22%;
}
.pbody {
  font-size: 20px;
}
.tablehome {
  @media screen and (max-width: 768px) and (min-width: 472px) {
    font-size: 12px !important;
  }
  @media screen and (max-width: 472px) and (min-width: 352px) {
    font-size: 10px;
  }
  @media screen and (max-width: 352px) {
    font-size: 8px;
  }
}
</style>