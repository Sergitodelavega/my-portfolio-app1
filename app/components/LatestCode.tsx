import GithubRepoCard from "./GithubRepoCard";
import getLatestRepos from "./getLatestRepos";

const repos = [
  {
    name: "awesome-project",
    description: "An awesome project that does amazing things.",
    clone_url: "https://github.com/awesome-user/awesome-project.git",
  },
  {
    name: "nextjs-starter",
    description: "A starter template for Next.js applications.",
    clone_url: "https://github.com/awesome-user/nextjs-starter.git",
  },
  {
    name: "react-components",
    description: "A library of reusable React components.",
    clone_url: "https://github.com/awesome-user/react-components.git",
  },
];


export default function LatestCode() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
      {
        repos && repos.map((latestRepo, idx) => (
          <GithubRepoCard key={idx} latestRepo={latestRepo} />
        ))
      }
    </div>
  );
}