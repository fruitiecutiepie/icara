import { useParams } from "@solidjs/router";

export default function Add() {
  const params = useParams();

  return (
    <div>
      <h1>Add</h1>
      <p>Params: {JSON.stringify(params)}</p>
    </div>
  )
}