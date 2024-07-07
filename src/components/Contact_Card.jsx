export default function Contact_Card({ contact_name, mobile }) {
  return (
    <>
      <div className="w-full flex px-3 py-1 gap-1 items-center">
        <div className="rounded overflow-hidden">
          <img
            style={{ height: "30px" }}
            src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
            alt=""
          />
        </div>
        <div className="text-white text-xl">{contact_name}</div>
        <div className="text-white text-xl">({mobile})</div>
      </div>
    </>
  );
}
