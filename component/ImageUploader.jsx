"use client";

import { useCallback, useRef, useState } from "react";

export default function ImageUploader({ onUploaded }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState(""); // idle | uploading | success | error
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const reset = () => {
    setFile(null);
    setPreview("");
    setStatus("");
    setMessage("");
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleFiles = useCallback((files) => {
    const f = files?.[0];
    if (!f) return;

    // Basic validation
    if (!f.type.startsWith("image/")) {
      setStatus("error");
      setMessage("Only image files are allowed.");
      return;
    }
    if (f.size > 5 * 1024 * 1024) { // 5MB
      setStatus("error");
      setMessage("Max file size is 5MB.");
      return;
    }

    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
    setStatus("");
    setMessage("");
  }, []);

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const onChoose = (e) => handleFiles(e.target.files);

  const upload = async () => {
    if (!file) return;
    setStatus("uploading");
    setMessage("Uploading...");

    try {
      const fd = new FormData();
      fd.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Upload failed");

      setStatus("success");
      setMessage("Uploaded successfully!");
      onUploaded?.(data); // pass Cloudinary response up
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="mx-auto w-full max-w-xl">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        className={[
          "rounded-2xl border-2 border-dashed p-6 transition",
          dragOver ? "border-indigo-500 bg-indigo-50" : "border-zinc-300",
        ].join(" ")}
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="text-sm text-zinc-600">
            Drag & drop image here, or
          </div>

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700"
          >
            Choose file
          </button>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={onChoose}
            className="hidden"
          />

          {file && (
            <div className="mt-4 w-full">
              <div className="flex items-center justify-between text-sm">
                <div className="truncate font-medium">{file.name}</div>
                <div className="text-zinc-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </div>
              </div>
              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="mt-3 h-56 w-full rounded-xl object-contain bg-white"
                />
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={upload}
          disabled={!file || status === "uploading"}
          className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "uploading" ? "Uploading…" : "Upload"}
        </button>
        <button
          onClick={reset}
          disabled={status === "uploading"}
          className="rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Reset
        </button>
        <div
          className={[
            "text-sm",
            status === "error" && "text-red-600",
            status === "success" && "text-green-600",
            status === "uploading" && "text-zinc-600",
          ].join(" ")}
        >
          {message}
        </div>
      </div>
    </div>
  );
}
