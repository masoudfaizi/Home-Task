<template>
  <CreateEmission />
</template>

<script>
import EmissionService from "@/services/EmissionService.js";
export default {
  name: "CreateEmission",
  data: {
    id: null, 
    shipment_id: null, 
    weight_kg : null, 
    distance_km: null, 
    pickup_time: null, 
    dropoff_time: null,
  },

methods: {
  submit() {
    const data = FormData();
    data.append("id", this.id);
    data.append("shipment_id", this.shipment_id);
    data.append("weight_kg", this.weight_kg);
    data.append("distance_km", this.distance_km);
    data.append("pickup_time", this.pickup_time);
    data.append("dropoff_time", this.dropoff_time);

    EmissionService.getEmissions().post("/analytics", this.data)
    .then(response => {
      console.log('Data Inserted Successfully!');
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