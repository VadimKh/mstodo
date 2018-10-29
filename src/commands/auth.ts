import {Client} from '@microsoft/microsoft-graph-client'
import {Command, flags} from '@oclif/command'
import cli from 'cli-ux'
import * as Configstore from 'configstore'

const store = new Configstore('msstore')

export default class Auth extends Command {
  static description = `Authenticate MS-ToDo
  To get access token:
  1. Go to Graph Explorer (https://developer.microsoft.com/en-us/graph/graph-explorer).
  2. Login with the account you want to use to run the node samples.
  3. Open the F12 dev tools.
  4. Type tokenPlease() into the console to get an access token.`

  static flags = {
    help: flags.help({char: 'h'})
  }

  static args = [{name: 'token'}]

  async run() {
    const {args} = this.parse(Auth)

    const client = Client.init({
      defaultVersion: 'v1.0',
      authProvider: done => {
        done(null, args.token)
      }
    })
    cli.action.start('Give information abour you')
    try {
      const me = await client.api('/me').get()
      store.set('access_token', args.token)
      store.set('displayName', me.displayName)
      cli.action.stop()
      this.log(`Hello ${me.displayName}! Your token is saved. Now you can use this CLI.`)
    } catch {
      cli.action.stop('Fail')
      this.log('Looks like your token is invalid. Run `mstodo auth --help` for more information')
    }
  }
}
