import { Collectors, CustomCollector } from './CustomCollectors';

export default abstract class CollectorFactory {
    public static getCollector(collectorName: Collectors, matchString?) {
        return new CustomCollector(collectorName, matchString);
    }
}