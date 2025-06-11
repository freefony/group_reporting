import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 flex flex-col gap-4">
            <legend className="legend">Setup your account</legend>
            <span className="text-xs italic text-gray-500">
              Please enter the code given to you by your group overseer or the secretary.
            </span>
            <label htmlFor="group-code" className="label">
              <span className="label-text">Group Code</span>
              <input type="text" className="input" placeholder="Enter Your Group Code" />
            </label>
            <button className="btn bg-black border-gray-600 border-2 text-white p-2 px-4 rounded-full">
              Get Started
            </button>
          </fieldset>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
