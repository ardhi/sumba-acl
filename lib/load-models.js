import { newModelFromString } from 'casbin'
import path from 'path'

async function loadModels () {
  const { fs, eachPlugins, pascalCase } = this.app.bajo
  this.sumbaPerm.models = []
  await eachPlugins(async function ({ file, plugin }) {
    const content = fs.readFileSync(file, 'utf8')
    const name = pascalCase(path.basename(file, path.extname(file)))
    const model = newModelFromString(content)
    this.sumbaPerm.models.push({
      name,
      plugin,
      model
    })
  }, { glob: 'model/*.conf' })
}

export default loadModels
