import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="flex w-full justify-between items-center p-6 bg-gradient-to-r from-yellow-500 to-rose-800 shadow-lg">
      <Link className="text-3xl font-bold text-white hover:text-gray-200 transition duration-300" href="/">
        K R Manufacture
      </Link>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link
              href="/generate"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              Generate
            </Link>
          </li>
          <li>
            <Link
              href="/invoices"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              Invoices
            </Link>
          </li>
          <li>
            <Link
              href="/customers"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              Customers
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
