export class LoginUserDto {
    constructor(
        public username: string,
        public password: string,
    ) { }

    static create(object: { [key: string]: any }): LoginUserDto {
        const { usuario, username, password } = object;
        const userValue = (usuario ?? username ?? '').toString();

        return new LoginUserDto(userValue.toLowerCase(), password);
    }
}