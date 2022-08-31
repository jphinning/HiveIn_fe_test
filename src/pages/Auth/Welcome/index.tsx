import useAuth from "hooks/useAuth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CLIENT_PROFILE, PROFILE_ROUTE } from "utils/routeConsts";
import S from "./style";

const createProfileRoute = {
  freelancer: PROFILE_ROUTE,
  client: CLIENT_PROFILE,
};

function Welcome() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { email, role } = useAuth();

  return (
    <div style={{ textAlign: "center" }}>
      <S.Container>
        <S.Title>{t("Welcome.title")}</S.Title>, {email}
      </S.Container>
      <S.Link onClick={() => navigate(createProfileRoute[role!])}>
        {t("Welcome.link")}
      </S.Link>
    </div>
  );
}

export default Welcome;
