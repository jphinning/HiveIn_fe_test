import { useState } from "react";
import { Skeleton } from "antd";
import LinkButton from "components/UI/buttons/LinkButton/LinkButton";
import JobItem from "components/UI/JobItems/JobItems";
import useAuth from "hooks/useAuth";
import PageContainer, {
  Header,
  Card,
  NameText,
  Section,
  TitleText,
  StyledPagination,
} from "pages/JobOwner/MyJobs/ClientJobsStyles";
import { useTranslation } from "react-i18next";
import { useGetOwnJobPostsQuery } from "services/jobPosts/setJobPostsAPI";
import { SEARCH_WORK_ROUTE } from "utils/routeConsts";
import { POSTS_PER_PAGE as PPG } from "utils/jobListConsts";

function ClientJobs() {
  const { email } = useAuth();
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(PPG);

  const { data: jobPosts, isLoading, isSuccess } = useGetOwnJobPostsQuery();

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  return (
    <PageContainer>
      <Header>
        <TitleText>
          {t("MyJobs.subTitle")}
          <NameText>{email}</NameText>
        </TitleText>
        <LinkButton link={SEARCH_WORK_ROUTE}>{t("MyJobs.postJob")}</LinkButton>
      </Header>
      <Section>
        <Card>
          <TitleText font_sz="1.5em" pd="5px" pd_bottom="5%">
            {t("MyJobs.allPostings")}
          </TitleText>
          {isLoading ? <Skeleton active paragraph={{ rows: 4 }} /> : ""}

          {isSuccess && !jobPosts?.length ? (
            t("MyJobs.nothingToShow")
          ) : (
            <>
              {jobPosts
                ?.slice(firstPostIndex, lastPostIndex)
                .map(({ id, title, jobDescription, rate, createdAt }) => (
                  <JobItem
                    key={id}
                    title={title!}
                    description={jobDescription!}
                    link={id!.toString()}
                    publishDate={createdAt!}
                    hourlyRate={rate!}
                  />
                ))}

              <StyledPagination
                showSizeChanger
                onShowSizeChange={(_page, pageSize) =>
                  setPostsPerPage(pageSize)
                }
                current={currentPage}
                onChange={(page) => setCurrentPage(page)}
                pageSize={postsPerPage}
                total={jobPosts?.length}
                pageSizeOptions={[PPG, PPG * 2, PPG * 3]}
              />
            </>
          )}
        </Card>
      </Section>
    </PageContainer>
  );
}

export default ClientJobs;