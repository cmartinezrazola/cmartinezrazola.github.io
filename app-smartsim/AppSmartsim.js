var AppSmartsim = {
    components:{
        'app-run-index': AppRunIndex,
    },
    data: function () {
      return {
          req: 'GET ./ HTTP/1.1', 
          res: httpResponse,
      }
    },
    template:
`
<div class="container-fluid" id="app-smartsim">
    <div style="height: 100px;" class="container-fluid" id="header-smartsim">
        <div class="row">
            <div class="col-3"> 
                <img src="./app-smartsim/img/logo.svg" alt="company logo">
            </div>
            <div class="col-3"> 
                
            </div>
            <div class="col-3"> 
                <h1><span style="color:DarkOrange">Smart</span><span style="color:#00748d">Sim</span></h1>
            </div>
            <div class="col-3"> 
                
            </div>
        </div>
    </div>
    <app-run-index v-bind:resource-object-array="res.data"></app-run-index>
</div>
`
};