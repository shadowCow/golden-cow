import {
    createFailResult,
    createPassResult,
    TestReporter,
} from './reporter/Reporter'
import { Validator } from './state_validations/Validations'
import { UseCase } from './use_cases/UseCase'
import { Actioner } from './user_actions/UserActions'

export type TestRunner = {
    run(useCases: Array<UseCase>): void
}

export function createTestRunner(
    reporter: TestReporter,
    userActionExecutor: Actioner,
    stateValidationExecutor: Validator
): TestRunner {
    return {
        run(useCases: Array<UseCase>) {
            useCases.forEach((useCase) => {
                try {
                    useCase.Given()

                    userActionExecutor.execute(useCase.When)

                    useCase.Then.forEach((validation) =>
                        stateValidationExecutor.execute(validation)
                    )

                    reporter.report(createPassResult(useCase.description))
                } catch (ex) {
                    reporter.report(createFailResult(useCase.description, ex))
                }
            })
        },
    }
}
