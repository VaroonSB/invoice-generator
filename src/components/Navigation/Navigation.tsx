import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="flex w-full justify-between items-center p-6 bg-orange-300 shadow-md">
      <Link className="text-2xl font-bold" href="/">
        K R Manufacture
      </Link>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              href="/generate"
              className="text-lg hover:text-gray-300 transition duration-300"
            >
              Generate
            </Link>
          </li>
          <li>
            <Link
              href="/search"
              className="text-lg hover:text-gray-300 transition duration-300"
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
