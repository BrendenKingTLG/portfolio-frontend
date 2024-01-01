export default function Contact() {
  return (
    <>
      <div className="text-center my-8">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p id="contactp" className="mx-auto max-w-lg">
          The htmlForm below is a way htmlFor you to send a message to the
          website's owner. Enter your name, email address, and a message, and we
          will get back to you!
        </p>
      </div>
      <section className="mx-auto max-w-lg">
        <article className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <form action="/contact" method="POST">
            <fieldset id="conhtmlForm">
              <legend className="text-lg font-semibold mb-4">Contact Us</legend>
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
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Hi, I love your website"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="topic"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message topic
                </label>
                <select
                  name="subject"
                  required
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option>Site Issue</option>
                  <option>Cudos</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-4">
                <p>Do you want to offer Brenden a job?</p>
                <label htmlFor="yes" className="inline-block mr-2">
                  <input
                    type="radio"
                    name="joboffer"
                    id="yes"
                    className="mr-1"
                  />
                  Yes
                </label>
                <label htmlFor="no" className="inline-block mr-2">
                  <input
                    type="radio"
                    name="joboffer"
                    id="no"
                    className="mr-1"
                  />
                  No
                </label>
                <label htmlFor="maybe" className="inline-block">
                  <input
                    type="radio"
                    name="joboffer"
                    id="maybe"
                    className="mr-1"
                  />
                  Maybe
                </label>
              </div>
              <div className="mb-4">
                <p>If yes, select the job pay range</p>
                <label htmlFor="over100k" className="block">
                  <input
                    type="checkbox"
                    name="payrange"
                    id="over100k"
                    className="mr-1"
                  />
                  Over 100k
                </label>
                <label htmlFor="70k-100k" className="block">
                  <input
                    type="checkbox"
                    name="payrange"
                    id="70k-100k"
                    className="mr-1"
                  />
                  70K - 100k
                </label>
                <label htmlFor="under70k" className="block">
                  <input
                    type="checkbox"
                    name="payrange"
                    id="under70k"
                    className="mr-1"
                  />
                  Under 70k
                </label>
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
