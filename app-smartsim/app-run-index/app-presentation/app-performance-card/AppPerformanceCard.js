var AppPerformanceCard = {
  props: ['resourceObject'],
  data: function () {
      return {
          req: 'GET ./ HTTP/1.1', 
          res: httpResponse,
      }
  },
  template: 
`
<div class="card container-fluid border-primary mb-3" id="app-performance-card">
    <div class="card-header row">

        <div class="col-3">
            
        </div>

        <div class="col-6">
            <h1 class="text-center"><span class="badge badge-primary badge-glass">{{resourceObject.attributes.title}}</span></h1>
        </div>

        <div class="col-3">
        </div>

    </div>
    <img class="card-img-top" v-bind:src="resourceObject.attributes.media[0]" alt="performance card">
    <img class="card-img-top" v-bind:src="resourceObject.attributes.media[1]" alt="view">
</div>
`
}

