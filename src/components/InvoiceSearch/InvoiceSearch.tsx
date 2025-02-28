"use client";

import { useEffect, useState } from "react";
import { SearchInput } from "../Input";
import { Button } from "../Button";
import { InvoiceList } from "../InvoiceList.tsx";
import { useInvoice } from "@/context/InvoiceContext";
import { CustomerSuggestion } from "../CustomerSearch";
import { useCustomer } from "@/hooks/useCustomer";
import { DateSuggestion } from "./DateSuggestion";
import { useAppContext } from "@/context/AppContext";

export const InvoiceSearch = () => {
  const { setLoader } = useAppContext();

  const [yearQuery, setYearQuery] = useState<string>("");
  const [monthQuery, setMonthQuery] = useState<string>("");
  const [customerQuery, setCustomerQuery] = useState<string>("");

  const [showYearSuggestion, setShowYearSuggestion] = useState<boolean>(false);
  const [showMonthSuggestion, setShowMonthSuggestion] =
    useState<boolean>(false);

  const { invoiceList, searchInvoice } = useInvoice();

  const { customerList, setCustomerList, searchCustomer } = useCustomer();

  useEffect(() => {
    (async () => {
      setLoader(true);
      await searchInvoice(yearQuery, monthQuery, customerQuery);
      setLoader(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterHandler = async (fetchAll?: boolean) => {
    setLoader(true);
    await (fetchAll
      ? searchInvoice("", "", "")
      : searchInvoice(yearQuery, monthQuery, customerQuery));
    setLoader(false);
  };

  const renderInvoices = () => {
    const groupedInvoices = invoiceList.reduce((acc, invoice) => {
      if (!acc[invoice.year]) {
        acc[invoice.year] = {};
      }
      if (!acc[invoice.year][invoice.month]) {
        acc[invoice.year][invoice.month] = [];
      }
      acc[invoice.year][invoice.month].push(invoice.name);
      return acc;
    }, {} as Record<string, Record<string, string[]>>);

    return <InvoiceList invoices={groupedInvoices} invoiceList={invoiceList} />;
  };

  return (
    <div className="flex flex-col bg-gray-100 min-h-screen gap-4">
      <section
        id="Filters"
        className="flex flex-wrap rounded-3xl mt-2 mx-4 bg-white shadow-xl"
      >
        <section id="Filter Input" className="flex gap-2 m-4 w-full">
          <SearchInput
            title="Year"
            value={yearQuery}
            onChange={(event) => {
              setYearQuery(event.target.value);
            }}
            onClick={() => {
              setShowYearSuggestion(true);
            }}
          />
          <SearchInput
            title="Month"
            value={monthQuery}
            onChange={(event) => {
              setMonthQuery(event.target.value);
            }}
            onClick={() => {
              setShowMonthSuggestion(true);
            }}
          />
          <SearchInput
            title="Customer"
            value={customerQuery}
            onChange={(event) => {
              setCustomerQuery(event.target.value);
              searchCustomer(customerQuery);
            }}
            onClick={() => {
              searchCustomer(customerQuery);
            }}
          />
          <Button
            label="Filter"
            onClick={() => {
              filterHandler();
            }}
          />
        </section>
        <section id="Suggestions" className="flex w-full px-4 py-2 gap-2">
          <div className="w-full">
            {showYearSuggestion && (
              <DateSuggestion
                list={invoiceList}
                filter="year"
                onSelect={(value) => {
                  setYearQuery(value);
                  setShowYearSuggestion(false);
                }}
              />
            )}
          </div>
          <div className="w-full">
            {showMonthSuggestion && (
              <DateSuggestion
                list={invoiceList}
                filter="month"
                onSelect={(value) => {
                  setMonthQuery(value);
                  setShowMonthSuggestion(false);
                }}
              />
            )}
          </div>
          <div className="w-full">
            {customerList.length > 0 && (
              <CustomerSuggestion
                customerList={customerList.slice(0, 3)}
                onSelectCustomer={(customer) => {
                  setCustomerQuery(customer.customerName);
                  setCustomerList([]);
                }}
              />
            )}
          </div>
          {(showMonthSuggestion ||
            showYearSuggestion ||
            customerList.length ||
            yearQuery ||
            customerQuery ||
            monthQuery) && (
            <Button
              label="Clear"
              classNames="h-12"
              onClick={() => {
                setShowYearSuggestion(false);
                setShowMonthSuggestion(false);
                setCustomerList([]);
                setCustomerQuery("");
                setMonthQuery("");
                setYearQuery("");
                filterHandler(true);
              }}
            />
          )}
        </section>
      </section>
      {invoiceList.length > 0 && renderInvoices()}
    </div>
  );
};
