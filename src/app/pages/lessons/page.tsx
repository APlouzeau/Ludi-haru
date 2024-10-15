import { lessonsData } from "./data";
import Link from "next/link";

export default function Lessons() {
  return (
    <div>
      {lessonsData.map((lesson) => {
        const link = `lessons/${lesson.id}`;
        return (
          <div
            key={lesson.id}
            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <Link href={link}>{lesson.title}</Link>
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {lesson.date}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {lesson.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
