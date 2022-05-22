declare const _sfc_main: import("vue").DefineComponent<{
    latex: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    props: {
        latex: string;
        block: boolean;
    };
    ContainerRef: import("vue").Ref<null>;
    renderMathJax: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    latex: {
        type: StringConstructor;
        required: true;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>>, {
    latex: string;
    block: boolean;
}>;
export default _sfc_main;
