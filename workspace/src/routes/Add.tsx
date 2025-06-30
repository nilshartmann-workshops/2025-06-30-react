import { Link } from "react-router";

import PlantForm from "../components/PlantForm.tsx";

export default function Add() {
  return (
    <>
      <Link className={"primary"} to={"/"}>
        Home
      </Link>
      <PlantForm />
    </>
  );
}
