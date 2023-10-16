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
export declare type CoachingTreeUpdateFormInputValues = {
    id?: string;
    hc?: string;
    oc?: string;
    dc?: string;
};
export declare type CoachingTreeUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    hc?: ValidationFunction<string>;
    oc?: ValidationFunction<string>;
    dc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoachingTreeUpdateFormOverridesProps = {
    CoachingTreeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    hc?: PrimitiveOverrideProps<TextFieldProps>;
    oc?: PrimitiveOverrideProps<TextFieldProps>;
    dc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoachingTreeUpdateFormProps = React.PropsWithChildren<{
    overrides?: CoachingTreeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coachingTree?: any;
    onSubmit?: (fields: CoachingTreeUpdateFormInputValues) => CoachingTreeUpdateFormInputValues;
    onSuccess?: (fields: CoachingTreeUpdateFormInputValues) => void;
    onError?: (fields: CoachingTreeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoachingTreeUpdateFormInputValues) => CoachingTreeUpdateFormInputValues;
    onValidate?: CoachingTreeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CoachingTreeUpdateForm(props: CoachingTreeUpdateFormProps): React.ReactElement;
