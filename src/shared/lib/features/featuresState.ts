import { FeaturesFlags } from '@/shared/types/featuresFlags';

let featureFlags: FeaturesFlags;

export function setFeatureFlags(flags: FeaturesFlags) {
    featureFlags = flags;
}

export function getFeatureFlag(flag: keyof FeaturesFlags) {
    return featureFlags[flag];
}
