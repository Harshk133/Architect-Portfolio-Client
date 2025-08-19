"use client";
import { useState } from "react";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, imageUrl }),
    });
    alert("Project uploaded!");
  };

  return (
    <form onSubmit={handleUpload} className="flex flex-col w-1/2 mx-auto mt-10 gap-4">
      <input type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 rounded"/>
      <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border p-2 rounded"/>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Upload</button>
    </form>
  );
}
