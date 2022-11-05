export type UserAction = DoNothing

export type DoNothing = {
    kind: 'DoNothing'
}
export function doNothing(): DoNothing {
    return {
        kind: 'DoNothing',
    }
}

export type Actioner = {
    execute(action: UserAction): void
}
