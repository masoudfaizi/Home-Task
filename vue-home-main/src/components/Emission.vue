<template>
 <div class="event-card">
    <div class="row">
      <div class="col-lg-11"></div>
      <div class="col-lg-1">
        <router-link to="/create-emission" class="btn btn-primary">New</router-link>
      </div>
    </div>
    <div class="row">
    <div class="col-lg-12">
      <table class="table table-stripped">
        <thead class="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Shipment ID</th>
            <th scope="col">Weight (KG)</th>
            <th scope="col">Distance (KM)</th>
            <th scope="col">Pickup Time</th>
            <th scope="col">Dropoff Time</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(elem, index) in event" :key="index">
            <th scope="row">{{elem.id}}</th>
            <td>{{elem.shipment_id}}</td>
            <td>{{elem.weight_kg}}</td>
            <td>{{elem.distance_km}}</td>
            <td>{{elem.pickup_time}}</td>
            <td>{{elem.dropoff_time}}</td>
          </tr>
        </tbody>
      </table>
     </div>
   </div>
  </div>
 </template>

<script>
export default {
  name: "Emission",
  props: {
    event: Object,
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .event-card {
    padding: 20px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 18px;
  }
</style>
