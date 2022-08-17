import React from "react";
import { ILayoutElementWithTitleProps } from "components/layoutElementWithTitle/typesDef";
import { SH, SDiv, SWrapper } from "components/layoutElementWithTitle/style";
import TextField from "components/UI/textField/TextField";
import Select from "components/UI/select/Select";
import ToggleButton from "components/UI/buttons/toggleButton/ToggleButton";
import EducationLayout from "components/educationLayout/EducationLayout";
import SkillsLayout from "components/skillsLayout/SkillsLayout";
import PhoneInput from "../UI/phoneInput/PhoneInput";

function LayoutElementWithTitle(props: ILayoutElementWithTitleProps) {
  const {
    element,
    title,
    formFieldName,
    containerWidth,
    selectOptions,
    helperText,
    toggleButtonOptions,
    maxLength,
    skillsOptions,
    control,
    errors,
    message,
  } = props;

  const renderTextInput = () => (
    <TextField
      errors={errors}
      control={control}
      formFieldName={formFieldName}
      maxLength={maxLength}
      multiline={false}
      width="full"
      type="text"
    />
  );

  const renderNumberInput = () => (
    <TextField
      errors={errors}
      control={control}
      formFieldName={formFieldName}
      multiline={false}
      width="half"
      type="number"
      helperText={helperText}
    />
  );

  const renderTextarea = () => (
    <TextField
      errors={errors}
      control={control}
      formFieldName={formFieldName}
      maxLength={maxLength}
      rows={2}
      multiline
      width="full"
      type="text"
      helperText={helperText}
    />
  );

  const renderPhoneInput = () => (
    <PhoneInput name={formFieldName} control={control} />
  );

  const renderText = () => (message ? <p>{message}</p> : null);

  const renderSelect = () =>
    selectOptions ? (
      <Select
        errors={errors}
        formFieldName={formFieldName}
        control={control}
        options={selectOptions}
      />
    ) : null;

  const renderToggleButton = () =>
    toggleButtonOptions ? (
      <ToggleButton
        formFieldName={formFieldName}
        control={control}
        options={toggleButtonOptions}
        errors={errors}
      />
    ) : null;

  const renderEducationColumn = () => (
    <EducationLayout control={control} maxCountOfColumns={4} type="education" />
  );

  const renderExperienceColumn = () => (
    <EducationLayout
      control={control}
      maxCountOfColumns={8}
      type="experience"
    />
  );

  const renderSkillsLayout = () =>
    skillsOptions ? (
      <SkillsLayout errors={errors} control={control} options={skillsOptions} />
    ) : null;

  const elementTypes: { [propName: string]: typeof element } = {
    textInput: "textInput",
    numberInput: "numberInput",
    textarea: "textarea",
    select: "select",
    toggleButton: "toggleButton",
    educationColumn: "educationColumn",
    experienceColumn: "experienceColumn",
    skillsLayout: "skillsLayout",
    phoneInput: "phoneInput",
    text: "text",
  };

  const renderElement = (type: typeof element): JSX.Element | null => {
    switch (type) {
      case elementTypes.textInput:
        return renderTextInput();
      case elementTypes.numberInput:
        return renderNumberInput();
      case elementTypes.textarea:
        return renderTextarea();
      case elementTypes.select:
        return renderSelect();
      case elementTypes.toggleButton:
        return renderToggleButton();
      case elementTypes.educationColumn:
        return renderEducationColumn();
      case elementTypes.experienceColumn:
        return renderExperienceColumn();
      case elementTypes.skillsLayout:
        return renderSkillsLayout();
      case "phoneInput":
        return renderPhoneInput();
      case "text":
        return renderText();
      default:
        return null;
    }
  };

  return (
    <SWrapper>
      <SH>{title}</SH>
      <SDiv width={containerWidth}>{renderElement(element)}</SDiv>
    </SWrapper>
  );
}

export default LayoutElementWithTitle;
