/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createMatchup } from "../graphql/mutations";
export default function MatchupCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    id: "",
    team1: "",
    team1_hc: "",
    team1_oc: "",
    team1_dc: "",
    team1_score: "",
    team2: "",
    team2_hc: "",
    team2_oc: "",
    team2_dc: "",
    team2_score: "",
    injury: "",
    tanking: "",
    turnover_dif: "",
  };
  const [id, setId] = React.useState(initialValues.id);
  const [team1, setTeam1] = React.useState(initialValues.team1);
  const [team1_hc, setTeam1_hc] = React.useState(initialValues.team1_hc);
  const [team1_oc, setTeam1_oc] = React.useState(initialValues.team1_oc);
  const [team1_dc, setTeam1_dc] = React.useState(initialValues.team1_dc);
  const [team1_score, setTeam1_score] = React.useState(
    initialValues.team1_score
  );
  const [team2, setTeam2] = React.useState(initialValues.team2);
  const [team2_hc, setTeam2_hc] = React.useState(initialValues.team2_hc);
  const [team2_oc, setTeam2_oc] = React.useState(initialValues.team2_oc);
  const [team2_dc, setTeam2_dc] = React.useState(initialValues.team2_dc);
  const [team2_score, setTeam2_score] = React.useState(
    initialValues.team2_score
  );
  const [injury, setInjury] = React.useState(initialValues.injury);
  const [tanking, setTanking] = React.useState(initialValues.tanking);
  const [turnover_dif, setTurnover_dif] = React.useState(
    initialValues.turnover_dif
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setId(initialValues.id);
    setTeam1(initialValues.team1);
    setTeam1_hc(initialValues.team1_hc);
    setTeam1_oc(initialValues.team1_oc);
    setTeam1_dc(initialValues.team1_dc);
    setTeam1_score(initialValues.team1_score);
    setTeam2(initialValues.team2);
    setTeam2_hc(initialValues.team2_hc);
    setTeam2_oc(initialValues.team2_oc);
    setTeam2_dc(initialValues.team2_dc);
    setTeam2_score(initialValues.team2_score);
    setInjury(initialValues.injury);
    setTanking(initialValues.tanking);
    setTurnover_dif(initialValues.turnover_dif);
    setErrors({});
  };
  const validations = {
    id: [{ type: "Required" }],
    team1: [{ type: "Required" }],
    team1_hc: [{ type: "Required" }],
    team1_oc: [{ type: "Required" }],
    team1_dc: [{ type: "Required" }],
    team1_score: [{ type: "Required" }],
    team2: [{ type: "Required" }],
    team2_hc: [{ type: "Required" }],
    team2_oc: [{ type: "Required" }],
    team2_dc: [{ type: "Required" }],
    team2_score: [{ type: "Required" }],
    injury: [],
    tanking: [],
    turnover_dif: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          id,
          team1,
          team1_hc,
          team1_oc,
          team1_dc,
          team1_score,
          team2,
          team2_hc,
          team2_oc,
          team2_dc,
          team2_score,
          injury,
          tanking,
          turnover_dif,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createMatchup.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MatchupCreateForm")}
      {...rest}
    >
      <TextField
        label="Id"
        isRequired={true}
        isReadOnly={false}
        value={id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id: value,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.id ?? value;
          }
          if (errors.id?.hasError) {
            runValidationTasks("id", value);
          }
          setId(value);
        }}
        onBlur={() => runValidationTasks("id", id)}
        errorMessage={errors.id?.errorMessage}
        hasError={errors.id?.hasError}
        {...getOverrideProps(overrides, "id")}
      ></TextField>
      <TextField
        label="Team1"
        isRequired={true}
        isReadOnly={false}
        value={team1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1: value,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team1 ?? value;
          }
          if (errors.team1?.hasError) {
            runValidationTasks("team1", value);
          }
          setTeam1(value);
        }}
        onBlur={() => runValidationTasks("team1", team1)}
        errorMessage={errors.team1?.errorMessage}
        hasError={errors.team1?.hasError}
        {...getOverrideProps(overrides, "team1")}
      ></TextField>
      <TextField
        label="Team1 hc"
        isRequired={true}
        isReadOnly={false}
        value={team1_hc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc: value,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team1_hc ?? value;
          }
          if (errors.team1_hc?.hasError) {
            runValidationTasks("team1_hc", value);
          }
          setTeam1_hc(value);
        }}
        onBlur={() => runValidationTasks("team1_hc", team1_hc)}
        errorMessage={errors.team1_hc?.errorMessage}
        hasError={errors.team1_hc?.hasError}
        {...getOverrideProps(overrides, "team1_hc")}
      ></TextField>
      <TextField
        label="Team1 oc"
        isRequired={true}
        isReadOnly={false}
        value={team1_oc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc: value,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team1_oc ?? value;
          }
          if (errors.team1_oc?.hasError) {
            runValidationTasks("team1_oc", value);
          }
          setTeam1_oc(value);
        }}
        onBlur={() => runValidationTasks("team1_oc", team1_oc)}
        errorMessage={errors.team1_oc?.errorMessage}
        hasError={errors.team1_oc?.hasError}
        {...getOverrideProps(overrides, "team1_oc")}
      ></TextField>
      <TextField
        label="Team1 dc"
        isRequired={true}
        isReadOnly={false}
        value={team1_dc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc: value,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team1_dc ?? value;
          }
          if (errors.team1_dc?.hasError) {
            runValidationTasks("team1_dc", value);
          }
          setTeam1_dc(value);
        }}
        onBlur={() => runValidationTasks("team1_dc", team1_dc)}
        errorMessage={errors.team1_dc?.errorMessage}
        hasError={errors.team1_dc?.hasError}
        {...getOverrideProps(overrides, "team1_dc")}
      ></TextField>
      <TextField
        label="Team1 score"
        isRequired={true}
        isReadOnly={false}
        value={team1_score}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score: value,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team1_score ?? value;
          }
          if (errors.team1_score?.hasError) {
            runValidationTasks("team1_score", value);
          }
          setTeam1_score(value);
        }}
        onBlur={() => runValidationTasks("team1_score", team1_score)}
        errorMessage={errors.team1_score?.errorMessage}
        hasError={errors.team1_score?.hasError}
        {...getOverrideProps(overrides, "team1_score")}
      ></TextField>
      <TextField
        label="Team2"
        isRequired={true}
        isReadOnly={false}
        value={team2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2: value,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team2 ?? value;
          }
          if (errors.team2?.hasError) {
            runValidationTasks("team2", value);
          }
          setTeam2(value);
        }}
        onBlur={() => runValidationTasks("team2", team2)}
        errorMessage={errors.team2?.errorMessage}
        hasError={errors.team2?.hasError}
        {...getOverrideProps(overrides, "team2")}
      ></TextField>
      <TextField
        label="Team2 hc"
        isRequired={true}
        isReadOnly={false}
        value={team2_hc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc: value,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team2_hc ?? value;
          }
          if (errors.team2_hc?.hasError) {
            runValidationTasks("team2_hc", value);
          }
          setTeam2_hc(value);
        }}
        onBlur={() => runValidationTasks("team2_hc", team2_hc)}
        errorMessage={errors.team2_hc?.errorMessage}
        hasError={errors.team2_hc?.hasError}
        {...getOverrideProps(overrides, "team2_hc")}
      ></TextField>
      <TextField
        label="Team2 oc"
        isRequired={true}
        isReadOnly={false}
        value={team2_oc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc: value,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team2_oc ?? value;
          }
          if (errors.team2_oc?.hasError) {
            runValidationTasks("team2_oc", value);
          }
          setTeam2_oc(value);
        }}
        onBlur={() => runValidationTasks("team2_oc", team2_oc)}
        errorMessage={errors.team2_oc?.errorMessage}
        hasError={errors.team2_oc?.hasError}
        {...getOverrideProps(overrides, "team2_oc")}
      ></TextField>
      <TextField
        label="Team2 dc"
        isRequired={true}
        isReadOnly={false}
        value={team2_dc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc: value,
              team2_score,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team2_dc ?? value;
          }
          if (errors.team2_dc?.hasError) {
            runValidationTasks("team2_dc", value);
          }
          setTeam2_dc(value);
        }}
        onBlur={() => runValidationTasks("team2_dc", team2_dc)}
        errorMessage={errors.team2_dc?.errorMessage}
        hasError={errors.team2_dc?.hasError}
        {...getOverrideProps(overrides, "team2_dc")}
      ></TextField>
      <TextField
        label="Team2 score"
        isRequired={true}
        isReadOnly={false}
        value={team2_score}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score: value,
              injury,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.team2_score ?? value;
          }
          if (errors.team2_score?.hasError) {
            runValidationTasks("team2_score", value);
          }
          setTeam2_score(value);
        }}
        onBlur={() => runValidationTasks("team2_score", team2_score)}
        errorMessage={errors.team2_score?.errorMessage}
        hasError={errors.team2_score?.hasError}
        {...getOverrideProps(overrides, "team2_score")}
      ></TextField>
      <TextField
        label="Injury"
        isRequired={false}
        isReadOnly={false}
        value={injury}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury: value,
              tanking,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.injury ?? value;
          }
          if (errors.injury?.hasError) {
            runValidationTasks("injury", value);
          }
          setInjury(value);
        }}
        onBlur={() => runValidationTasks("injury", injury)}
        errorMessage={errors.injury?.errorMessage}
        hasError={errors.injury?.hasError}
        {...getOverrideProps(overrides, "injury")}
      ></TextField>
      <TextField
        label="Tanking"
        isRequired={false}
        isReadOnly={false}
        value={tanking}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking: value,
              turnover_dif,
            };
            const result = onChange(modelFields);
            value = result?.tanking ?? value;
          }
          if (errors.tanking?.hasError) {
            runValidationTasks("tanking", value);
          }
          setTanking(value);
        }}
        onBlur={() => runValidationTasks("tanking", tanking)}
        errorMessage={errors.tanking?.errorMessage}
        hasError={errors.tanking?.hasError}
        {...getOverrideProps(overrides, "tanking")}
      ></TextField>
      <TextField
        label="Turnover dif"
        isRequired={false}
        isReadOnly={false}
        value={turnover_dif}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              id,
              team1,
              team1_hc,
              team1_oc,
              team1_dc,
              team1_score,
              team2,
              team2_hc,
              team2_oc,
              team2_dc,
              team2_score,
              injury,
              tanking,
              turnover_dif: value,
            };
            const result = onChange(modelFields);
            value = result?.turnover_dif ?? value;
          }
          if (errors.turnover_dif?.hasError) {
            runValidationTasks("turnover_dif", value);
          }
          setTurnover_dif(value);
        }}
        onBlur={() => runValidationTasks("turnover_dif", turnover_dif)}
        errorMessage={errors.turnover_dif?.errorMessage}
        hasError={errors.turnover_dif?.hasError}
        {...getOverrideProps(overrides, "turnover_dif")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
