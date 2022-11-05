import { Validator } from './Validations'

export function createDomValidator(): Validator {
    return {
        execute(validation) {
            switch (validation.kind) {
                case 'SeeChart':
                    throw new Error('SeeChart not implemented')
            }
        },
    }
}
