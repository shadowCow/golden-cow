import { createConsoleReporter } from './reporter/ConsoleReporter'
import { createDomValidator } from './state_validations/DomValidator'
import { createTestRunner } from './TestRunner'
import { createDomActioner } from './user_actions/DomActioner'
import { createUseCases } from './use_cases/UseCases'

const reporter = createConsoleReporter()
const actioner = createDomActioner()
const validator = createDomValidator()

const testRunner = createTestRunner(reporter, actioner, validator)

const useCases = createUseCases()

testRunner.run(useCases)
