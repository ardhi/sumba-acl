import loadModels from '../lib/load-models.js'

async function init () {
  await loadModels.call(this)
}

export default init
