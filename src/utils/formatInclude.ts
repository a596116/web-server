export const formatInclude = (arr: any, val: string) => {
    return arr.map((item) => item[val])
}