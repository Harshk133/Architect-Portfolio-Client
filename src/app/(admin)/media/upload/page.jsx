"use client";
import { BRAND_COLOR } from "@/app/constants";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

export default function AdminUploadPage() {
  const [authenticated, setAuthenticated] = useState(false);

  async function submitHandler(formData) {
    if (
      formData.get("username") === "admin" &&
      formData.get("password") === "admin123"
    ) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      alert("Invalid username or password");
    }
  }

  return (
    <main className="mx-auto max-w-md p-6 flex flex-col items-center">
      {!authenticated ? (
        <form
          action={submitHandler}
          className="text-black w-full bg-white shadow-lg rounded-lg p-6 space-y-4 border border-gray-200"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Admin Login
          </h2>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username"
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${BRAND_COLOR}-500`}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-${BRAND_COLOR}-500`}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-${BRAND_COLOR}-600 text-white font-semibold py-2 rounded-lg hover:bg-${BRAND_COLOR}-700 transition duration-200`}
          >
            Login
          </button>
        </form>
      ) : (
        <>
          <section className="rounded-lg py-16 bg-gray-50">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="mb-2 text-2xl font-semibold text-gray-800">
                Upload Image
              </h1>
              <p className="mb-6 text-sm text-gray-600 text-center">
                Drag & drop or choose an image. On upload, the file is stored on
                Cloudinary.
              </p>
              <CldUploadWidget uploadPreset="client-project-architect">
                {({ open }) => {
                  return (
                    <button
                      className={`bg-${BRAND_COLOR}-600 rounded-lg py-2 px-4 mb-4 text-white hover:bg-${BRAND_COLOR}-700 transition duration-200`}
                      onClick={() => open()}
                    >
                      Upload an Image
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
