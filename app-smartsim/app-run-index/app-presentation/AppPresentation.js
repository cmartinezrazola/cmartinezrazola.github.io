var AppPresentation = {
    props: ['resourceIdentifierArray',],
    components: {
        'app-view-card': AppViewCard,
    },
    data: function () {
        return {
            req: 'GET ./ HTTP/1.1', 
            res: httpResponse,
            getResourceObject: getResourceObject,
        }
    },
    template: 
`
<div class="container-fluid mb-3" id="app-presentation">
    <div v-for="resourceIdentifier in resourceIdentifierArray">
        <app-view-card v-if="resourceIdentifier.type=='viewCards'" v-bind:resource-object="getResourceObject(res, resourceIdentifier)"></app-view-card>
    </div>
</div>
`
}
