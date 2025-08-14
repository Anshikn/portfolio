
function Contacts() {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center space-y-6">
        <h2 className="text-4xl mb-8">Let's Talk!</h2>
        <div className="space-y-4 text-xl">
          <p>
            <a
              href="mailto:anshikanshi77@gmail.com"
              className="text-purple-500 hover:underline"
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
