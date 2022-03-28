import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
  hashtags: string;
};

export default function Upload() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const title = data.title;
    const description = data.description;
    const hashtags = data.hashtags;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, hashtags }),
    };

    await fetch("http://localhost:3000/api/upload", requestOptions).then(
      (res) => {
        if (res.ok) {
          alert("saved");
        } else {
          alert("error");
        }
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Wetube | Upload</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", {
            required: true,
            minLength: 2,
            maxLength: 20,
          })}
          placeholder="Title"
          type="text"
          name="title"
        />
        <input
          {...register("description", {
            required: true,
            minLength: 2,
            maxLength: 200,
          })}
          placeholder="Description"
          type="text"
          name="description"
        />
        <input
          {...register("hashtags", {
            required: true,
            minLength: 2,
            maxLength: 10,
          })}
          placeholder="Hashtags, separated by comma"
          type="text"
          name="hashtags"
        />
        <input type="submit" value="Upload Video" />
      </form>
    </>
  );
}
