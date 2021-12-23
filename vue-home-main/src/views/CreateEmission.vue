<template>
    <div class="container">
            <form class="form" @submit="submit()">
  
  <div class="row" >
    <div class="col-lg-4">
      <input type="number" class="form-control" placeholder="ID">
    </div>
    <div class="col-lg-4">
      <input type="number" class="form-control" placeholder="Shipment ID">
    </div>
    <div class="col-lg-4">
      <input type="number" class="form-control" placeholder="Weight (KG)">
    </div>
    <div class="col-lg-4" style="margin-top:5px">
      <input type="number" class="form-control" placeholder="Distance (KM)">
    </div>
    <div class="col-lg-4" style="margin-top:5px">
      <input type="date" class="form-control" placeholder="Pickup Time">
    </div>
    <div class="col-lg-4" style="margin-top: 5px">
      <input type="date" class="form-control" placeholder="Dropoff Time">
    </div>
  </div>
  <div class="row">
      <div class="col-lg-9"></div>
      <div class="col-lg-3 text-right" style="margin-top:10px">
          <button class="btn btn-primary">Save</button>
          <button class="btn btn-danger" style="margin-left:5px">Cancel</button>
      </div>
    
  </div>
</form>
</div>
    
</template>