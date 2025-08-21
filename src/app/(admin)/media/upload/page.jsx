// app/(admin)/media/upload/page.jsx
"use client";
import { CldUploadWidget } from 'next-cloudinary';

// export const metadata = { title: "Admin • Upload Image" };

export default function AdminUploadPage() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-2 text-2xl font-semibold">Upload Image</h1>
      <p className="mb-6 text-sm text-zinc-600">
        Drag & drop or choose an image. On upload, the file is stored on Cloudinary.
      </p>
      <CldUploadWidget uploadPreset="client-project-architect">
        {({ open }) => {
          return (
            <button className="bg-indigo-500 rounded py-2 px-4 mb-4 text-white" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>

    </main>
  );
}
