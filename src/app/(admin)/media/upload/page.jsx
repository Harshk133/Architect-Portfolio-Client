// app/(admin)/media/upload/page.jsx
"use client";
import ImageUploader from "../../../../../component/ImageUploader";

// export const metadata = { title: "Admin • Upload Image" };

export default function AdminUploadPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-2 text-2xl font-semibold">Upload Image</h1>
      <p className="mb-6 text-sm text-zinc-600">
        Drag & drop or choose an image. On upload, the file is stored on Cloudinary.
      </p>

      <ImageUploader
        onUploaded={(data) => {
          // You’ll get { url, public_id, ... } here
          console.log("Uploaded:", data);
          // e.g., save to your DB with fetch("/api/media", { method: "POST", body: JSON.stringify(data) })
        }}
      />
    </main>
  );
}
