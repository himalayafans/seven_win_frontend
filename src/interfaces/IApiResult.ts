export default interface IApiResult<T> {
    success: boolean
    message: string
    data: T
}