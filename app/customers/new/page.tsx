"use client";

import CustomerForm from "@/components/customer/CustomerForm";
import { Card } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const NewCustomer: NextPage = () => {
  const router = useRouter();
  return (
    <Card sx={{ padding: "2rem" }}>
      <CustomerForm
        onSuccess={() => {
          toast.success("Customer created");
          router.push("/customers");
        }}
        onError={() => {
          toast.error("Customer creation failed");
        }}
      />
    </Card>
  );
};

export default NewCustomer;
