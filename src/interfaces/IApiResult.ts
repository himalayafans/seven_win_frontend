export default interface IApiResult<T> {
    Success: boolean
    Message: string
    Data: T
}