interface IUser {
    _id: string
    firstName: string
    lastName: string
    avatar: string
    email: string
    password: string
    websites: string[]
    refreshToken?: string
}

interface IPayload {
    _id: string
}