/// <reference path="./scheduler.ts" />
module Rx {
    export module internals {
        export interface SchedulePeriodicRecursive {
            start(): IDisposable;
        }

        interface SchedulePeriodicRecursiveStatic {
            new (scheduler, state, period, action) : SchedulePeriodicRecursive;
        }

        export var SchedulePeriodicRecursive: SchedulePeriodicRecursiveStatic;
    }
}

(function() {
    var item = new Rx.internals.SchedulePeriodicRecursive(undefined, undefined, undefined, undefined);

    var d : Rx.IDisposable = item.start();
})
