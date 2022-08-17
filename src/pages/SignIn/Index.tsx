import React, { useState } from "react";
import { Button, Typography, Modal } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from "react-router-dom";
import Field from "components/DefaultField/Index";
import { useTranslation } from "react-i18next";
import { PRIMARY } from "utils/colorConsts";
import { PROFILE_ROUTE, SIGN_UP_ROUTE } from "utils/routeConsts";
import useAuth from "hooks/useAuth";
import S from "./style";
import signInSchema from "./schema";

interface SignInForm extends FieldValues {
  email: string;
  password: string;
}

type LocationProps = {
  state: {
    from: Location;
  };
};

export default function SignIn() {
  const { signIn } = useAuth();
  const { t } = useTranslation();

  const location = useLocation() as LocationProps;
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { Title, Text } = Typography;
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const { control, handleSubmit } = useForm<SignInForm>({
    resolver: yupResolver(signInSchema),
  });

  const handleCloseErrorModal = () => {
    setIsErrorModalOpen(false);
  };

  const success = () => {
    Modal.success({
      title: t("SignIn.successLogin"),
      onOk: () => navigate(PROFILE_ROUTE),
      centered: true,
    });

    signIn();
    // Navigate to the page the user was before being disconnected
    navigate(from, { replace: true });
  };

  const error = () => {
    Modal.error({
      title: t("SignIn.errorLogin"),
      centered: true,
      okButtonProps: { danger: true },
    });
  };

  const goToRegister = () => {
    window.scroll(0, 0);
    navigate(SIGN_UP_ROUTE);
  };

  function onSubmit(evt: SignInForm) {
    success();
    error();
    return evt;
  }

  return (
    <S.Container>
      <S.TextsBox>
        <Title italic>{t("SignIn.title")}</Title>
        <Title style={{ fontWeight: "400" }} level={2}>
          {t("SignIn.subtitle")}
        </Title>
      </S.TextsBox>
      <S.FormBox>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <Field label="Email or username" control={control} name="email" />
            <Field label="Password" control={control} name="password" />
            <Text style={{ color: PRIMARY, cursor: "pointer" }}>
              {t("SignIn.forgotPass")}
            </Text>
          </S.InputContainer>
          <Button
            style={{ width: "50%", height: "50px", fontSize: "18px" }}
            type="primary"
            htmlType="submit"
          >
            {t("SignIn.signIn")}
          </Button>
        </S.Form>
      </S.FormBox>
      <S.Footer>
        <Text style={{ fontSize: "16px" }}>{t("SignIn.dontHaveAccount")}</Text>
        <Text
          onClick={goToRegister}
          style={{ color: PRIMARY, fontSize: "16px", cursor: "pointer" }}
        >
          {t("SignIn.register")}
        </Text>
      </S.Footer>
      <Modal
        visible={isErrorModalOpen}
        title="Succesful login"
        onOk={() => navigate("/test")}
        onCancel={handleCloseErrorModal}
        centered
        cancelButtonProps={{ style: { display: "none" } }}
      />
    </S.Container>
  );
}