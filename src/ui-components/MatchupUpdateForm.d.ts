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
export declare type MatchupUpdateFormInputValues = {
    id?: string;
    team1?: string;
    team1_hc?: string;
    team1_oc?: string;
    team1_dc?: string;
    team1_score?: string;
    team2?: string;
    team2_hc?: string;
    team2_oc?: string;
    team2_dc?: string;
    team2_score?: string;
    injury?: string;
    tanking?: string;
    turnover_dif?: string;
};
export declare type MatchupUpdateFormValidationValues = {
    id?: ValidationFunction<string>;
    team1?: ValidationFunction<string>;
    team1_hc?: ValidationFunction<string>;
    team1_oc?: ValidationFunction<string>;
    team1_dc?: ValidationFunction<string>;
    team1_score?: ValidationFunction<string>;
    team2?: ValidationFunction<string>;
    team2_hc?: ValidationFunction<string>;
    team2_oc?: ValidationFunction<string>;
    team2_dc?: ValidationFunction<string>;
    team2_score?: ValidationFunction<string>;
    injury?: ValidationFunction<string>;
    tanking?: ValidationFunction<string>;
    turnover_dif?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchupUpdateFormOverridesProps = {
    MatchupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    id?: PrimitiveOverrideProps<TextFieldProps>;
    team1?: PrimitiveOverrideProps<TextFieldProps>;
    team1_hc?: PrimitiveOverrideProps<TextFieldProps>;
    team1_oc?: PrimitiveOverrideProps<TextFieldProps>;
    team1_dc?: PrimitiveOverrideProps<TextFieldProps>;
    team1_score?: PrimitiveOverrideProps<TextFieldProps>;
    team2?: PrimitiveOverrideProps<TextFieldProps>;
    team2_hc?: PrimitiveOverrideProps<TextFieldProps>;
    team2_oc?: PrimitiveOverrideProps<TextFieldProps>;
    team2_dc?: PrimitiveOverrideProps<TextFieldProps>;
    team2_score?: PrimitiveOverrideProps<TextFieldProps>;
    injury?: PrimitiveOverrideProps<TextFieldProps>;
    tanking?: PrimitiveOverrideProps<TextFieldProps>;
    turnover_dif?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MatchupUpdateFormProps = React.PropsWithChildren<{
    overrides?: MatchupUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    matchup?: any;
    onSubmit?: (fields: MatchupUpdateFormInputValues) => MatchupUpdateFormInputValues;
    onSuccess?: (fields: MatchupUpdateFormInputValues) => void;
    onError?: (fields: MatchupUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MatchupUpdateFormInputValues) => MatchupUpdateFormInputValues;
    onValidate?: MatchupUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MatchupUpdateForm(props: MatchupUpdateFormProps): React.ReactElement;
