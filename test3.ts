interface IPayment {
    sum: number,
    from: number,
    to: number
}
enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}
interface IPaymentRequest extends IPayment{

}
// interface IDataSuccess {
//     databaseId: number,
//     sum: number,
//     from: number,
//     to: number
// }
// interface IDataFailed {
//     errorMessage: string,
//     errorCode: number,
// }
// interface IResponse {
//     status: PaymentStatus,
//     data: IDataSuccess | IDataFailed
// }
interface IDataSuccess {
    databaseId: number,
}
interface IDataFailed {
    errorMessage: string,
    errorCode: number,
}
interface IResponseSuccess {
    status: PaymentStatus.Success,
    // data: IDataSuccess
}
interface IResponseFailed {
    status: PaymentStatus.Failed,
    data: IDataFailed
}