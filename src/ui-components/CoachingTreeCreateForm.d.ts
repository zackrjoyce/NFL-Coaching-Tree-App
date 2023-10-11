/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoachingTreeCreateFormInputValues = {
    hc?: string;
    oc?: string;
    dc?: string;
};
export declare type CoachingTreeCreateFormValidationValues = {
    hc?: ValidationFunction<string>;
    oc?: ValidationFunction<string>;
    dc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoachingTreeCreateFormOverridesProps = {
    CoachingTreeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    hc?: PrimitiveOverrideProps<TextFieldProps>;
    oc?: PrimitiveOverrideProps<TextFieldProps>;
    dc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoachingTreeCreateFormProps = React.PropsWithChildren<{
    overrides?: CoachingTreeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CoachingTreeCreateFormInputValues) => CoachingTreeCreateFormInputValues;
    onSuccess?: (fields: CoachingTreeCreateFormInputValues) => void;
    onError?: (fields: CoachingTreeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoachingTreeCreateFormInputValues) => CoachingTreeCreateFormInputValues;
    onValidate?: CoachingTreeCreateFormValidationValues;
} & React.CSSProperties>;
export default function CoachingTreeCreateForm(props: CoachingTreeCreateFormProps): React.ReactElement;
