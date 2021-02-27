import { Notifier } from './Notifier.js'

const App = {
  async start() {
    try {
      await Notifier.init()

      Notifier.notify({
        title: 'Lembrete Instagram',
        body: 'Corpo da mensagem.',
      })
    } catch (error) {
      console.log(error.message)
    }
  },
}

export { App }
