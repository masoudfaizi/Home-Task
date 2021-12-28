<template>
  <div class="container">
    <form class="form">
      <div class="row" >
        <div class="col-lg-4">
          <input type="number" class="form-control" v-model="id" placeholder="ID">
        </div>
        <div class="col-lg-4">
          <input type="number" class="form-control" v-model="shipment_id" placeholder="Shipment ID">
        </div>
        <div class="col-lg-4">
          <input type="number" class="form-control" v-model="weight_kg" placeholder="Weight (KG)">
        </div>
        <div class="col-lg-4" style="margin-top:5px">
          <input type="number" class="form-control" v-model="distance_km" placeholder="Distance (KM)">
        </div>
        <div class="col-lg-4" style="margin-top:5px">
          <input type="date" class="form-control" v-model="pickup_time" placeholder="Pickup Time">
        </div>
        <div class="col-lg-4" style="margin-top: 5px">
          <input type="date" class="form-control" v-model="dropoff_time" placeholder="Dropoff Time">
        </div>
      </div>
      <div class="row">
          <div class="col-lg-9"></div>
          <div class="col-lg-3 text-right" style="margin-top:10px">
              <button class="btn btn-primary" @click="submit()">Save</button>
              <button class="btn btn-danger" style="margin-left:5px">Cancel</button>
          </div>
        
      </div>
    </form>
  </div> 
</template>

<script>
import EmissionService from "@/services/EmissionService.js";
import router from "../router/index.js";
export default {
  name: "CreateEmission",
  data() {
    return {
      
      id: "", 
      shipment_id: "", 
      weight_kg: "", 
      distance_km: "", 
      pickup_time: "", 
      dropoff_time: ""
      
    }
  },
  methods: {
    submit() {
    EmissionService.getEmissions().post("/new_shipment", 
      {
        id: this.id,
        shipment_id: this.shipment_id,
        weight_kg: this.weight_kg,
        distance_km: this.distance_km,
        pickup_time: this.pickup_time,
        dropoff_time: this.dropoff_time
      })
      .then(response => {
        console.log('Data Inserted Successfully!', response);
      });
    }, 
    cancel() {
      router.push('/');
    }
  }

};
</script>

<style scoped>

</style>