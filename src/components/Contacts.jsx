
const Contacts = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="text-center space-y-4 md:space-y-6">
        <h2 className="text-2xl md:text-4xl mb-6 md:mb-8">Let's Talk!</h2>
        <div className="space-y-3 md:space-y-4 text-lg md:text-xl">
          <p>
            <a
              href="mailto:anshikanshi77@gmail.com"
              className="text-purple-500 hover:underline break-all"
            >
              anshikanshi77@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+919846069809"
              className="text-purple-500 hover:underline"
            >
              +91 9846069809
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts
