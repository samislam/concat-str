export const concat = (...args: (string | string[])[]): string => {
  const flattened = args.flatMap((arg) => (Array.isArray(arg) ? arg : [arg]))
  return flattened.join(' ')
}
