<template>
  <div>
    <NavBar />
    <div class="small">
      <Dialog
        v-if="ifVisible"
        @closeDialog="closeDialog"
        @updateData="updateData"
        v-bind:Aprop="A"
        v-bind:Bprop="B"
        v-bind:Cprop="C"
      />
      <div class="container">
        <div class="col-md-3">
          <button class="btn btn-primary" @click="showDialog">
            {{"ChoseParameters" | localize}}
          </button>
        </div>
        <LineChart
          class="col-md-6 graph"
          :chart-data="datacollection"
          :options="options"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Подключение компонента для отображения диаграммы
import LineChart from "../components/LineChart.js";
import Dialog from "../components/Dialog.vue";
import NavBar from "../components/Navigation.vue";

const DATA_COUNT = 30;
var labels = [];
for (let i = -DATA_COUNT / 2; i <= DATA_COUNT / 2 + 1; ++i) {
  labels.push(i.toString());
}

export default {
  // Описание используемых в шаблоне компонентов
  components: {
    LineChart,
    Dialog,
    NavBar,
  },
  data() {
    return {
      // Данные для диаграммы
      A: 2,
      B: 2,
      C: 2,
      ifVisible: false,
      datacollection: null,
      // Настройка параметров диаграммы
      options: null,
    };
  },
  // Заполнение this.datacollection и this.options начальными статическими значениями
  created() {
    this.datacollection = {};
    this.options = {
      responsive: true,
      title: {
        display: false,
        text: "Line Chart",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: "X values",
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: " Y Value",
            },
          },
        ],
      },
    };
  },
  mounted() {
    // Заполнение данных с помощью функции fillData
    this.fillData();
  },
  methods: {
    showDialog() {
      this.ifVisible = true;
    },
    closeDialog() {
      this.ifVisible = false;
    },
    updateData(data) {
      this.A = data.aParam;
      this.B = data.bParam;
      this.C = data.cParam;
      this.fillData();
      this.ifVisible = false;
    },

    // Функция, которая производит заполнение данных случайным образом

    fillData() {
      this.datacollection = {
        labels: labels,
        datasets: [
          {
            label: "Ax^3 + Bx^2 - x + C",
            backgroundColor: "#d111a1",
            borderColor: "#d111a1",
            data: this.fillMassive(),
            fill: false,
          },
        ],
      };
    },
    randomScalingFactor(x) {
      return Math.floor(
        this.A * Math.pow(x, 3) + this.B * Math.pow(x, 2) - x + this.C
      );
    },
    fillMassive() {
      var data = [];
      for (let i = 0; i < DATA_COUNT + 1; ++i) {
        data.push(this.randomScalingFactor(labels[i]));
      }
      return data;
    },
  },
};
</script>
<style scoped>
.small {
  margin-top: 10px;
}
.container {
  display: flex;
}
.graph {
  height: 90vh;
  
  background-color: #f8f9fa;
}

</style>