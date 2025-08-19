"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/9421616978?text=Hello, my name is ${form.name}. ${form.message}. Contact me at ${form.phone}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mx-auto mt-10 gap-4">
      <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border p-2 rounded"/>
      <input type="text" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="border p-2 rounded"/>
      <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="border p-2 rounded"/>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">Send on WhatsApp</button>
    </form>
  );
}
