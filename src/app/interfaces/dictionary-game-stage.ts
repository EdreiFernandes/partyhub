import { Signal } from "@angular/core";

export interface DictionaryGameStage {
    canContinue: Signal<boolean>;
    setCanContinue(): void;
}