"use client";

import CustomerForm from "@/components/customer/CustomerForm";
import { CustomerControllerService } from "@/packages/open-api/codegen";
import { Card } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { mapCustomerDtoToFormValues } from "@/utils/customer.mapper";

const NewCustomer: NextPage = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const { data: customer } = useQuery({
    queryKey: ["customer"],
    queryFn: async () => {
      return CustomerControllerService.getCustomer(id);
    },
    enabled: !!id,
  });
  return (
    <Card sx={{ padding: "2rem" }}>
      <CustomerForm
        defaultValues={
          customer ? mapCustomerDtoToFormValues(customer) : undefined
        }
        customerId={id}
        onSuccess={() => {
          toast.success("Customer updated");
          router.push("/customers");
        }}
        onError={() => {
          toast.error("Customer update failed");
        }}
      />
    </Card>
  );
};

export default NewCustomer;
