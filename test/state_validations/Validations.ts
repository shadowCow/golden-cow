export type Validation = SeeChart

export type SeeChart = {
    kind: 'SeeChart'
}
export function seeChart(): SeeChart {
    return {
        kind: 'SeeChart',
    }
}

export type Validator = {
    execute(validation: Validation): void
}
