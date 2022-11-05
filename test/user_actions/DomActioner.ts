import { Actioner } from './UserActions'

export function createDomActioner(): Actioner {
    return {
        execute(action) {
            switch (action.kind) {
                case 'DoNothing':
                    break
            }
        },
    }
}
