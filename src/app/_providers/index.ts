import { composeComponents } from "@/shared/utils";

import { WithAudioPlayer } from "./WithAudioPlayer";
import { WithNextAuth } from "./WithNextAuth";

export const WithProviders = composeComponents(WithAudioPlayer, WithNextAuth);
