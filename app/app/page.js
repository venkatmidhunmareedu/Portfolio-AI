import Chatbody from "./_components/Chatbody";

export default function Home() {
  return (
    <main class="h-screen w-screen bg-white font-[poppins]">
      <nav class="h-[10vh] border-b-[1px] py-4 text-center">
        <a href="/" class="text-xl font-bold text-slate-700">Portfolio</a>
      </nav>
      <div class="scrollbar flex h-[78vh] w-screen overflow-auto justify-center">
        <Chatbody />
      </div>
      <div class="mx-4 flex items-center justify-center space-x-2 md:space-x-10 py-3">
        <input type="text" placeholder="Ask me anything about me..." class="w-full rounded border bg-gray-100 px-3 py-3 text-sm outline-none text-slate-600" />
        <button class="flex scale-90 rounded bg-blue-600 px-3 py-2 text-white shadow hover:bg-blue-700 focus:ring-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
        </button>
      </div>
    </main>

  );
}
