import { seeChart } from '../state_validations/Validations'
import { doNothing } from '../user_actions/UserActions'
import { UseCase } from './UseCase'

export function createUseCases(): Array<UseCase> {
    return [
        {
            description: 'Open the app',
            Given() {},
            When: doNothing(),
            Then: [seeChart()],
        },
    ]
}
