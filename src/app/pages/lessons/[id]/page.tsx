import { lessonsData } from "../data";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { id: number };
}): Metadata {
  const lesson = lessonsData.find(
    (element) => element.id === Number(params.id)
  );
  return {
    title: lesson?.title,
    description: lesson?.description,
  };
}

export default function LessonDetails({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const lesson = lessonsData.find(
    (element) => element.id === Number(params.id)
  );
  return (
    <>
      {lesson ? (
        <>
          <h1>Détails de la leçon: {lesson.title}</h1>
          <p>{lesson.description}</p>
        </>
      ) : (
        <h1>Leçon non trouvée</h1>
      )}
    </>
  );
}
