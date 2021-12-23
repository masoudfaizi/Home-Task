<template>
 <div class="event-card">
      <div class="row">
       <div class="col-lg-11"></div>
       <div class="col-lg-1">
        <router-link to="/create-emission" class="btn btn-primary">New</router-link>
       </div>
      
     </div>
  
   <!-- <div>
     <form action="" class="form">

       <label for="Id">ID</label>
       <input type="number" name="Id" id="Id">

       <label for="shipment_id">Shimpment ID</label>
       <input type="number" name="shipment_id" id="shipment_id">

       <label for="weight">Weight (KG)</label>
       <input type="number" name="weight" id="weight">

       <label for="distance">Distance (KM)</label>
       <input type="number" name="distance" id="distance">

       <label for="pickup_time">Pickup Time</label>
       <input type="datetime" name="pickup_time" id="pickup_time">

       <label for="dropoff_time">Dropoff Time</label>
       <input type="datetime" name="dropoff_time" id="dropoff_time">
     </form>
   </div> -->
   <!-- <span>@ {{event.time}} on {{event.date }}</span>
   <h4>{{event.title}}</h4> -->

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
    /* border: 1px solid #39495c; */
    margin-bottom: 18px;
  }

  /* .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  } */




</style>
