import React, { useRef } from "react";

const RefExample = () => {
  const ref = useRef(null);

  const handleScroll = () => {
    if (!ref || !ref.current) {
      return;
    }

    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <button className="btn btn-info" onClick={handleScroll}>
        Vai in basso
      </button>
      <div className="my-5 mx-auto" style={{ height: "100vh" }}></div>
      <h1 ref={ref}>Use Ref</h1>
    </div>
  );
};

export default RefExample;
