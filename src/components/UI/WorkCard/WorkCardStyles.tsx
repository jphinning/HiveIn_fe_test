import styled from "styled-components";
import { TEXT_GRAY } from "utils/colorConsts";

interface ITitle {
  font_sz?: string;
  pd_bottom?: string;
}

export const Card = styled.div`
  border: 1px solid ${TEXT_GRAY};
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 15px;
  width: 100%;
`;

const JobTitle = styled.div<ITitle>`
  display: flex;
  font-size: ${(props) => props.font_sz || "1em"};
  justify-content: space-between;
  padding-bottom: 15px;
`;

export const JobDescription = styled.div`
  color: ${TEXT_GRAY};
  padding-bottom: 10px;
`;

export default JobTitle;
