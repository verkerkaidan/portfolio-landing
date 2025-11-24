import Link from "next/link";

export default function ProjectItem({
  href,
  title,
  description,
  tags,
}: {
  href: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Link href={href} className="block">
      <li className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 shadow hover:bg-zinc-200 dark:hover:bg-zinc-800 transition cursor-pointer font-medium text-lg">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
          {title}
        </h2>
        <p>{description}</p>
        <div className="flex gap-2 mt-2">
          {tags.map((tag, idx) => {
            const colors = [
              "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
              "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
              "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
              "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
              "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
              "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
              "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
            ];
            const colorClass = colors[idx % colors.length];
            return (
              <span
                key={tag}
                className={`inline-block px-2 py-1 rounded text-sm font-semibold ${colorClass}`}
              >
                {tag}
              </span>
            );
          })}
        </div>
      </li>
    </Link>
  );
}
