"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  let projects = await fetch("https://api.github.com/users/TechLionDev/repos").then((response) => response.json());
  projects = projects.sort(
    (
      a: { pushed_at: string | number | Date },
      b: { pushed_at: string | number | Date },
    ) => {
      // Parse the stringified dates into Date objects
      const dateA = new Date(a.pushed_at);
      const dateB = new Date(b.pushed_at);

      // Compare the timestamps of the dates
      return dateA.getTime() - dateB.getTime();
    },
  );
  projects = projects.reverse();
  return (
    <>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(async (project: Project, idx: number) => {
          let languagesJSON = (await fetch(project.languages_url).then(async (response) => await response.json())) as Record<
            string,
            number
          >;
          let languages = Object.entries(languagesJSON).map(([key]) => key);
          return (
            <Card
              className="mx-auto my-6 h-60 max-h-60 min-h-60 w-96 min-w-96 max-w-96 whitespace-pre text-wrap bg-secondary md:m-6"
              key={idx}
            >
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col">
                  <h3 className="text-lg">Languages Used:</h3>
                  <div className="flex flex-col">
                    {languages.map((language, idx) => {
                      if (
                        language === "C" ||
                        language === "D" ||
                        language === "GLSL"
                      ) {
                        return null;
                      }
                      if (idx >= 3) return null;
                      return (
                        <span
                          key={idx}
                          className="text-xs text-muted-foreground"
                        >
                          {language}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild={true} variant={"default"}>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Page;

interface Project {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: 0;
  mirror_url: null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: string;
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: [];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
