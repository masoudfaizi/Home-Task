<template>
  <div class="events">
    <h4>Select Drop Off Time:</h4>
    <Datepicker v-model="date" @closed="fetchDropOff()"/>
    <Emission  :event="events" />
  </div>
</template>

<script>
// @ is an alias to /src
import Emission from "@/components/Emission.vue";
import EmissionService from "@/services/EmissionService.js";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";



export default {
  name: "Home",
  components: {
    Emission,
    Datepicker,
  },
  data() {
    return {
      events: null,
      date: null
    };
  },
  created() {
    EmissionService.getEmissions().get("/analytics")
      .then(response => {
        console.log('response is: ', response.data);
        this.events = response.data;
      })

  },
  methods : {
    fetchDropOff() {
      var month, day, hours, minutes, final_datetime;
      var date = new Date(this.date);
      month = ("0" + (date.getMonth() + 1)).slice(-2);
      day = ("0" + date.getDate()).slice(-2);
      hours = ("0" + date.getHours()).slice(-2);
      minutes = ("0" + date.getMinutes()).slice(-2);
      // seconds = ("0" + date.getSeconds()).slice(-2);
      final_datetime = [date.getFullYear(), month, day].join("-") +" "+ [hours, minutes].join(":");
      EmissionService.getEmissions().get('/analytics/'+final_datetime)
        .then(response => {
          console.log('this response is ', response.data);
          this.events = response.data;
        })
      console.log('events are : ', this.date);
      console.log('events2 are||||||||| : ', final_datetime);
  }
  }
  
};
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
