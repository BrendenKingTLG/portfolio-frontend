import React from "react";
import ProductRow from "../components/ProductRow";

export default function Order({ products }) {
  return (
    <>
      <section className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Order</h2>
        <article className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p id="contactp" className="text-center text-gray-600 mb-4">
            Make an order
          </p>
          <form action="/order" method="POST" id="orderform">
            <fieldset className="mb-4">
              <legend className="text-lg font-semibold mb-2">
                Order Stuff
              </legend>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jack Smith"
                  required
                  autoFocus
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="jacksmith@hotmail.com"
                  pattern="[^ @]+@[^ @]+\.[a-z]+"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Address
                </label>
                <textarea
                  name="address"
                  placeholder="1234 exampull road, Oklahoma City, OK 12345"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>
            </fieldset>
            <fieldset className="mb-4">
              <table className="w-full" id="ordertable">
                <thead>
                  <tr>
                    <th className="text-left">Product/Company</th>
                    <th className="text-left">Price</th>
                    <th className="text-left">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <ProductRow product={product} key={index} />
                  ))}
                </tbody>
              </table>
              <div className="mb-4">
                <label
                  htmlFor="deliveryinstructions"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Delivery Instructions
                </label>
                <textarea
                  name="deliveryinstructions"
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </fieldset>
          </form>
        </article>
      </section>
    </>
  );
}
