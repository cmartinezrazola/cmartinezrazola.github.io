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
            <button  type="button" class="btn btn-outline-primary btn-sm control-orange">
                Hide
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-bar-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z"/>
                </svg>
            </button>
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

