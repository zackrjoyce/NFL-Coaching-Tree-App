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
import { createCoachingTree } from "../graphql/mutations";
export default function CoachingTreeCreateForm(props) {
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
    hc: "",
    oc: "",
    dc: "",
  };
  const [hc, setHc] = React.useState(initialValues.hc);
  const [oc, setOc] = React.useState(initialValues.oc);
  const [dc, setDc] = React.useState(initialValues.dc);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setHc(initialValues.hc);
    setOc(initialValues.oc);
    setDc(initialValues.dc);
    setErrors({});
  };
  const validations = {
    hc: [],
    oc: [],
    dc: [],
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
          hc,
          oc,
          dc,
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
            query: createCoachingTree.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CoachingTreeCreateForm")}
      {...rest}
    >
      <TextField
        label="Hc"
        isRequired={false}
        isReadOnly={false}
        value={hc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hc: value,
              oc,
              dc,
            };
            const result = onChange(modelFields);
            value = result?.hc ?? value;
          }
          if (errors.hc?.hasError) {
            runValidationTasks("hc", value);
          }
          setHc(value);
        }}
        onBlur={() => runValidationTasks("hc", hc)}
        errorMessage={errors.hc?.errorMessage}
        hasError={errors.hc?.hasError}
        {...getOverrideProps(overrides, "hc")}
      ></TextField>
      <TextField
        label="Oc"
        isRequired={false}
        isReadOnly={false}
        value={oc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hc,
              oc: value,
              dc,
            };
            const result = onChange(modelFields);
            value = result?.oc ?? value;
          }
          if (errors.oc?.hasError) {
            runValidationTasks("oc", value);
          }
          setOc(value);
        }}
        onBlur={() => runValidationTasks("oc", oc)}
        errorMessage={errors.oc?.errorMessage}
        hasError={errors.oc?.hasError}
        {...getOverrideProps(overrides, "oc")}
      ></TextField>
      <TextField
        label="Dc"
        isRequired={false}
        isReadOnly={false}
        value={dc}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hc,
              oc,
              dc: value,
            };
            const result = onChange(modelFields);
            value = result?.dc ?? value;
          }
          if (errors.dc?.hasError) {
            runValidationTasks("dc", value);
          }
          setDc(value);
        }}
        onBlur={() => runValidationTasks("dc", dc)}
        errorMessage={errors.dc?.errorMessage}
        hasError={errors.dc?.hasError}
        {...getOverrideProps(overrides, "dc")}
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
