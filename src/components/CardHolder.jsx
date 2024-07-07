import { useEffect, useState } from "react";
import Contact_Card from "./Contact_Card";
import SpinLoader from "./SpinLoader";
import contactStore from "../stores/contactStore";
export default function CardHolder() {
  // const [store.data, setData] = useState(null);
  // const [store.load,setLoad] = useState(true);
  const store = contactStore();
  useEffect(() => {
    store.getData();
  }, []);

  console.log(store.data);
  return (
    <>
      <div className="flex flex-col">
        {store.load && <SpinLoader />}
        {!store.load &&
          store.data.map((item) => {
            return (
              <Contact_Card
                key={item._id}
                contact_name={item.person_name}
                mobile={item.mob[0]["mob_id"]}
              />
            );
          })}
      </div>
    </>
  );
}
