import { useState } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import axios from "axios";

function AddCard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = async () => {
    if (!title || !description)
      alert("All fields must be filled before submit");
    else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/cards/create`, {
          title,
          description,
        })
        .then((res) => {
          console.log(res);
          alert("Card created successfully");
          setDescription("");
          setTitle("");
        })
        .catch((err) => {
          console.log(err);
          alert("Submission error- " + err.response.data.message);
        });
    }
  };
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="bg-gray-200 px-4 py-6 w-[300px] sm:w-fit space-y-5 rounded-lg">
        <h1 className="text-center text-2xl font-bold text-black/65 border-solid border-b-4 border-black/60 pb-2">
          Add a card
        </h1>
        <div className="space-y-4">
          <Input
            label="Enter Title"
            placeholder="e.g. Help Center"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
          />

          <TextArea
            label="Enter Description"
            placeholder="e.g. write some sentences."
            className="h-[200px] "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required={true}
          />

          <div
            className="w-fit mx-auto border-black border-solid border-2 rounded-lg px-5 py-2 font-bold cursor-pointer hover:bg-black hover:text-white"
            onClick={handleSubmit}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
