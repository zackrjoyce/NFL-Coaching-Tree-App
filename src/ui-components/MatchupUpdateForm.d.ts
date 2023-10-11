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
    team1_hc?: string;
    team1_oc?: string;
    team1_dc?: string;
    team2_hc?: string;
    team2_oc?: string;
    team2_dc?: string;
    turnover_dif?: string;
    team1_score?: string;
    team2_score?: string;
};
export declare type MatchupUpdateFormValidationValues = {
    team1_hc?: ValidationFunction<string>;
    team1_oc?: ValidationFunction<string>;
    team1_dc?: ValidationFunction<string>;
    team2_hc?: ValidationFunction<string>;
    team2_oc?: ValidationFunction<string>;
    team2_dc?: ValidationFunction<string>;
    turnover_dif?: ValidationFunction<string>;
    team1_score?: ValidationFunction<string>;
    team2_score?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MatchupUpdateFormOverridesProps = {
    MatchupUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    team1_hc?: PrimitiveOverrideProps<TextFieldProps>;
    team1_oc?: PrimitiveOverrideProps<TextFieldProps>;
    team1_dc?: PrimitiveOverrideProps<TextFieldProps>;
    team2_hc?: PrimitiveOverrideProps<TextFieldProps>;
    team2_oc?: PrimitiveOverrideProps<TextFieldProps>;
    team2_dc?: PrimitiveOverrideProps<TextFieldProps>;
    turnover_dif?: PrimitiveOverrideProps<TextFieldProps>;
    team1_score?: PrimitiveOverrideProps<TextFieldProps>;
    team2_score?: PrimitiveOverrideProps<TextFieldProps>;
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
