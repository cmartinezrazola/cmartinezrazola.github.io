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
    <app-run-index v-bind:resource-object-array="res.data"></app-run-index>
</div>
`
};