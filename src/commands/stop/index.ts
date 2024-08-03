// src/commands/start/index.ts
import { StartupServiceFactory } from '../../server/src/v1/startup/application/services/startupService.factory'

process.env.APP_CONTEXT = 'cli'

import { Command } from '@oclif/core'
import { exec as _exec } from 'node:child_process'
import util from 'node:util'
import os from 'node:os'
import find from 'find-process'
// eslint-disable-next-line import/no-unresolved
import { SERVER_CONSTANTS } from 'server'

const exec = util.promisify(_exec)

const IS_WINDOWS = os.platform() === 'win32'

export default class Stop extends Command {
  static description = 'Stops the codeclimbers server on your machine'

  static examples = [`<%= config.bin %> <%= command.id %>`]

  async run(): Promise<void> {
    const [instance] = await find('name', SERVER_CONSTANTS.PROCESS_NAME)

    if (!instance) {
      this.error(
        `Could not find a running instance of ${SERVER_CONSTANTS.PROCESS_NAME}`,
      )
    }

    const { stdout, stderr } = await exec(
      IS_WINDOWS
        ? `taskkill /F /PID ${instance.pid}`
        : `kill -9 ${instance.pid}`,
    )

    if (stderr) {
      this.error(stderr)
    }
    const startupService = StartupServiceFactory.buildStartupService()
    await startupService.closeAndDisableStartup()
    this.log(`Stopped ${SERVER_CONSTANTS.PROCESS_NAME} - ${stdout}`)
  }
}
