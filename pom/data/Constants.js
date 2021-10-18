import dotenv from 'dotenv'
dotenv.config()


export const URLS ={
    LOGINURL: 'https://todoist.com/users/showlogin'
}
export const CREDENTIALS = {
    USER: {
        EMAIL: process.env.EMAIL,
        PASSWORD: process.env.PASSWORD
    }
}
