var AppRunIndex = {
    props: ['resourceObjectArray'],
    components: {
        'app-run-banner': AppRunBanner,
        'app-presentation': AppPresentation
    },
    data: function () {
        return {
            req: 'GET ./ HTTP/1.1', 
            res: httpResponse,
        }
    },
    template: 
`
<div class="container-fluid mb-3" id="app-run-index">
    <div v-for="resourceObject in resourceObjectArray">
        <button  type="button" class="container-fluid btn btn-outline-primary btn-lg btn-block mb-3">
            <app-run-banner v-bind:resource-object="resourceObject"></app-run-banner>
        </button>
        <app-presentation v-bind:resource-identifier-array="resourceObject.relationships.presentation.data"></app-presentation>
    </div>
</div>
`
}
