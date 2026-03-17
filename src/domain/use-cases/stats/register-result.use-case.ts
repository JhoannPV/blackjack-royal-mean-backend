import { ResultadoPartida, StatsRepository, StatsSummary } from '../..';

interface RegisterResultUseCase {
    execute(userId: string, resultado: ResultadoPartida): Promise<StatsSummary>;
}

export class RegisterResult implements RegisterResultUseCase {
    constructor(
        private readonly statsRepository: StatsRepository,
    ) { }

    execute(userId: string, resultado: ResultadoPartida): Promise<StatsSummary> {
        return this.statsRepository.registerResult(userId, resultado);
    }
}
