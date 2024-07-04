// src/app/page.tsx

import Image from "next/image";
import Title from "./components/Title";
import { EventModel } from "@/models";
import EventCard from "./components/EventCard";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getEvents(): Promise<EventModel[]> {
  const response = await fetch(`${API_BASE_URL}/api/events`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  return data.events;
}

export default async function HomePage() {
  const events = await getEvents();
  return (
    <main className="mt-10 flex flex-col">
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
