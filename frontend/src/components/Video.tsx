import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getVideos } from "../api";

export default function Video() {
  const [params, setParams] = useState<string | undefined>("");

  const param = useParams();

  useEffect(() => {
    setParams(param.id);
  }, [param.id]);

  useEffect(() => {
    getVideos(params);
  }, [params]);

  return <span>{params}</span>;
}
