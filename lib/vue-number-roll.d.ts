declare const _sfc_main: import("vue").DefineComponent<{
    start: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    end: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    totalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    itemHeightWithUnit: {
        type: StringConstructor;
        required: true;
    };
    reverseRollDirection: {
        type: BooleanConstructor;
        default: boolean;
    };
    immediate: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemClass: {
        type: StringConstructor;
        default: string;
    };
    transitionDuration: {
        type: StringConstructor;
        default: string;
    };
    transitionTimingFunction: {
        type: StringConstructor;
        default: string;
    };
    transitionDelay: {
        type: StringConstructor;
        default: string;
    };
}, {
    roll: () => void;
    reset: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    start: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    end: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    totalLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        validator: (value: number | string) => boolean;
    };
    itemHeightWithUnit: {
        type: StringConstructor;
        required: true;
    };
    reverseRollDirection: {
        type: BooleanConstructor;
        default: boolean;
    };
    immediate: {
        type: BooleanConstructor;
        default: boolean;
    };
    itemClass: {
        type: StringConstructor;
        default: string;
    };
    transitionDuration: {
        type: StringConstructor;
        default: string;
    };
    transitionTimingFunction: {
        type: StringConstructor;
        default: string;
    };
    transitionDelay: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    start: string | number;
    end: string | number;
    totalLength: string | number;
    reverseRollDirection: boolean;
    immediate: boolean;
    itemClass: string;
    transitionDuration: string;
    transitionTimingFunction: string;
    transitionDelay: string;
}>;
export default _sfc_main;
