import { FeaturesFlags } from '@/shared/types/featuresFlags';
import { getFeatureFlag } from './featuresState';

interface ToggleFeaturesOptions<T> {
    name: keyof FeaturesFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({ name, on, off }: ToggleFeaturesOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
