import { RankingJugador, ResultadoPartida, StatsDatasource, StatsRepository, StatsSummary } from '../../domain';

export class StatsRepositoryImpl implements StatsRepository {
    constructor(
        private readonly statsDatasource: StatsDatasource,
    ) { }

    getMyStats(userId: string): Promise<StatsSummary> {
        return this.statsDatasource.getMyStats(userId);
    }

    registerResult(userId: string, resultado: ResultadoPartida): Promise<StatsSummary> {
        return this.statsDatasource.registerResult(userId, resultado);
    }

    getGlobalStats(): Promise<RankingJugador[]> {
        return this.statsDatasource.getGlobalStats();
    }
}
