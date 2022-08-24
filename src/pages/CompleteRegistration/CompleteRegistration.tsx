import { useEffect } from "react";
import Wrapper, {
  RoleRadio,
  TitleText,
  FormBox,
  ApplyButton,
  ButtonText,
  RadioGroup,
} from "pages/CompleteRegistration/CompleteRegistrationStyles";
import { useTranslation } from "react-i18next";
import { RadioChangeEvent } from "antd";
import useGoogleAuth from "hooks/useGoogleAuth";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store/store";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { SETTINGS_ROUTE } from "utils/routeConsts";
import { useSetUserMutation } from "services/user/setUserAPI";
import { toast } from "react-toastify";

export default function CompleteRegistration() {
  const { email, role } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [updateRole, { isSuccess, isError, isLoading, error }] =
    useSetUserMutation();

  const { t } = useTranslation();
  const navigate = useNavigate();

  useGoogleAuth();

  useEffect(() => {
    if (!isLoading && isError) {
      if ("status" in error!) {
        toast.error(t("CompleteRegistration.error"));
      }
      return;
    }
    if (!isLoading && isSuccess) {
      navigate(SETTINGS_ROUTE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const setRole = (e: RadioChangeEvent) => {
    dispatch(
      setUser({
        role: e.target.value,
      })
    );
  };

  const sendToDB = () => {
    updateRole({
      email,
      role,
    });
  };

  return (
    <Wrapper>
      <FormBox>
        <TitleText level={3}>{t("CompleteRegistration.title")}</TitleText>
        <RadioGroup onChange={setRole} value={role}>
          <RoleRadio value="client">
            <ButtonText level={5}>
              {t("CompleteRegistration.client")}
            </ButtonText>
          </RoleRadio>

          <RoleRadio value="freelancer">
            <ButtonText level={5}>
              {t("CompleteRegistration.freelancer")}
            </ButtonText>
          </RoleRadio>
        </RadioGroup>
        <ApplyButton role={role} onClick={sendToDB}>
          {t("CompleteRegistration.button")}
        </ApplyButton>
      </FormBox>
    </Wrapper>
  );
}
