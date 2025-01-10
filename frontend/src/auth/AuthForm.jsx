// import React from "react";
// import Divider from "@/components/custom/Divider";

// import { useForm } from "react-hook-form";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// function AuthForm(label, title, backButtonHref, backButtonLabel) {
//   return (
//     <div className="flex container justify-center items-center h-[calc(100vh-5rem)]">
//       <Card className="lg:max-w-lg md:max-w-md max-w-sm ">
//         <CardHeader>
//           <CardTitle className="font-bree">{title}</CardTitle>
//           <CardDescription>
//             Please select you role and Login to continue.
//           </CardDescription>
//         </CardHeader>
//         <Divider />
//         <CardContent className="mt-4">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <Label>Email</Label>
//               <Input
//                 placeholder="example@gmail.com"
//                 type="email"
//                 {...register("email")}
//               />
//             </div>
//           </form>
//         </CardContent>
//         <CardFooter>
//           <Button className="mx-auto w-full">Login</Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// export default AuthForm;
