import { RankingJugador, ResultadoPartida, StatsSummary } from '..';

export abstract class StatsRepository {
    abstract getMyStats(userId: string): Promise<StatsSummary>;
    abstract registerResult(userId: string, resultado: ResultadoPartida): Promise<StatsSummary>;
    abstract getGlobalStats(): Promise<RankingJugador[]>;
}
