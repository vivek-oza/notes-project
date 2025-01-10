import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

import { Unlink } from "lucide-react";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold flex flex-row justify-center items-center gap-5 text-center">
          <Unlink size={"50px"} />
          404 NOT FOUND
        </h1>
        <Link to={"/"}>
          <Button>
            <MoveLeft />
            Back to Home
          </Button>
        </Link>
      </div>
    </>
  );
}
