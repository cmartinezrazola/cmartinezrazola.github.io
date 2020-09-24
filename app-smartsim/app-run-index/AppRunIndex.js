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
        <div class="container-fluid">
            <app-run-banner v-bind:resource-object="resourceObject"></app-run-banner>
        </div>
        <app-presentation v-bind:resource-identifier-array="resourceObject.relationships.presentation.data" class="collapse" v-bind:id="'presentation_run_' + resourceObject.id"></app-presentation>
    </div>
</div>
`
}
