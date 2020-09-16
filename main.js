// Settings
const runDir = './run/'
const mediaDir = 'doc/media/'

function getResourceObject(res, resourceIdentifier){
  return res.included.find(o => o.id === resourceIdentifier.id && o.type === resourceIdentifier.type);
}

// Enable tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



