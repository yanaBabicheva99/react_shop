type Mods = Record<string, boolean | string | undefined>

export function classNames(className: string, mods: Mods = {}, additional: Array<string | undefined> = []) {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => cls),
    ].join(' ');
}
