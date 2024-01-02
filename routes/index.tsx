import { useSignal } from "@preact/signals";

// Define the base64-encoded image as a constant
const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...";  // Replace with your actual base64 data

export default function Home() {
  const message = useSignal("Hello, Deno Deploy!");
const logoBase64 = "data:image/jpeg;base64,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";
  return (
    <div class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-20">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        {/* Use the base64-encoded image as the background */}
        <div
          class="my-6"
          style={{
            backgroundImage: `url(${logoBase64})`,
            width: "128px",
            height: "128px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          alt="the Fresh logo: a sliced lemon dripping with juice"
        ></div>
        <h1 class="text-4xl font-bold">Welcome to Bejamas Deno Deploy Article</h1>
        <p class="my-4">
          Explore the power of Deno Deploy!
        </p>
        <p class="text-lg text-gray-700 my-6">{message}</p>
      </div>
    </div>
  );
}
