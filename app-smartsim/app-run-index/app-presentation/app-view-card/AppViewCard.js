var AppViewCard = {
  props: ['resourceObject'],
  data: function () {
      return {
          req: 'GET ./ HTTP/1.1', 
          res: httpResponse,
      }
  },
  template: 
`
<div class="card container-fluid border-primary mb-3" id="app-view-card">
    <div class="card-header row">

        <div class="col-3">
            
        </div>

        <div class="col-6">
            <h1 class="text-center"><span class="badge badge-primary badge-glass">{{resourceObject.attributes.title}}</span></h1>
        </div>

        <div class="col-3">
        </div>

    </div>

    <video class="card-img-top embed-responsive-item"  muted autoplay loop>
        <source v-bind:src="resourceObject.attributes.media[0]">
        video is not supported or file not found
    </video>
</div>
`
}

