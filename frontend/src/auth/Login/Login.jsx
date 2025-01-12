import { React } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Divider from "@/components/custom/Divider";
import { useToast } from "@/hooks/use-toast";

import { LoginSchema } from "@/schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link } from "react-router-dom";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Description } from "@radix-ui/react-toast";

export default function Login() {
  const { toast } = useToast();

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // STEP 1: Create a form using react-hook-form and zod
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // STEP 2: Define a function to handle form submission
  const onSubmit = (data) => {
    console.log("Form submitted");
    console.log(data);
    toast({
      title: "Form submitted",
      description: "Logic for form submission goes here",
    });
  };

  const { isSubmitting, setIsSubmitting } = useState(false);

  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center items-center min-h-[calc(100vh-4rem)]">
        <Card className="md:w-[450px] w-[350px]  ">
          <CardHeader className="p-4">
            <CardTitle className="font-bree">Login</CardTitle>
            <CardDescription>Please Login to continue.</CardDescription>
          </CardHeader>

          <Divider />

          <CardContent className="p-4">
            {/* <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label>
                  Email{" "}
                  <Input
                    placeholder="example@gmail.com"
                    type="email"
                    {...register("email")}
                  />
                </Label>
              </div>
            </form> */}

            {/* Login form using ShadcnUI, with react-hook-form and zod */}

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Heisenberg@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="------"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mx-auto w-full" type="submit">
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>

          <Divider />

          <CardFooter className="p-4">
            <p className="text-center mx-auto">
              Don't have an account?{" "}
              <Link to="/Signup" className="text-blue-500">
                Signup
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}