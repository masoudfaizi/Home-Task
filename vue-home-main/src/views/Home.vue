<template>
  <div class="events">
    <section>
      <h4>Pick a Range Date fom Dropoff Time:</h4>
      <date-picker
        v-model:value="date"
        type="date"
        range
        placeholder="Select date range"

        @close="fetchDropOff()"

      ></date-picker>
      <Emission  :event="events" />
    </section>
  </div>
</template>

<script>
import Emission from "@/components/Emission.vue";
import EmissionService from "@/services/EmissionService.js";
import DatePicker from "vue-datepicker-next";
import "vue-datepicker-next/index.css";


export default {
  name: "Home",
  components: { 
    DatePicker,
    Emission, 
  },
  data() {
    return {
      events: null,
      date: [new Date(2021, 5, 24), new Date(2021, 7, 28)],
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
      //Declaration of all variables
      var from_month , from_year, from_day , to_month, to_day, to_year, from_date, to_date, final_from_date, final_to_date;
      //Range date values
      from_date = new Date(this.date[0])
      to_date = new Date(this.date[1])
      //Destructing the day, month and year from date
      from_year = from_date.getFullYear();
      from_month = ("0" + (from_date.getMonth() + 1)).slice(-2);
      from_day = ("0" + from_date.getDate()).slice(-2);
      to_year = to_date.getFullYear();
      to_month = ("0" + (to_date.getMonth() + 1)).slice(-2);
      to_day = ("0" + to_date.getDate()).slice(-2);

      //Finalizing the date range dates with string format
      final_from_date = [from_year, from_month, from_day].join("-");
      final_to_date = [to_year, to_month, to_day].join("-");

      EmissionService.getEmissions().post("/analytic", {final_from_date, final_to_date})
      .then(response => {
        response.data.forEach(shipments => console.log("Results are: ",shipments));
        this.events = response.data;
        });
    }
  }
};
</script>
