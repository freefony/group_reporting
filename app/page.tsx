import { IconPlus } from './components/Icons';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <fieldset className="fieldset border-base-300 rounded-box w-sm border p-6 flex flex-col gap-4 text-md bg-white">
            <legend className="legend text-md bg-gray-300 dark:bg-gray-600  dark:text-white dark:border-gray-500 rounded-2xl p-2 px-4">
              Setup your account
            </legend>
            <span className="text-sm italic text-gray-600">
              Please enter the code given to you by your group overseer or the secretary.
            </span>
            <label htmlFor="group-code" className="label">
              <input type="text" className="input" placeholder="Enter Your Group Code" />
            </label>
            <button className="btn bg-gray-600 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700 border-gray-600 border-2 text-white p-2 px-4 rounded-full flex items-center gap-2 ">
              <IconPlus />
              Get Started
            </button>
          </fieldset>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
