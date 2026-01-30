

interface GithubRepo {
  name: string;
  description: string;
  clone_url: string;
}

export default function GithubRepoCard({ latestRepo }: { latestRepo: GithubRepo }) {
  return (
    <div className="border border-gray-300 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-xl font-semibold dark:text-gray-200 text-gray-700">{latestRepo.name}</h1>
      <p className="text-gray-500 my-4 text-base font-normal">{latestRepo.description}</p>
      <a
        href={latestRepo.clone_url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
       <p> View Repository</p>
       <div className="transform group-hover:translate-x-2 transition duration-300">
        &rarr;
       </div>
      </a>
    </div>
  );
}
