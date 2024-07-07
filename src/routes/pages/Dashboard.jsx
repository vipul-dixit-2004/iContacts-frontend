import { useState } from "react";

import CardHolder from "../../components/CardHolder";
import Profile from "../../components/Profile";
import contactStore from "../../stores/contactStore";

export default function Dashboard() {
  const store = contactStore();
  return (
    <>
      {store.fail && (
        <h1 className="text-red-600">Error Please try again...</h1>
      )}
      {!store.fail && (
        <>
          <div className="bg-slate-900 h-full w-4/5 flex flex-row">
            <CardHolder />
          </div>
          <div className="bg-slate-500 h-full w-2/5">
            <Profile />
          </div>
        </>
      )}
    </>
  );
}
