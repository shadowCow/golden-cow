import { Validation } from '../state_validations/Validations'
import { UserAction } from '../user_actions/UserActions'

export type UseCase = {
    description: string
    Given(): void
    When: UserAction
    Then: Array<Validation>
}

export function createUseCase(
    description: UseCase['description'],
    Given: UseCase['Given'],
    When: UseCase['When'],
    Then: UseCase['Then']
): UseCase {
    return {
        description,
        Given,
        When,
        Then,
    }
}
