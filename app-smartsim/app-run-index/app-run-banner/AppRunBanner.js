function arrayToPre(arrayText){
    var i=1;
    var preText = arrayText[0];
    for (i = 1; i < arrayText.length; i++) {
       preText = preText + '\n' + arrayText[i]; 
    };
    return preText;
  }

var AppRunBanner = {
  props: ['resourceObject',],
  data: function () {
      return {
          req: 'GET ./ HTTP/1.1', 
          res: httpResponse,
          arrayToPre: arrayToPre,
      }
  },
  template: 
`
<div class="container-fluid border border-primary rounded mb-3" id="app-run-banner">
    
        <div class="row">
            <div class="col-2">
                <button  type="button" 
                         class="btn btn-primary py-0 px-3 my-1"
                         data-toggle="collapse" 
                         v-bind:data-target="'#presentation_run_' + resourceObject.id" 
                         aria-expanded="false" 
                         v-bind:aria-controls="'presentation_run_' + resourceObject.id">
                    <h2 class="font-weight-bold">
                        {{resourceObject.attributes.name}}
                    </h2>
                </button>
            </div>
            <div class="col-2">
                <span  class="badge badge-base-composite">{{resourceObject.attributes.baseComposite}}</span>
                <span  class="badge badge-base-metal">{{resourceObject.attributes.baseMetal}}</span>
            </div>
            <div class="col-6">
                <span class="badge badge-carbon">{{resourceObject.attributes.user}}</span>
                <span class="badge badge-metal">{{resourceObject.attributes.date}}</span>
                <span class="badge badge-glass">{{resourceObject.attributes.sector}}</span>
                <span class="badge badge-secondary">{{resourceObject.attributes.vehicle}}</span>
                <span class="badge badge-secondary">{{resourceObject.attributes.gate}}</span>
                <span class="badge badge-secondary">{{resourceObject.attributes.task}}</span>
                <span class="badge badge-secondary">{{resourceObject.attributes.category}}</span>
            </div>
            <div class="col-2">
                <img src="./app-smartsim/img/logo.svg" alt="company logo">
            </div>
        </div>

        <div class="row">
            <div class="col-2 overflow-hidden">
                <span  class="badge badge-secondary text-pre text-monospace text-left">{{arrayToPre(resourceObject.attributes.description)}}</span>
            </div>
            <div class="col-3 overflow-hidden">
                <span class="badge badge-secondary float-left">{{resourceObject.attributes.loadcase}}</span><br>
                <span class="badge badge-light text-left text-pre text-monospace float-left">{{arrayToPre(resourceObject.attributes.configuration)}}</span>
            </div>
            <div class="col-5 overflow-hidden">
                <span class="badge badge-secondary float-left">{{resourceObject.attributes.replacedParts}}</span>
                <span class="badge badge-light float-left">replaced mass :</span>
                <span class="badge badge-light float-left">{{resourceObject.attributes.mass}} g</span>
                <span v-if="false" class="badge badge-success float-left">{{resourceObject.attributes.massRatio}}%</span>
                <span v-if="true" class="badge badge-danger float-left">{{resourceObject.attributes.massRatio}}%</span><br>
                <span class="badge badge-light text-pre text-monospace text-right float-left">{{arrayToPre(resourceObject.attributes.stacking)}}</span>
            </div>
            <div class="col-2 overflow-hidden">
                <span class="badge badge-success float-left">performance</span><br>
                <span class="badge badge-light text-pre text-monospace text-left">{{arrayToPre(resourceObject.attributes.performance)}}</span>
            </div>
        </div>
</div>
`
}

