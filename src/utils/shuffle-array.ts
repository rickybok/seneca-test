export function shuffleArray<T>(input: T[]): T[] {
    return input
     .map((value) => ({ value, sort: Math.random() }))
     .sort((a, b) => a.sort - b.sort)
     .map(({ value }) => value);
}
