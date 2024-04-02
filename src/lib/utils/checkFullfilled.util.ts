export function checkFullfilled(promiseRes: PromiseSettledResult<any>){
    return promiseRes.status === "fulfilled" ? promiseRes.value : undefined
}