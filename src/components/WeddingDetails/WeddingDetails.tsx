import { weddingData } from "../../data/weddingData";

export default function WeddingDetails() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-6">Wedding Details</h2>

      <p>{weddingData.wedding.date}</p>
      <p>{weddingData.wedding.time}</p>
      <p>{weddingData.wedding.venue}</p>
      <p>{weddingData.wedding.location}</p>
    </section>
  );
}