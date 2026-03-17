export class RegisterUserDto {
    private constructor(
        public name: string,
        public username: string,
        public password: string,
    ) { }

    static create(object: { [key: string]: any }): RegisterUserDto {
        const { name, usuario, username, password } = object;
        const userValue = (usuario ?? username ?? '').toString();

        return new RegisterUserDto(name, userValue.toLowerCase(), password);
    }
}