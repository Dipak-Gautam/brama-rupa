import React, { useRef, useState } from "react";
import TextInput from "../../InputFields/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router";

const UserDetails = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(0);
  const name = useRef();
  const phone = useRef();
  const address = useRef();

  const handleProceed = () => {
    if (
      name.current?.value == "" ||
      name.current?.value == null ||
      name.current?.value.length < 3
    ) {
      setErr(1);
    } else if (phone.current?.value == "") {
      setErr(2);
    } else if (address.current?.value == "") {
      setErr(3);
    } else {
      setErr(0);
      alert("Oder placed Sucessfully");
      localStorage.removeItem("cart1");
      navigate("/");
    }
  };
  return (
    <div className="mt-4">
      <TextInput
        label={"Name"}
        placeholder={"Enter a Name"}
        ref={name}
        err={err == 1 && true}
      />
      <TextInput
        label={"Phone"}
        placeholder={"Enter a PhoneNumber"}
        ref={phone}
        err={err == 2 && true}
      />
      <TextInput
        label={"Address"}
        placeholder={"Enter a Address"}
        ref={address}
        err={err == 3 && true}
      />
      <div className="flex justify-center">
        <OrangeButton title={"Proceed"} onClick={() => handleProceed()} />
      </div>
    </div>
  );
};

export default UserDetails;
